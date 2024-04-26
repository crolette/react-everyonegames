import { useState } from 'react';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';

export default function Sorting() {
	return (
		<>
			<div className="sort">
				<h3>Sort by</h3>
				<div className="sort__type">
					<FaRegArrowAltCircleUp />
					<p>Release date</p>
					<FaRegArrowAltCircleDown />
				</div>
			</div>
		</>
	);
}
