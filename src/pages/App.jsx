import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Sorting from '../components/Sorting/Sorting';
import Filters from '../components/Filters/Filters';

export const GameContext = createContext();

export default function App() {
	const [sort, setSort] = useState('');
	const [filter, setFilter] = useState({ type: '', id: 0, name: '' });
	const [gameList, setGameList] = useState('');
	const list = 'genres';

	const handleSort = (e) => {
		console.log('handlesort');
		console.log(e);
		setSort(e.target.value);
	};

	const handleFilter = (e) => {
		console.log(e.target.parentElement);
		if (e.target.parentElement.getAttribute('data-filter-type') == 'delete') {
			setFilter({
				...filter,
				type: '',
				id: 0,
				name: '',
			});
		} else {
			setFilter({
				...filter,
				id: e.target.parentElement.getAttribute('data-filter-platform'),
				name: e.target.parentElement.getAttribute('data-filter-name'),
				type: e.target.parentElement.getAttribute('data-filter-type'),
			});
		}
	};

	const handleGameList = (e) => {
		console.log('handleGameList');
		console.log(e.target.parentElement.getAttribute('data-game-list'));
		let newList = e.target.parentElement.getAttribute('data-game-list');
		console.log(newList);
		// setGameList(e.target.parentElement.getAttribute('data-game-list'));
		setGameList(newList);
		console.log(gameList);
	};

	return (
		<>
			<div className='container news'>
				<Navbar />
				<GameContext.Provider value={{ handleFilter, handleGameList }}>
					<Sorting handleSort={handleSort} />
					<Filters handleFilter={handleFilter} />
					<Search />
					<Outlet context={[sort, filter, gameList, list]} />
				</GameContext.Provider>
			</div>
		</>
	);
}
