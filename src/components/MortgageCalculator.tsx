import myCalc from '../assets/images/icon-calculator.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import Results from './Results';
import ResultsShowing from './ResultsShowing';
import { useHookstate } from '@hookstate/core';
import { GlobalState } from '../lib/store/Global';

const MortgageCalculator = () => {
	type FormFields = {
		mortgageAmount: string;
		mortgageTerm: string;
		mortgageRate: string;
		mortgageType: string;
	};

	//get state from the global state
	const { monthlyRepayments, interestOnly, totalRepayments, interestRadio } =
		useHookstate(GlobalState);

	const {
		register,
		handleSubmit,
		formState: { isSubmitSuccessful, errors },
	} = useForm<FormFields>();

	const onSubmitForm: SubmitHandler<FormFields> = (data) => {
		const { mortgageAmount, mortgageRate, mortgageTerm, mortgageType } = data;
		console.log(mortgageType);

		/*
	M = P* (r * (1 + r)^n) / ((1 + r)^n - 1)

where M is monthly payment, P is the principal amount, r is the monthly interest rate, n is number of payments in months	*/

		//convert to numbers
		const mortgageAmountNumber = parseInt(mortgageAmount, 10);
		const mortgageRateNumber = parseFloat(mortgageRate);
		const mortgageTermNumber = parseInt(mortgageTerm, 10);

		const monthlyRate = mortgageRateNumber / (100 * 12);
		const numberOfPayments = mortgageTermNumber * 12;

		const monthlyPayments =
			(mortgageAmountNumber *
				(monthlyRate * (1 + monthlyRate) ** numberOfPayments)) /
			((1 + monthlyRate) ** numberOfPayments - 1);

		const totalPayments = monthlyPayments * numberOfPayments;
		const interest = totalPayments - mortgageAmountNumber;

		const roundedTotalPayments = totalPayments.toFixed(2);
		const roundedInterest = interest.toFixed(2);

		GlobalState.set({
			monthlyRepayments: monthlyPayments.toFixed(2).toLocaleString('en-us'),
			totalRepayments: roundedTotalPayments.toLocaleString('en-us'),
			interestOnly: roundedInterest.toLocaleString('en-us'),
		});

		console.log(
			monthlyPayments.toFixed(2),
			roundedTotalPayments,
			roundedInterest
		);

		if (mortgageType === 'Repayment') {
			console.log(GlobalState.monthlyRepayments);
			GlobalState.repaymentRadio.set(true);
		} else {
			console.log(roundedInterest);
			GlobalState.interestRadio.set(true);
		}
	};

	return (
		<>
			<div className="flex flex-1 flex-col justify-around m-4  b-2 pl-2 md:bg-white md:m-0 md:p-10 md:rounded-l-3xl">
				<h1 className="font-bold text-xl">Mortgage Calculator</h1>
				<p className="underline underline-offset-1 text-slate-700">Clear All</p>
				<form className="mt-4 w-[98%]" onSubmit={handleSubmit(onSubmitForm)}>
					<label>
						Mortgage Amount <br></br>
						<div className="flex border border-slate-300 mt-2 rounded-md mb-1">
							<span className="bg-slate-100 w-[8%] p-2 text-slate-700 text-lg flex justify-center rounded-l-md font-bold">
								£
							</span>
							<input
								{...register('mortgageAmount', {
									required: 'Add a mortgage Amount',
									validate: (value) => {
										const parsedValue = parseFloat(value);
										if (isNaN(parsedValue))
											return 'Mortgage amount must be a number';
										if (parsedValue < 0)
											return 'Mortgage amount cannot be negative';
									},
								})}
								type="text"
								placeholder="300,000"
								className="w-[92%] pl-3 font-bold text-slate-900 text-lg rounded-r-lg"
							/>
						</div>
						{errors.mortgageAmount && (
							<div className="text-red mb-7">
								{errors.mortgageAmount.message}
							</div>
						)}
					</label>

					<label>
						Mortgage Term <br></br>
						<div className="flex border border-slate-300 mt-2 mb-1 rounded-md">
							<input
								{...register('mortgageTerm', {
									required: 'Add the term limit for the mortgage',
									validate: (val) => {
										const parsedVal = parseFloat(val);
										if (isNaN(parsedVal))
											return 'Mortgage Term must be a number';
										if (parsedVal < 0)
											return 'Mortgage term cannot be less than 0';
									},
								})}
								type="text"
								placeholder="25"
								className="w-[92%] pl-5 font-bold text-slate-900 text-lg rounded-l-lg"
							/>
							<span className="bg-slate-100 w-[15%] p-2 text-slate-700 text-lg flex justify-center rounded-r-md font-bold">
								years
							</span>
						</div>
						{errors.mortgageTerm && (
							<div className="text-red mb-7">{errors.mortgageTerm.message}</div>
						)}
					</label>

					<label>
						Interest Rate <br></br>
						<div className="flex border border-slate-300 mt-2 mb-1 rounded-md">
							<input
								{...register('mortgageRate', {
									required:
										'Add a mortgage interest rate that is equal to or more than 0%',
									validate: (val) => {
										const parsedVal = parseFloat(val);
										if (isNaN(parsedVal))
											return 'Mortgage Rate must be a number';
										if (parsedVal <= 0)
											return 'Mortgage Rate cannot be less than or equal to 0';
									},
								})}
								type="text"
								placeholder="5.25"
								className="w-[92%] pl-5 font-bold text-slate-900 text-lg rounded-l-lg"
							/>
							<span className="bg-slate-100 w-[10%] p-2 text-slate-700 text-lg flex justify-center rounded-r-md font-bold">
								%
							</span>
						</div>
						{errors.mortgageRate && (
							<div className="text-red mb-7">{errors.mortgageRate.message}</div>
						)}
					</label>

					<fieldset>
						<legend>Mortgage type</legend>
						<label>
							<div className="border border-slate-300 rounded-md p-3 mt-2 md:bg-white">
								<input
									type="radio"
									value="Repayment"
									// name="mortgage-type"
									{...register('mortgageType', {
										required: 'Please select a mortgage type',
									})}
									className="mx-4"
								/>
								Repayment
							</div>
						</label>
						<br />

						<label>
							<div className="border border-slate-300 rounded-md p-3 mb-4 md:bg-white">
								<input
									type="radio"
									// name="mortgage-type"
									value="Interest-only"
									{...register('mortgageType', {
										required: 'Please select a mortgage type',
									})}
									className="mx-4"
								/>
								Interest Only
							</div>
						</label>
						{errors.mortgageType && (
							<div className="text-red mb-7">{errors.mortgageType.message}</div>
						)}
					</fieldset>

					<button
						type="submit"
						className="bg-lime border rounded-3xl w-full flex p-3 justify-center text-xl font-bold"
					>
						<img src={myCalc} alt="" className="mr-2" /> Calculate Repayments
					</button>
				</form>
			</div>

			{isSubmitSuccessful ? <ResultsShowing /> : <Results />}
		</>
	);
};
export default MortgageCalculator;
