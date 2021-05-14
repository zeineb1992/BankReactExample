const initialState = {
	items: [{ amount: 0, date: 'JJ/MM/YYYY', operation: 'Deposit/Withdrawal' }],
	balance: 0,
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				items: [
					...state.items,
					{
						amount: action.amount,
						date: new Date().toLocaleDateString(),
						operation: 'Deposit',
					},
				],
				balance: +state.balance + +action.amount,
			};
		case 'WITHDRAWAL':
			return {
				...state,
				items: [
					...state.items,
					{
						amount: action.amount,
						date: new Date().toLocaleDateString(),
						operation: 'Withdrawal',
					},
				],
				balance: +state.balance - +action.amount,
			};

		default:
			return state;
	}
};
export default reducer;
