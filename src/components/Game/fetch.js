const fetchGame = async () => {
	console.log('fetchgame');
	const response = await fetch(
		// `https://api.rawg.io/api/games/${parseInt(gameId)}?key=${API_KEY}`
		`https://api.rawg.io/api/games/1234?key=${API_KEY}`
	);
	const datas = await response.json();
	console.log(datas);
	return datas;
};

const fetchScreenshots = async () => {
	console.log('fetchscreenshot');
	const response = await fetch(
		// `https://api.rawg.io/api/games/${parseInt(gameId)}/screenshots?key=${API_KEY}`
		`https://api.rawg.io/api/games/1234/screenshots?key=${API_KEY}`
	);
	const datas = await response.json();
	console.log(datas);
	return datas;
};

export {fetchGame, fetchScreenshots}