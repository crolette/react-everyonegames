import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Card from './Card/Card';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function GamesByGenre() {
	const { filterId, slug, type } = useParams();
	const [games, setGames] = useState();
	const [pageNumber, setpageNumber] = useState(1);
	const [sort, filter, gameList, list] = useOutletContext();

	const [isLoading, setIsLoading] = useState(true);

	console.log(filter);
	const url = `https://api.rawg.io/api/games?key=${API_KEY}&${type}=${filterId}&ordering=${sort}&${filter.type}=${filter.id}`;

	useEffect(() => {
		console.log('gamelist');
		console.log(gameList);
		console.log(filter);
		const fetchData = async () => {
			try {
				const response = await fetch(url);
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
	}, [filter, sort]);

	if (isLoading) {
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
			<div className='games'>
				<h1>
					{slug} {filter.name ? ' - ' + filter.name : ''}
				</h1>
				<ul className='games__list'>
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
