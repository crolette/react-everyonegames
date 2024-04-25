import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

export default function GamePage() {

	let { gameId } = useParams();

	return (
		<>
			
			<p>GamePage</p>
			<p>GameID : {gameId}</p>
		</>
	);
}
