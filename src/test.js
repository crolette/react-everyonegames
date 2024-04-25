// import 'dotenv/config';

async function test() {
	const reponse = await fetch(
		'https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&dates=2019-09-01,2019-09-30&platforms=18,1,7&ordering=-name,released'
	);
	const films = await reponse.json();
	console.log(films);
}

// test()

async function testDate() {
	const reponse = await fetch(
		`https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&dates=2024-04-26,2024-04-30`
	);
	const films = await reponse.json();
	console.log(films);
}

testDate()




async function gameDetails() {
	const reponse = await fetch(
		`https://api.rawg.io/api/games/58617?key=ba9593ab19304984b0939ad8790ad96e`
	);
	const films = await reponse.json();
	console.log(films);
}

//
// - id
// - description
// - rating
// - genre : array


// gameDetails()