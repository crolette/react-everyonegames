import { useCallback, useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from './Card/Card';
import { lastThreeMonthsCalculation } from './utils/dateSearch';
import { useInfiniteQuery } from '@tanstack/react-query';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function GamesList() {
	const [games, setGames] = useState([]);
	const [sort, filter] = useOutletContext();
	const [today, lastThreeMonths] = lastThreeMonthsCalculation();

	const fetchGames = async ({ pageParam, sort, filter }) => {

		const response = await fetch(
			`https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastThreeMonths},${today}&ordering=${sort}&${filter.type}=${filter.id}&page=${pageParam}`
		);

		const datas = await response.json();
		return datas;
	};


	const {
		data,
		isError,
		isLoading,
		fetchNextPage,
		hasNextPage,
		isFetching,
		error,
	} = useInfiniteQuery({
		queryKey: ['games', sort, filter, lastThreeMonths, today],
		queryFn: ({ pageParam }) => fetchGames({ pageParam, sort, filter }),

		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages, lastPageParam) => {
			console.log(allPages)
			if (lastPage.next != null) return lastPageParam + 1;
			else return null;
		},
	});

	const handleObserver = useRef();
	const lastElement = useCallback(
		(element) => {
			if (isLoading) return;
			if (handleObserver.current) handleObserver.current.disconnect();
			handleObserver.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNextPage && !isFetching) {
					fetchNextPage();
				}
			});
			if (element) handleObserver.current.observe(element);
		},
		[isLoading, hasNextPage]
	);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		throw Error(error);
	}

	return (
		<>
			<div className='games'>
				<h1>New & Trending {filter.name ? ' - ' + filter.name : ''}</h1>
				<ul className='games__list'>
					{data.pages.map((games) =>
						games.results.map((game, index) => (
							<li
								key={game.id}
								ref={games.results.length === index + 1 ? lastElement : null}
							>
								<Card game={game} />
							</li>
						))
					)}
				</ul>
			</div>
		</>
	);
}
