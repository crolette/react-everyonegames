import { useState } from 'react';
import platformPC from '../../../assets/images/platform_pc.svg';

export default function Card() {
	// async function gamesByRelease() {
	// 	const reponse = await fetch(
	// 		`https://api.rawg.io/api/platforms/lists/parents/?key=${API_KEY}`
	// 	);
	// 	const films = await reponse.json();
	// 	console.log(films);
	// }

	return (
		<>
			<div className="card">
				<div className="card__top">
					<img
						className="card__image"
						src="https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
						alt=""
					/>
					<div className="card__platforms">
						<span className="material-symbols-outlined">sports_esports</span>
						<span className="material-symbols-outlined">sports_esports</span>
						<span className="material-symbols-outlined">sports_esports</span>
					</div>
				</div>
				<div className="card__bottom">
					<div className="card__title">
						<a href="">
							<h2>Grand Theft Auto 5</h2>
						</a>
						<button className="card__suggestions">
							<span>250</span>
							<span className="material-symbols-outlined">add_circle</span>
						</button>
					</div>
					<div className="card__details">
						<div className="card__tags">
							<a href="" className="card__tag">
								Genre 1
							</a>
							<a href="" className="card__tag">
								Genre 2
							</a>
							<a href="" className="card__tag">
								Genre 3
							</a>
						</div>
						<div className="card__rating">
							<p>8,57</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
