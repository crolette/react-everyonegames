// useEffect(() => {
// 	window.addEventListener('scroll', () => {
// 		const fullHeight = Math.max(
// 			document.body.scrollHeight,
// 			document.documentElement.scrollHeight,
// 			document.body.offsetHeight,
// 			document.documentElement.offsetHeight,
// 			document.body.clientHeight,
// 			document.documentElement.clientHeight
// 		);

// 		const lowestHeight = Math.min(
// 			document.body.scrollHeight,
// 			document.documentElement.scrollHeight,
// 			document.body.offsetHeight,
// 			document.documentElement.offsetHeight,
// 			document.body.clientHeight,
// 			document.documentElement.clientHeight
// 		);

// 		let scrollY = window.scrollY;
// 		let infinite = fullHeight - lowestHeight - 200;

// 		// console.log(
// 		// 	'fullheight: ' +
// 		// 		fullHeight +
// 		// 		' / lowestheight : ' +
// 		// 		lowestHeight +
// 		// 		' scrollY : ' +
// 		// 		scrollY +
// 		// 		' / infinte : ' +
// 		// 		infinite
// 		// );
// 		// if (scrollY >= infinite) {
// 		// 	// console.log('infinite');
// 		// 	// refetchNewGames();
// 		// }
// 	});

// 	// 	// return () => {
// 	// 	// 	window.removeEventListener('scroll', () )
// 	// 	// }
// }, []);
