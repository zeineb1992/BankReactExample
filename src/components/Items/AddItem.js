import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddItem.module.css';
import { increment, decrement } from '../../actions/index';

const AddItem = (props) => {
	const [enteredAmount, setEnteredAmount] = useState('');
	const balance = useSelector((state) => state.balance);
	const dispatch = useDispatch();
	const addAmountHandler = () => {
		if (enteredAmount < 0) {
			alert('Please enter a positive number');
		} else {
			dispatch(increment(enteredAmount));
			setEnteredAmount('');
		}
	};
	const retrieveAmountHandler = () => {
		if (enteredAmount < 0) {
			alert('Please enter a positive number');
		} else if (enteredAmount > balance) {
			alert('You can not withdrawal more than ' + balance);
		} else {
			dispatch(decrement(enteredAmount));
			setEnteredAmount('');
		}
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	return (
		<Card className={classes.input}>
			<div>
				<label htmlFor="amount">Amount</label>
				<input
					min="0"
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
