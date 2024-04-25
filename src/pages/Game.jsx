import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import GamePage from '../components/Game/GamePage';

function Game() {
	return (
		<>
			<Navbar />
			<GamePage />
		</>
	);
}

export default Game;
