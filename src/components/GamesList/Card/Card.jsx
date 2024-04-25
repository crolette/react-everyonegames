import { useState } from 'react';
import platformPC from '../../../assets/images/platform_pc.svg';

export default function Card({ game }) {


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
							<h2>{game.name}</h2>
						</a>
						<button className="card__suggestions">
							<span>{game.suggestions_count}</span>
							<span className="material-symbols-outlined">add_circle</span>
						</button>
					</div>
					<div className="card__details">
						<div className="card__tags">
							{game.genres.map((genre) => (
								<a href="" className="card__tag">
									{genre}
								</a>
							))}
						</div>
						<div className="card__rating">
							<p>{game.rating}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
