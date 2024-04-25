import { useEffect, useState } from 'react';
import Card from './Card/Card';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function GamesList() {
	const [games, setGames] = useState(fetchData);
	const [nextPage, setNextPage] = useState();

	async function fetchData() {
		console.log('fetchdata');
		const reponse = await fetch(
			`https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-04-01,2024-04-24&ordering=rating`
		);
		const games = await reponse.json();
		console.log(games);
		await handleNextPage(games);
		await setGames(games.results);
	}

	function handleNextPage(games) {
		console.log('handlenextpage');
		setNextPage(games.next);
	}

	return (
		<>
			<div className="games">
				<h1>New & Trending</h1>
				<ul className="games__list">
					{console.log(games)}
					{games.map((game) => (
						<li key={game.id}>
							<Card game={game} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
