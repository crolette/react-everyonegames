// import 'dotenv/config';

async function test() {
	const reponse = await fetch(
		'https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&dates=2019-09-01,2019-09-30&platforms=18,1,7&ordering=-name,released'
	);
	const films = await reponse.json();
	console.log(films);
}

async function testDate() {
	const reponse = await fetch(
		'https://api.rawg.io/api/games?key=ba9593ab19304984b0939ad8790ad96e&dates=FILTER'
	);
	const films = await reponse.json();
	console.log(films);
}

// test()

testDate()