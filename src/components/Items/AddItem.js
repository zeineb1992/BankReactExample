import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddItem.module.css';
import { increment, decrement } from '../../actions/index';

const AddItem = (props) => {
	const [enteredAmount, setEnteredAmount] = useState('');
	const dispatch = useDispatch();
	const addAmountHandler = () => {
		dispatch(increment(enteredAmount));
		setEnteredAmount('');
	};
	const retrieveAmountHandler = () => {
		dispatch(decrement(enteredAmount));
		setEnteredAmount('');
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	return (
		<Card className={classes.input}>
			<div>
				<label htmlFor="amount">Amount</label>
				<input
					id="amount"
					type="number"
					value={enteredAmount}
					onChange={amountChangeHandler}
				/>
				<Button onClick={addAmountHandler.bind(this)}>Deposit Amount</Button>
				<Button onClick={retrieveAmountHandler}>Withdrawal amount</Button>
			</div>
		</Card>
	);
};

export default AddItem;
