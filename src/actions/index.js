export function increment(amount) {
	return {
		type: 'ADD',
		amount,
	};
}
export function decrement(amount) {
	return {
		type: 'WITHDRAWAL',
		amount,
	};
}
