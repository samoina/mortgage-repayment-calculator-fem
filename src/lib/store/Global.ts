import { hookstate } from '@hookstate/core';

export const GlobalState = hookstate({
	monthlyRepayments: '0',
	interestOnly: '0',
	totalRepayments: '0',
	interestRadio: undefined as boolean | undefined,
	repaymentRadio: undefined as boolean | undefined,
});
