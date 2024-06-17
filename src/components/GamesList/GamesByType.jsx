import { useCallback, useRef } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Card from './Card/Card';
import { useInfiniteQuery } from '@tanstack/react-query';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function GamesByType() {
	const { filterId, slug, type } = useParams();
	const [sort, filter] = useOutletContext();

	// const url = `https://api.rawg.io/api/games?key=${API_KEY}&${type}=${filterId}&ordering=${sort}&${filter.type}=${filter.id}`;

	const fetchGames = async ({ pageParam, sort, filter, type }) => {
		const response = await fetch(
			`https://api.rawg.io/api/games?key=${API_KEY}&${type}=${filterId}&ordering=${sort}&${filter.type}=${filter.id}&page=${pageParam}`
		);

		const datas = await response.json();
		return datas;
	};

	const pageTitle = () => {
		return slug.charAt(0).toUpperCase() + slug.slice(1).split('-').join(' ');
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
		queryKey: ['games', sort, filter, type],
		queryFn: ({ pageParam }) => fetchGames({ pageParam, sort, filter, type }),

		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages, lastPageParam) => {
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

	return (
		<>
			<div className='games'>
				<h1>
					{pageTitle()} {filter.name ? ' - ' + filter.name : ''}
				</h1>
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
