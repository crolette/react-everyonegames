import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import GamePage from '../components/Game/GamePage';
import Search from '../components/Search/Search';


export default function Game() {

	return (
		<>
			<div className='container game'>
				<Navbar />
				{/* <Search /> */}
				<GamePage />
			</div>
		</>
	);
}


