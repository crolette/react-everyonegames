import { useQueries, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
const API_KEY = import.meta.env.VITE_API_KEY;
// let [gameInfo, screenshots] = '';

export default function GamePage() {
	// const data = {
	// 	id: 52998,
	// 	slug: 'grand-theft-auto-1998',
	// 	name: 'Grand Theft Auto',
	// 	name_original: 'Grand Theft Auto',
	// 	description:
	// 		'<p>Grand Theft Auto is an action-adventure game with an isometric view, the first installment of the Grand Theft Auto series.</p>\n<h3>Location and plot</h3>\n<p>The game takes place in 3 different cities, each one resembling real-life counterparts such as Miami, New York City and San Francisco. The world of the game is only restricted by traveling from one city to another, while the cities themselves are free to explore. The plot is expressed in the form of various missions, where the playable character receives general instructions through a phone call, or otherwise. </p>\n<h3>Gameplay</h3>\n<p>Each mission in the game has a set goal of in-game points, awarded for successful completion of mission’s requirements, and sometimes causing mayhem for the sake of it. Completion of these missions allows the player to move on to more difficult tasks, and eventually, another chapter in other cities. The player often has to steal vehicles, sell them for profit, perform roadkills and escape the police, as the number of attempts for each mission is limited.</p>\n<h3>Graphics and reception</h3>\n<p>The game features a simplistic style for graphics, sacrificing different animations and sprites in favor of just being fun to play. At the time of release, in late 1997-1998, Grand Theft Auto offered unique arcade gameplay with an open world, where players could do anything they wanted, which, of course, was the key to overwhelming success of the game.</p>',
	// 	metacritic: null,
	// 	metacritic_platforms: [],
	// 	released: '1997-10-21',
	// 	tba: false,
	// 	updated: '2024-05-06T13:22:36',
	// 	background_image:
	// 		'https://media.rawg.io/media/games/786/786f9a212646c793ccbad196cba2cf36.jpg',
	// 	background_image_additional:
	// 		'https://media.rawg.io/media/screenshots/8dd/8dde112ba3b7e6bfc8754cb1353e83be.jpg',
	// 	website: '',
	// 	rating: 3.86,
	// 	rating_top: 4,
	// 	ratings: [
	// 		{
	// 			id: 4,
	// 			title: 'recommended',
	// 			count: 213,
	// 			percent: 54.48,
	// 		},
	// 		{
	// 			id: 5,
	// 			title: 'exceptional',
	// 			count: 84,
	// 			percent: 21.48,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'meh',
	// 			count: 71,
	// 			percent: 18.16,
	// 		},
	// 		{
	// 			id: 1,
	// 			title: 'skip',
	// 			count: 23,
	// 			percent: 5.88,
	// 		},
	// 	],
	// 	reactions: {},
	// 	added: 1837,
	// 	added_by_status: {
	// 		yet: 62,
	// 		owned: 1212,
	// 		beaten: 234,
	// 		toplay: 47,
	// 		dropped: 272,
	// 		playing: 10,
	// 	},
	// 	playtime: 1,
	// 	screenshots_count: 11,
	// 	movies_count: 0,
	// 	creators_count: 27,
	// 	achievements_count: 0,
	// 	parent_achievements_count: 0,
	// 	reddit_url: '',
	// 	reddit_name: '',
	// 	reddit_description: '',
	// 	reddit_logo: '',
	// 	reddit_count: 0,
	// 	twitch_count: 0,
	// 	youtube_count: 1000000,
	// 	reviews_text_count: 1,
	// 	ratings_count: 390,
	// 	suggestions_count: 360,
	// 	alternative_names: ['GTA'],
	// 	metacritic_url: 'https://www.metacritic.com/game/pc/grand-theft-auto',
	// 	parents_count: 0,
	// 	additions_count: 2,
	// 	game_series_count: 12,
	// 	user_game: null,
	// 	reviews_count: 391,
	// 	saturated_color: '0f0f0f',
	// 	dominant_color: '0f0f0f',
	// 	parent_platforms: [
	// 		{
	// 			platform: {
	// 				id: 1,
	// 				name: 'PC',
	// 				slug: 'pc',
	// 			},
	// 		},
	// 		{
	// 			platform: {
	// 				id: 2,
	// 				name: 'PlayStation',
	// 				slug: 'playstation',
	// 			},
	// 		},
	// 		{
	// 			platform: {
	// 				id: 7,
	// 				name: 'Nintendo',
	// 				slug: 'nintendo',
	// 			},
	// 		},
	// 	],
	// 	platforms: [
	// 		{
	// 			platform: {
	// 				id: 43,
	// 				name: 'Game Boy Color',
	// 				slug: 'game-boy-color',
	// 				image: null,
	// 				year_end: null,
	// 				year_start: null,
	// 				games_count: 419,
	// 				image_background:
	// 					'https://media.rawg.io/media/games/7ca/7ca0df41799243443a4e3887720fdf2a.jpg',
	// 			},
	// 			released_at: '1997-10-21',
	// 			requirements: {},
	// 		},
	// 		{
	// 			platform: {
	// 				id: 27,
	// 				name: 'PlayStation',
	// 				slug: 'playstation1',
	// 				image: null,
	// 				year_end: null,
	// 				year_start: null,
	// 				games_count: 1670,
	// 				image_background:
	// 					'https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg',
	// 			},
	// 			released_at: '1997-10-21',
	// 			requirements: {},
	// 		},
	// 		{
	// 			platform: {
	// 				id: 26,
	// 				name: 'Game Boy',
	// 				slug: 'game-boy',
	// 				image: null,
	// 				year_end: null,
	// 				year_start: null,
	// 				games_count: 611,
	// 				image_background:
	// 					'https://media.rawg.io/media/games/e40/e4043e92866d08ec9fdd212dcd3a1224.jpg',
	// 			},
	// 			released_at: '1997-10-21',
	// 			requirements: {},
	// 		},
	// 		{
	// 			platform: {
	// 				id: 4,
	// 				name: 'PC',
	// 				slug: 'pc',
	// 				image: null,
	// 				year_end: null,
	// 				year_start: null,
	// 				games_count: 528349,
	// 				image_background:
	// 					'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
	// 			},
	// 			released_at: '1997-10-21',
	// 			requirements: {},
	// 		},
	// 	],
	// 	stores: [
	// 		{
	// 			id: 49206,
	// 			url: '',
	// 			store: {
	// 				id: 1,
	// 				name: 'Steam',
	// 				slug: 'steam',
	// 				domain: 'store.steampowered.com',
	// 				games_count: 91507,
	// 				image_background:
	// 					'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
	// 			},
	// 		},
	// 	],
	// 	developers: [
	// 		{
	// 			id: 14613,
	// 			name: 'DMA Design',
	// 			slug: 'dma-design',
	// 			games_count: 22,
	// 			image_background:
	// 				'https://media.rawg.io/media/screenshots/196/1969f15d4cef5bac78c5186ddd7e5dd6.jpg',
	// 		},
	// 		{
	// 			id: 14756,
	// 			name: 'Tarantula Studios',
	// 			slug: 'tarantula-studios',
	// 			games_count: 8,
	// 			image_background:
	// 				'https://media.rawg.io/media/screenshots/15d/15d521509bb2c006f6fe6af30940809a.jpg',
	// 		},
	// 		{
	// 			id: 14650,
	// 			name: 'Visual Sciences',
	// 			slug: 'visual-sciences',
	// 			games_count: 8,
	// 			image_background:
	// 				'https://media.rawg.io/media/screenshots/a95/a956763c9c5c946a31008bbc6dc74ac0.jpg',
	// 		},
	// 	],
	// 	genres: [
	// 		{
	// 			id: 4,
	// 			name: 'Action',
	// 			slug: 'action',
	// 			games_count: 179305,
	// 			image_background:
	// 				'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
	// 		},
	// 	],
	// 	tags: [
	// 		{
	// 			id: 31,
	// 			name: 'Singleplayer',
	// 			slug: 'singleplayer',
	// 			language: 'eng',
	// 			games_count: 220522,
	// 			image_background:
	// 				'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
	// 		},
	// 		{
	// 			id: 7,
	// 			name: 'Multiplayer',
	// 			slug: 'multiplayer',
	// 			language: 'eng',
	// 			games_count: 37503,
	// 			image_background:
	// 				'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
	// 		},
	// 		{
	// 			id: 36,
	// 			name: 'Open World',
	// 			slug: 'open-world',
	// 			language: 'eng',
	// 			games_count: 7266,
	// 			image_background:
	// 				'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
	// 		},
	// 		{
	// 			id: 45,
	// 			name: '2D',
	// 			slug: '2d',
	// 			language: 'eng',
	// 			games_count: 194092,
	// 			image_background:
	// 				'https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg',
	// 		},
	// 		{
	// 			id: 193,
	// 			name: 'Classic',
	// 			slug: 'classic',
	// 			language: 'eng',
	// 			games_count: 1788,
	// 			image_background:
	// 				'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
	// 		},
	// 		{
	// 			id: 61,
	// 			name: 'Top-Down',
	// 			slug: 'top-down',
	// 			language: 'eng',
	// 			games_count: 24825,
	// 			image_background:
	// 				'https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg',
	// 		},
	// 	],
	// 	publishers: [
	// 		{
	// 			id: 11279,
	// 			name: 'Take Two Interactive',
	// 			slug: 'take-two-interactive',
	// 			games_count: 60,
	// 			image_background:
	// 				'https://media.rawg.io/media/screenshots/a4d/a4d88d9ba4cd339b4524b35bcd8232fb.jpg',
	// 		},
	// 		{
	// 			id: 11672,
	// 			name: 'BMG Interactive',
	// 			slug: 'bmg-interactive',
	// 			games_count: 12,
	// 			image_background:
	// 				'https://media.rawg.io/media/games/8b8/8b8348ef4dc763cb3ddf579c4a20bedd.jpg',
	// 		},
	// 		{
	// 			id: 12938,
	// 			name: 'ASC Games',
	// 			slug: 'asc-games',
	// 			games_count: 22,
	// 			image_background:
	// 				'https://media.rawg.io/media/games/726/726e81b1d8e70a7cbaadc620ce44fd46.jpg',
	// 		},
	// 	],
	// 	esrb_rating: {
	// 		id: 4,
	// 		name: 'Mature',
	// 		slug: 'mature',
	// 	},
	// 	clip: null,
	// 	description_raw:
	// 		'Grand Theft Auto is an action-adventure game with an isometric view, the first installment of the Grand Theft Auto series.\r\n\r\n###Location and plot\r\nThe game takes place in 3 different cities, each one resembling real-life counterparts such as Miami, New York City and San Francisco. The world of the game is only restricted by traveling from one city to another, while the cities themselves are free to explore. The plot is expressed in the form of various missions, where the playable character receives general instructions through a phone call, or otherwise. \r\n\r\n###Gameplay\r\nEach mission in the game has a set goal of in-game points, awarded for successful completion of mission’s requirements, and sometimes causing mayhem for the sake of it. Completion of these missions allows the player to move on to more difficult tasks, and eventually, another chapter in other cities. The player often has to steal vehicles, sell them for profit, perform roadkills and escape the police, as the number of attempts for each mission is limited.\r\n\r\n###Graphics and reception\r\nThe game features a simplistic style for graphics, sacrificing different animations and sprites in favor of just being fun to play. At the time of release, in late 1997-1998, Grand Theft Auto offered unique arcade gameplay with an open world, where players could do anything they wanted, which, of course, was the key to overwhelming success of the game.',
	// };

	let { gameId } = useParams();

	const fetchGame = async () => {
		console.log('fetchgame');
		const response = await fetch(
			`https://api.rawg.io/api/games/${parseInt(gameId)}?key=${API_KEY}`
		);
		const datas = await response.json();
		console.log(datas);
		return datas;
	};

	const fetchScreenshots = async () => {
		console.log('fetchscreenshot');
		const response = await fetch(
			`https://api.rawg.io/api/games/${parseInt(
				gameId
			)}/screenshots?key=${API_KEY}`
		);
		const datas = await response.json();
		console.log(datas);
		return datas;
	};

	// const datas = useQueries({
	// 	queries: [
	// 		{
	// 			queryKey: ['game'],
	// 			queryFn: () => fetchGame(),
	// 		},
	// 		{
	// 			queryKey: ['screenshots'],
	// 			queryFn: () => fetchScreenshots(),
	// 		},
	// 	],
	// });

	// const isLoading = datas.some((query) => query.status === 'loading');
	// let isSuccess = datas.some((query) => query.status === 'success');
	// const isError = datas.some((query) => query.status === 'error');

	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['game'],
		queryFn: () => fetchGame(),
	});

	const screenshots = useQuery({
		queryKey: ['screenshots'],
		queryFn: () => fetchScreenshots(),
	});

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isSuccess) {
		console.log('SUCCESS');
		const gameInfo = data;
		console.log(gameInfo);
		console.log(screenshots['data'].results[0]);
		return (
			<>
				<div className='game__details'>
					<section className='game__header'>
						<h1 className='header__title'>{gameInfo.name}</h1>
						<div className='header__subtitles'>
							<p className='header__playtime'>
								Average playtime: {gameInfo.playtime}h
							</p>
							<p className='header__rating'>Rating: {gameInfo.rating}</p>
						</div>
					</section>
					<section className='game__pictures'>
						{screenshots['data'].results.length >= 0 && (
							<div className='picture__main'>
								<img
									src={screenshots['data'].results[0].image}
									alt={`${gameInfo.name} - screenshots gameplay`}
								/>
							</div>
						)}

						{screenshots['data'].results.length > 0 && (
							<div className='picture__secondary'>
								{screenshots['data'].results
									.slice(1, 5)
									.map((screenshot, index) => (
										<img
											key={index}
											src={screenshot.image}
											alt={`${gameInfo.name} - screenshots gameplay`}
										/>
									))}
							</div>
						)}
					</section>
					<section className='game__about'>
						<h2>About</h2>
						<p>{gameInfo.description_raw}</p>
					</section>
					<section className='game__info'>
						<div className='game__info--left'>
							<div className='info__details'>
								<h3>Platforms</h3>
								<p>
									{gameInfo.platforms.map(
										(platform, i) =>
											`${platform.platform.name}${
												i === gameInfo.platforms.length - 1 ? '' : ', '
											} `
									)}
								</p>
							</div>
							<div className='info__details'>
								<h3>Publishers</h3>
								<p>
									{gameInfo.publishers.map(
										(publisher, i) =>
											`${publisher.name}${
												i == gameInfo.publishers.length - 1 ? '' : ', '
											}`
									)}
								</p>
							</div>
							<div className='info__details'>
								<h3>Release Date</h3>
								{gameInfo.released}
							</div>
						</div>
						<div className='game__info--right'>
							<div className='info__details'>
								<h3>Genre</h3>
								<p>
									{gameInfo.genres?.map(
										(genre, i) =>
											`${genre.name}${
												i == gameInfo.genres.length - 1 ? '' : ', '
											}`
									)}
								</p>
							</div>
							<div className='info__details'>
								<h3>Developers</h3>
								{gameInfo.developers?.map(
									(developer, i) =>
										`${developer.name}${
											i == gameInfo.developers.length - 1 ? '' : ', '
										}`
								)}
							</div>
							<div className='info__details'>
								<h3>App Rating</h3>
								{gameInfo.esrb_rating?.name}
							</div>
						</div>
						<div className='details__tags'>
							<h3>Tags</h3>
							{gameInfo.tags?.map(
								(tag, i) =>
									`${tag.name}${i == gameInfo.tags.length - 1 ? '' : ', '}`
							)}
						</div>
					</section>
				</div>
			</>
		);
		// gameInfo = datas[0].data;
		// screenshots = datas[1].data;
		// console.log(gameInfo);
		// console.log(screenshots);
		// console.log(datas);
	}

	// if (isError) {
	// 	console.log('ERROR');
	// 	// gameInfo = datas[0].data;
	// 	// screenshots = datas[1].data;
	// 	console.log(gameInfo);
	// 	console.log(screenshots);
	// 	return <h1>Error</h1>;
	// 	// console.log(datas);
	// }

	return (
		<>
			{/* {console.log(datas)} */}
			{/* <div className='game__details'> 
			<section className='game__header'>
				<h1 className='header__title'>{gameInfo.name}</h1>
				<div className='header__subtitles'>
					<p className='header__playtime'>
						Average playtime: {gameInfo.playtime}h
					</p>
					<p className='header__rating'>Rating: {gameInfo.rating}</p>
				</div>
			</section>
			<section className='game__pictures'>
				<div className='picture__main'>
					<img
						src={screenshots['data'].results[0].image}
						alt='{gameInfo.name} - screenshots gameplay'
					/>
				</div>
				<div className='picture__secondary'>
					<img
						src={screenshots['data'].results[1].image}
						alt='{gameInfo.name} - screenshots gameplay'
					/>
					<img
						src={screenshots['data'].results[2].image}
						alt='{gameInfo.name} - screenshots gameplay'
					/>
					<img
						src={screenshots['data'].results[3].image}
						alt='{gameInfo.name} - screenshots gameplay'
					/>
					<img
						src={screenshots['data'].results[4].image}
						alt='{gameInfo.name} - screenshots gameplay'
					/>
				</div>
			</section>

			<section className='game__about'>
				<h2>About</h2>
				<p>{gameInfo.description_raw}</p>
			</section>
			<section className='game__info'>
					<div className='game__info--left'>
						<div className='info__details'>
							<h3>Platforms</h3>
							<p>
								{gameInfo.platforms.map(
									(platform, i) =>
										`${platform.platform.name}${
											i === gameInfo.platforms.length - 1 ? '' : ', '
										} `
								)}
							</p>
						</div>
						<div className='info__details'>
							<h3>Publishers</h3>
							<p>
								{gameInfo.publishers.map(
									(publisher, i) =>
										`${publisher.name}${
											i == gameInfo.publishers.length - 1 ? '' : ', '
										}`
								)}
							</p>
						</div>
						<div className='info__details'>
							<h3>Release Date</h3>
							{gameInfo.released}
						</div>
					</div>
					<div className='game__info--right'>
						<div className='info__details'>
							<h3>Genre</h3>
							<p>
								{gameInfo.genres.map(
									(genre, i) =>
										`${genre.name}${
											i == gameInfo.genres.length - 1 ? '' : ', '
										}`
								)}
							</p>
						</div>
						<div className='info__details'>
							<h3>Developers</h3>
							{gameInfo.developers.map(
								(developer, i) =>
									`${developer.name}${
										i == gameInfo.developers.length - 1 ? '' : ', '
									}`
							)}
						</div>
						<div className='info__details'>
							<h3>App Rating</h3>
							{gameInfo.esrb_rating.name}
						</div>
					</div>
					<div className='details__tags'>
						<h3>Tags</h3>
						{gameInfo.tags.map(
							(tag, i) =>
								`${tag.name}${i == gameInfo.tags.length - 1 ? '' : ', '}`
						)}
					</div>
				</section>
			</div> */}
		</>
	);
}
