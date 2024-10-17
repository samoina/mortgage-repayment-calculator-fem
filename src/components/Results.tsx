import ResultsImg from '../assets/images/illustration-empty.svg';

const Results = () => {
	return (
		<div className="bg-slate-900 text-slate-100 flex flex-1 flex-col justify-center gap-3 p-6 text-center md:rounded-r-3xl md:rounded-bl-[100px] md:p-5">
			<img src={ResultsImg} alt="" className="w-[50%] h-[50%] mx-auto" />
			<h1 className="font-semibold text-xl">Results shown here</h1>
			<p>
				Complete the form and click 'calculate repayments' to see what your
				monthly repayments would be.
			</p>
		</div>
	);
};
export default Results;
