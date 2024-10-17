import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

//set the type for the formfields
type FormFields = z.infer<typeof schema>;

const ReactHookForm = () => {
	/*does not need usestate/value/onchange/handlesubmit/errors
with RHF, we need to use the useForm custom hook. 
1. first install react-hook-form
2.just before the return, create a variable called form. form is an object that contains several properties and methods to manage the form NB: with TS, we have to set the types of our form fields. as shown above, and then add the types to the useForm like so: 
`const form = useForm<FormFields>();

3. the next step is to connect the form element and inputs to RHF for the form state and validation. we do this using register() by destructuring the form object and then using the register function on the inputs. when the input value is obtained, it is sent to RHF to manage its state for us

...{...register('email')} means that this input will be registered with the email field. register() returns an object with properties that allow RHF to manage the input and track the value which it stores. when the form is submitted, this value is in the for state and available for further validation

4. Connect the form element so that onSubmit we have our custom onsubmit function instead of the default behaviour which is to send it to a URL. define our custom function and add SubmitHandler as the type since we are using TS, then give it the FormFields. the data that we get will simply be an object with corresponding values. we do not use the onSubmit directly. we use the handlesubmit function fro react hookform. handlesubmit takes the function s an argument

`	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};
  `
	<form className="gap-2" onSubmit={handleSubmit(onSubmit)}>

  5. at this point the form is functional, but needs validation. the register function takes in a name as an argument (must) and an optional object which is helpful for validation eg required:true, maxLength, minLength, disabled.

  6.at thispoint thne user cannot see any errors so we need to use formstate which we get from useform. this is an object which we need to destructure like so: formState: { errors },

  we then add a div below each of the inputs to show the error like so:

  	{errors.password && (
				<div className="text-red-500">{errors.password.message}</div>
			)}

but it still does not show the error. why? bcz we have set errors correctly, but have no defined message for the error. so we have to implement error messages. so instead of required to be a boolean, we change required to show a string. like so

{...register('email', {
					required: 'email is required',
					pattern: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
				})}

for the PW we can add an object at the minLength and pass in a value and a message

7. what if we want to do this in an async function? to await sthy, maybe send to the server, get a response and then show it, plus also disable the button? w can get that by making the onSubmit handle an asynchronous fn. from the formstate we can also get 'isSubmitting' which will be true when the for is submitting. then make the onsubmit fn async.

	const {...formState: { errors, isSubmitting },
	} = useForm<FormFields>();

so at the button, disabled={isSubmitting} so that disabled is true when the form is submitting, then add dynamic text for the button

	<button
				type="submit"
				disabled={isSubmitting}
				className="border border-slate-800 bg-yellow-100"
			>
				{isSubmitting ? 'Loading' : 'Submit'}
			</button>.

9. Let us say that the form has an error from the backend, how do we plug in the error into the form and show the user? we access another function called setError. we use a try catch block and in the catch, we use the setError and pass it for the email. we do this in the onSubmit() function. we get the setError destructured from the form object, then add a try,catch on the async onSubmit function , catch the error and use seterror for the argument (either name, emal or root), plus the message

10. add default values to useForm<>({
defaultValues: {
email: 'test@email.com'}
})

11. use zod - install 1. hook-form/resolver and 2. zod resolver. import them.
use z to define a schema.

const schema = z.object({
	email: z.string().email(),
	passowrd: z.string().min(8),
});

but now we dont need the formfields because we can infer like so, and also change it at useform after the default values

type FormFields = z.infer<typeof schema>;

useForm<FormFields>({
		defaultValues: {
			email: 'test@gmail.com',
		},
		//this connects schema to RHF thru zod resolver
		resolver: zodResolver(schema),
	});

12. remove our own validation

  */

	//initialize the form handling
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		defaultValues: {
			email: 'test@gmail.com',
		},
		//this connects schema to RHF thru zod resolver
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			// throw new Error();
			console.log(data);
		} catch (error) {
			setError('root', {
				message: 'password tena?',
			});
		}
	};

	return (
		<form className="gap-2" onSubmit={handleSubmit(onSubmit)}>
			<input
				className="border border-slate-800"
				// {...register('email', {
				// 	required: 'email is required',
				// 	validate: (value) => {
				// 		if (!value.includes('@')) {
				// 			return 'email must include @';
				// 		}
				// 		return true;
				// 	},
				// })}
				{...register('email')}
				type="text"
				placeholder="Email"
			/>
			{errors.email && <div className="text-red">{errors.email.message}</div>}

			<input
				className="border border-slate-800"
				// {...register('password', {
				// 	required: 'password is required',
				// 	//to return a number, add an object with a value and the message
				// 	minLength: {
				// 		value: 8,
				// 		message: 'Password must have at least 8 characters',
				// 	},
				// })}
				{...register('password')}
				type="password"
				placeholder="Password"
			/>
			{errors.password && (
				<div className="text-red">{errors.password.message}</div>
			)}

			<button
				type="submit"
				disabled={isSubmitting}
				className="border border-slate-800 bg-yellow-100"
			>
				{isSubmitting ? 'Loading' : 'Submit'}
			</button>
			{errors.root && <div className="text-red">{errors.root.message}</div>}
		</form>
	);
};
export default ReactHookForm;
