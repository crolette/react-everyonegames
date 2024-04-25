// import 'dotenv/config';


async function test() {
	const reponse = await fetch(
		'https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&dates=2019-09-01,2019-09-30&platforms=18,1,7&ordering=-name,released'
	);
	const films = await reponse.json();
	console.log(films);
}

// test();

async function testDate() {
	const reponse = await fetch(
		`https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&dates=2024-04-26,2024-04-30`
	);
	const films = await reponse.json();
	console.log(films);
}

// testDate();

async function gameDetails() {
	const reponse = await fetch(
		`https://api.rawg.io/api/games/58617?key=ba9593ab19304984b0939ad8790ad96e`
	);
	const films = await reponse.json();
	console.log(films);
}

// gameDetails();

async function gamesByNames() {
	const reponse = await fetch(
		`https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&ordering=name`
	);
	const films = await reponse.json();
	console.log(films);
}

// gamesByNames();

async function gamesByRating() {
	const reponse = await fetch(
		`https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&ordering=-rating`
	);
	const films = await reponse.json();
	console.log(films);
}

// gamesByRating();

async function gamesByRelease() {
	const reponse = await fetch(
		`https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&ordering=-released`
	);
	const films = await reponse.json();
	console.log(films);
}

// gamesByRelease(); //with Games still no out

async function gamesByReleaseToday() {
	const reponse = await fetch(
		`https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&ordering=-released&dates=1950-01-01,2024-04-26`
	);
	const films = await reponse.json();
	console.log(films);
}

// gamesByReleaseToday();

async function gamesByDateAdded() {
	const reponse = await fetch(
		`https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&ordering=added`
	);
	const films = await reponse.json();
	console.log(films);
}

// gamesByDateAdded();
// peut remplacer gamesByReleaseToday ?

async function allPlatforms() {
	const reponse = await fetch(
		`https://api.rawg.io/api/platforms/lists/parents?key=ba9593ab19304984b0939ad8790ad96e`
	);
	const films = await reponse.json();
	console.log(films);
}

// allPlatforms();

async function allGenres() {
	const reponse = await fetch(
		`https://api.rawg.io/api/genres?key=ba9593ab19304984b0939ad8790ad96e`
	);
	const films = await reponse.json();
	console.log(films);
}
async function parentPlatforms() {
	const reponse = await fetch(
		`https://api.rawg.io/api/platforms/5?key=${API_KEY}`
	);
	const films = await reponse.json();
	console.log(films);
}

// parentPlatforms()

// allGenres();

// - id
// - description
// - rating
// - genre : array
// - platform : array
// - suggestions_count
// - released

// background_image
// background_image_additional
// shorts_screenshots : array
