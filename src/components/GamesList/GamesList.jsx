import { useEffect, useState } from 'react';
import Card from './Card/Card';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function GamesList() {
	const [games, setGames] = useState();

	useEffect(() => {
		async function fetchData() {
			const reponse = await fetch(
				`https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-04-01,2024-04-24&ordering=released,rating`
			);
			const games = await reponse.json();
			setGames(games.results);
		}
		fetchData();
	}, []);

	return (
		<>
			<div className="games">
				<h1>New & Trending</h1>
				<ul className="games__list">
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
					<li>
						<Card />
					</li>
				</ul>
			</div>
		</>
	);
}
