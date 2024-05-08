import { useCallback, useEffect, useRef, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Card from '../GamesList/Card/Card';
import { useInfiniteQuery } from '@tanstack/react-query';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchPage() {
	const { searchGame } = useParams();
	const [sort, filter] = useOutletContext();
	const [games, setGames] = useState();
	console.log(searchGame);

	const fetchGames = async ({ pageParam, searchGame, sort, filter }) => {
		const response = await fetch(
			`https://api.rawg.io/api/games?search=${searchGame}&ordering=${sort}&${filter.type}=${filter.id}&key=${API_KEY}&page=${pageParam}`
		);

		const datas = await response.json();
		console.log(datas);
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
		queryKey: ['games', sort, searchGame, filter],
		queryFn: ({ pageParam }) => fetchGames({ pageParam, searchGame, sort, filter }),

		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages, lastPageParam) => {
			if (lastPage.next != null) return lastPageParam + 1;
			else return null;
		},
	});

	const handleObserver = useRef();
	const lastElement = useCallback(
		(element) => {
			if (isLoading) return 
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
		return <div>Loading...</div>;
	}

	return (
    <>
      {console.log(data)}
			<div className='games'>
				<h1>{searchGame}</h1>
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
