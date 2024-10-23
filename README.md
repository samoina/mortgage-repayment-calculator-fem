# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

_Mortgage Calculator Clear All Mortgage Amount Mortgage Term Interest Rate Mortgage Type Repayment Interest Only Calculate Repayments Results shown here Complete the form and click “calculate repayments” to see what your monthly repayments would be. Your results Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again. Your monthly repayments Total you'll repay over the term_

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

### What I learned

#### Incorporating the style guide with Tailwind css

I needed to do this under the `theme.extend` section to create the corresponding classes and font as below. I also imported the link for the font in the index.html head section. Within my code, I then will prefix the font from the style-guide using `font-`

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js, ts, jsx, tsx}'],
	theme: {
		extend: {
			colors: {
				lime: 'hsl(61, 70%, 52%)',
				red: 'hsl(4, 69%, 50%)',
				slate: {
					100: 'hsl(202, 86%, 94%)',
					300: 'hsl(203, 41%, 72%)',
					500: 'hsl(200, 26%, 54%)',
					700: 'hsl(200, 24%, 40%)',
					900: 'hsl(202, 55%, 16%)',
				},
			},
			fontFamily: {
				jakarta: ['Plus Jakarta Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
```

#### Global state  using @hookstate/core package



### Continued development

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/samoina)
- Twitter - [@samoina](https://www.twitter.com/samoina)

## Acknowledgments
