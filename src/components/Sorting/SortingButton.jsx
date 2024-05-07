import { useContext } from 'react';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';
import { GameContext } from '../../pages/App';

export default function SortingButton({ value, title}) {

const { handleSort } = useContext(GameContext);

    return (
			<div className='sort__type'>
				<button
					className='filter__button'
					type='button'
					onClick={handleSort}
					value={`${value}`}
				>
					<FaRegArrowAltCircleUp />
				</button>
				<p>{title}</p>
				<button
					className='filter__button'
					type='button'
					onClick={handleSort}
					value={`-${value}`}
				>
					<FaRegArrowAltCircleDown />
				</button>
			</div>
		);
}