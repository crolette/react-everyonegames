import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Sorting from '../components/Sorting/Sorting';
import Filters from '../components/Filters/Filters';

function App() {
	return (
		<>
			<div className="container news">
				<Navbar />
				<Sorting />
				<Filters />
				<Search />
				<Outlet />
			</div>
		</>
	);
}

export default App;
