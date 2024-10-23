import { hookstate, useHookstate } from '@hookstate/core';

interface Task {
	name: string;
	priority?: number;
}

//the first time it renders it shows the 'your results will appear here page
export const ExampleComponent = () => {
	const state: State<Task[]> = useHookstate([{ name: 'First task' }] as Task[]);

	return (
		<div>
			{state.map((taskState: State<Task>, taskIndex) => (
				<TaskEditor key={taskIndex} taskState={taskstate} />
			))}
{/* 
onclick change the results to show what is grabbed from the calculations in the mortgage calculator */}
			<button onClick={() => state.merge([{ name: 'untitled' }])}>
				Add task
			</button>
		</div>
	);
};

function TaskEditor(props: { taskState: State<Task> }) {
	const taskState = props.taskState;
	return (
		<p>
			<input
				value={taskState.name.get()}
				onChange={(e) => taskState.name.set(e.target.value)}
			/>
		</p>
	);
}
