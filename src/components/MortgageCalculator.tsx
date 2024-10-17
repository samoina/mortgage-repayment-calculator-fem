import myCalc from '../assets/images/icon-calculator.svg';

const MortgageCalculator = () => {
	return (
		<>
			<div className="flex flex-col justify-around m-4  b-2 pl-2">
				<h1 className="font-bold text-xl">Mortgage Calculator</h1>
				<p className="underline underline-offset-1 text-slate-700">Clear All</p>
				<form className="mt-4 w-[98%]">
					<label>
						Mortgage Amount <br></br>
						<div className="flex border border-slate-300 mt-2 rounded-md mb-7">
							<span className="bg-slate-100 w-[8%] p-2 text-slate-700 text-lg flex justify-center rounded-l-md font-bold">
								£
							</span>
							<input
								type="text"
								placeholder="300,000"
								className="w-[92%] pl-3 font-bold text-slate-900 text-lg rounded-r-lg"
							/>
						</div>
					</label>

					<label>
						Mortgage Term <br></br>
						<div className="flex border border-slate-300 mt-2 mb-7 rounded-md">
							<input
								type="text"
								placeholder="25"
								className="w-[92%] pl-5 font-bold text-slate-900 text-lg rounded-l-lg"
							/>
							<span className="bg-slate-100 w-[15%] p-2 text-slate-700 text-lg flex justify-center rounded-r-md font-bold">
								years
							</span>
						</div>
					</label>

					<label>
						Interest Rate <br></br>
						<div className="flex border border-slate-300 mt-2 mb-7 rounded-md">
							<input
								type="text"
								placeholder="5.25"
								className="w-[92%] pl-5 font-bold text-slate-900 text-lg rounded-l-lg"
							/>
							<span className="bg-slate-100 w-[10%] p-2 text-slate-700 text-lg flex justify-center rounded-r-md font-bold">
								%
							</span>
						</div>
					</label>

					<fieldset>
						<legend>Mortgage type</legend>
						<label>
							<div className="border border-slate-300 rounded-md p-3 mt-2">
								<input
									type="radio"
									value="Repayment"
									name="mortgage-type"
									className="mx-4"
								/>
								Repayment
							</div>
						</label>
						<br />

						<label>
							<div className="border border-slate-300 rounded-md p-3 mb-4">
								<input
									type="radio"
									name="mortgage-type"
									className="mx-4"
									value="Interest-only"
								/>
								Interest Only
							</div>
						</label>
					</fieldset>

					<button
						type="submit"
						className="bg-lime border rounded-3xl w-full flex p-3 justify-center text-xl font-bold"
					>
						<img src={myCalc} alt="" className="mr-2" /> Calculate Repayments
					</button>
				</form>
			</div>
		</>
	);
};
export default MortgageCalculator;
