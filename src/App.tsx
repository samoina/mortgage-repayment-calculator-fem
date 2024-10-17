import MortgageCalculator from './components/MortgageCalculator';
import Results from './components/Results';

const App = () => {
	return (
		<div className="md:bg-slate-100 md:h-screen md:flex md:justify-center md:items-center">
			<div className="text-slate-900 md:flex md:align-center md:mx-auto md:bg-white md:rounded-l-3xl">
				<MortgageCalculator />
				<Results />
			</div>
		</div>
	);
};
export default App;
