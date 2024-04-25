import { useState } from 'react';
import platformPC from '../../../assets/images/platform_pc.svg';

import {
	FaWindows,
	FaPlaystation,
	FaApple,
	FaAndroid,
	FaLinux,
	FaXbox,
} from 'react-icons/fa';

import {
	SiNintendo,
	SiSega,
	SiAtari,
	SiCommodore,
	SiIos,
} from 'react-icons/si';

export default function Card({ game }) {
	const [suggestionCount, setSuggestionCount] = useState(
		game.suggestions_count
	);

	const handleClickSuggestion = (e) => {
		setSuggestionCount(suggestionCount + 1);
	};

	const handlePlatformLogo = (platformName) => {
		return platformName == 'PC' ? (
			<FaWindows />
		) : platformName == 'PlayStation' ? (
			<FaPlaystation />
		) : platformName == 'Xbox' ? (
			<FaXbox />
		) : platformName == 'Linux' ? (
			<FaLinux />
		) : platformName == 'Nintendo' ? (
			<SiNintendo />
		) : platformName == 'Atari' ? (
			<SiAtari />
		) : platformName == 'Sega' ? (
			<SiSega />
		) : platformName == 'iOS' ? (
			<SiIos />
		) : platformName == 'Commodore' ? (
			<SiCommodore />
		) : platformName == 'Apple' ? (
			<FaApple />
		) : platformName == 'Android' ? (
			<FaAndroid />
		) : null;
	};

	return (
		<>
			<div className="card">
				<div className="card__top">
					<a href={`/game/${game.id}`}>
						<img
							className="card__image"
							src={game.background_image}
							alt={`Screenshot ${game.name}`}
						/>
					</a>
					<div className="card__platforms" >
						{game.parent_platforms.map((platform) =>
							handlePlatformLogo(platform.platform.name)
						)}
					</div>
				</div>
				<div className="card__bottom">
					<div className="card__title">
						<a href={`/game/${game.id}`}>
							<h2>{game.name}</h2>
						</a>
						<button
							className="card__suggestions"
							onClick={handleClickSuggestion}
						>
							<span>{suggestionCount}</span>
							<span className="material-symbols-outlined">add_circle</span>
						</button>
					</div>
					<div className="card__details">
						<div className="card__tags">
							{game.genres.map((genre) => (
								<a href={`/games/${genre.id}/${genre.slug}`} className="card__tag">
									{genre.name}
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
