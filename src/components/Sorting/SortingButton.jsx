import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';


export default function SortingButton({handleSort, value, title}) {

    return (
			<div className="sort__type">
				<button type="button" onClick={handleSort} value={`${value}`}>
					<FaRegArrowAltCircleUp />
				</button>
				<p>{title}</p>
				<button type="button" onClick={handleSort} value={`-${value}`}>
					<FaRegArrowAltCircleDown />
				</button>
			</div>
		);
}