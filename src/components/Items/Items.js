import React from 'react';
import Card from '../UI/Card';
import styles from './Items.module.css';

const Items = (props) => {
	return (
		<React.Fragment>
			<Card className={styles.balance}>
				<p>Balance: {props.balance}</p>
			</Card>
			<Card className={styles.items}>
				<ul>
					{props.items.map((item) => (
						<li key={Math.random()}>
							<p>Amount: {item.amount}</p>

							<p>Date of Operation: {item.date}</p>
							<p>Operation: {item.operation}</p>
						</li>
					))}
				</ul>
			</Card>
		</React.Fragment>
	);
};

export default Items;
