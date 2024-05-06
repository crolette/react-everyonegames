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

import { useState } from 'react';
// import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';

export default function Filters({ handleFilter }) {
	return (
		<>
			<div className='filters'>
				<h3>Filter</h3>
				{/* <div className="filters__type">
					<FaRegArrowAltCircleUp />
					<p>Release date</p>
					<FaRegArrowAltCircleDown />
				</div> */}
				<details>
					<summary>Platform</summary>
					<ul>
						<li>
							<FaWindows />
						</li>
						<li>
							<FaApple />
						</li>
						<li>
							<FaPlaystation />
						</li>
						<li>
							<FaAndroid />
						</li>
						<li>
							<FaLinux />
						</li>
						<li>
							<FaXbox />
						</li>
					</ul>
				</details>
			</div>
		</>
	);
}
