import { GlobalState } from '../lib/store/Global';
import { useHookstate } from '@hookstate/core';

const ResultsShowing = () => {
	const { monthlyRepayments, totalRepayments, interestOnly, interestRadio } =
		useHookstate(GlobalState);

	return (
		<div className="bg-slate-900 text-slate-100 flex flex-1 flex-col justify-center gap-3 p-6 md:rounded-r-3xl md:rounded-bl-[100px] md:p-5">
			<h1 className="font-semibold text-xl">Your Results</h1>
			<p className="text-slate-100">
				Your results are shown below based on the information you provided. to
				adjust the results, edit the form and click 'calculate repayments'
				again.
			</p>
			<div className="flex flex-col gap-3 rounded-lg border-t-4 p-3 border-t-lime bg-slate-950">
				{interestRadio.value ? (
					<div>
						<h2 className="text-slate-100">Your Interest accumulated</h2>
						<p className="text-lime font-bold text-3xl">
							£{interestOnly.value}
						</p>
					</div>
				) : (
					<div>
						<h2 className="text-slate-100">Your monthly repayments</h2>
						<p className="text-lime font-bold text-3xl">
							£{monthlyRepayments.value}
						</p>
					</div>
				)}

				<hr className="text-slate-100"></hr>
				<h2 className="text-slate-100">Total you'll repay over the term</h2>
				<p className="font-bold text-xl"> £{totalRepayments.value}</p>
			</div>
		</div>
	);
};
export default ResultsShowing;
