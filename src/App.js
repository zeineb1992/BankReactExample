import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import AddItem from './components/Items/AddItem';
import Items from './components/Items/Items';

function App() {
	const items = useSelector((state) => state.items);
	const balance = useSelector((state) => state.balance);

	return (
		<div className="App">
			<AddItem />
			{items && <Items items={items} balance={balance} />}
		</div>
	);
}

export default App;
