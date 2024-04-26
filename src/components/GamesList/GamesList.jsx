import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from './Card/Card';
const API_KEY = import.meta.env.VITE_API_KEY;


export default function GamesList() {
	const [games, setGames] = useState();
	const [pageNumber, setpageNumber] = useState(1);
	const [sort] = useOutletContext();

	const [isLoading, setIsLoading] = useState(true);



	useEffect(() => {
		console.log('useeffect')
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-04-01,2024-04-24&ordering=${sort}`
					
				);
				const datas = await response.json();
				console.log(datas)
				// setNextPage(datas.next)
				setGames(datas.results);
				// setGames(datas);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [sort]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const handleNextPage = (games) => {
		console.log('handlenextpage');
		setNextPage(games.next);
	}

	const handleInfiniteScroll = () => {
		console.log('handleInfiniteScroll');
	}

	return (
		<>
			<div className="games">
				<h1>New & Trending</h1>
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
