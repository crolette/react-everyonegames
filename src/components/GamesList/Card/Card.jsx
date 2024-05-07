import { useContext, useState } from 'react';

import { useOutletContext } from 'react-router-dom';
import PlatformsLogo from './PlatformsLogo';
import { GameContext } from '../../../pages/App';
import crypto from 'crypto';

export default function Card({ game }) {
	const [suggestionCount, setSuggestionCount] = useState(
		game.suggestions_count
	);
	// const { handleGameList } = useContext(GameContext);

	const handleClickSuggestion = () => {
		setSuggestionCount(suggestionCount + 1);
	};
	


	return (
		<>
			<div className='card'>
				<div className='card__top'>
					<a href={`/game/${game.id}`}>
						<img
							className='card__image'
							src={game.background_image}
							alt={`Screenshot ${game.name}`}
						/>
					</a>
						<ul className='card__platforms'>
							{game.parent_platforms.map((platform) => (
								<li data-game-list='platform' key={platform.platform.id}>
									<a
										
										key={platform.platform.id}
										// onClick={handleGameList}
										href={`/games/${'parent_platforms'}/${
											platform.platform.id
										}/${platform.platform.slug}`}
									>
										<PlatformsLogo platform={platform.platform.name} />
									</a>
								</li>
							))}
						</ul>
				</div>
				<div className='card__bottom'>
					<div className='card__title'>
						<a href={`/game/${game.id}`}>
							<h2>{game.name}</h2>
						</a>
						<button
							className='card__suggestions'
							onClick={handleClickSuggestion}
						>
							<span>{suggestionCount}</span>
							<span className='material-symbols-outlined'>add_circle</span>
						</button>
					</div>
					<div className='card__details'>
						<ul className='card__tags'>
							{game.genres.map((genre) => (
								<li data-game-list='genres' key={genre.id}>
									<a
										key={genre.id}
										className='card__tag'
										href={`/games/${'genres'}/${genre.id}/${genre.slug}`}
										// onClick={handleGameList}
									>
										{genre.name}
									</a>
								</li>
							))}
						</ul>
						<div className='card__rating'>
							<p>{game.rating}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
