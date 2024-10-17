import ResultsImg from '../assets/images/illustration-empty.svg';

const Results = () => {
	return (
		<div className="bg-slate-900 text-slate-100 flex flex-col justify-center gap-3 p-6 text-center">
			<img src={ResultsImg} alt="" className="w-[70%] h-[70%] mx-auto" />
			<h1 className="font-semibold text-xl">Results shown here</h1>
			<p>
				Complete the form and click 'calculate repayments' to see what your
				monthly repayments would be.
			</p>
		</div>
	);
};
export default Results;
