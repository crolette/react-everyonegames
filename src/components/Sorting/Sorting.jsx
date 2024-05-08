import SortingButton from './SortingButton';

export default function Sorting({  }) {
	
	return (
		<>
			<details className='sort'>
				<summary>
					<h3>Sort by</h3>
				</summary>
				<div className='sort__types'>
					<SortingButton value={'released'} title={'Release date'} />
					<SortingButton value={'added'} title={'Date added'} />
					<SortingButton value={'name'} title={'Name'} />
					<SortingButton value={'rating'} title={'Rating'} />
				</div>
			</details>
		
		</>
	);
}
