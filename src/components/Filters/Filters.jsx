import { useContext, useEffect, useState } from 'react';
const API_KEY = import.meta.env.VITE_API_KEY;
import PlatformsLogo from '../GamesList/Card/PlatformsLogo';
import { GameContext } from '../../pages/App';
import { NavLink } from 'react-router-dom';

import { TiDelete } from 'react-icons/ti';

// import { useState } from 'react';
// import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';

export default function Filters() {
	const [platforms, setPlatforms] = useState([]);

	useEffect(() => {
		console.log('useeffect filters');
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
				);
				const datas = await response.json();
				console.log(datas);
				// setNextPage(datas.next)
				setPlatforms(datas.results);
				// setGames(datas);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	const { handleFilter } = useContext(GameContext);

	return (
		<>
			<div className='filters'>
				<h3>Platform</h3>

				<ul className='filters__platforms'>
					{platforms.map((platform) => (
						<li
							key={platform.id}
							data-filter-type='parent_platforms'
							data-filter-platform={platform.id}
							data-filter-name={platform.name}
						>
							<a className='filter' key={platform.id} onClick={handleFilter}>
								<PlatformsLogo platform={platform.name} />
							</a>
						</li>
					))}
					<li data-filter-type='delete' onClick={handleFilter}>
						<a>
							<TiDelete />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}
