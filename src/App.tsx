import MortgageCalculator from './components/MortgageCalculator';
import Results from './components/Results';

const App = () => {
	return (
		<>
			<div className="text-slate-900">
				<MortgageCalculator />
				<Results />
			</div>
		</>
	);
};
export default App;
