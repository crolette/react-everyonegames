import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Card from './Card/Card';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function GamesByGenre() {
	const { genreId, genreSlug } = useParams();
	const [games, setGames] = useState();
	const [pageNumber, setpageNumber] = useState(1);
	const [sort] = useOutletContext();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=${API_KEY}&genres=${genreId}&ordering=${sort}&page=${pageNumber}`
				);
				const datas = await response.json();
				console.log(datas);
				setGames(datas.results);
				// setNextPage(datas)
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [sort]);

	// useEffect(() => {
	// 	window.addEventListener('scroll', () => {
	// 		const fullHeight = Math.max(
	// 			document.body.scrollHeight,
	// 			document.documentElement.scrollHeight,
	// 			document.body.offsetHeight,
	// 			document.documentElement.offsetHeight,
	// 			document.body.clientHeight,
	// 			document.documentElement.clientHeight
	// 		);

	// 		const lowestHeight = Math.min(
	// 			document.body.scrollHeight,
	// 			document.documentElement.scrollHeight,
	// 			document.body.offsetHeight,
	// 			document.documentElement.offsetHeight,
	// 			document.body.clientHeight,
	// 			document.documentElement.clientHeight
	// 		);

	// 		let scrollY = window.scrollY;
	// 		let infinite = fullHeight - lowestHeight - 200;

	// 		// console.log(
	// 		// 	'fullheight: ' +
	// 		// 		fullHeight +
	// 		// 		' / lowestheight : ' +
	// 		// 		lowestHeight +
	// 		// 		' scrollY : ' +
	// 		// 		scrollY +
	// 		// 		' / infinte : ' +
	// 		// 		infinite
	// 		// );
	// 		// if (scrollY >= infinite) {
	// 		// 	// console.log('infinite');
	// 		// 	// refetchNewGames();
	// 		// }
	// 	});

	// 	// 	// return () => {
	// 	// 	// 	window.removeEventListener('scroll', () )
	// 	// 	// }
	// }, []);

	if (isLoading) {
		console.log(isLoading);
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	function handleNextPage(games) {
		console.log('handlenextpage');
		setNextPage(games.next);
	}

	return (
		<>
			<div className="games">
				<h1>{genreSlug}</h1>
				<ul className="games__list">
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
