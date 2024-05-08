import { useState } from 'react';
import { useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Sorting from '../components/Sorting/Sorting';
import Filters from '../components/Filters/Filters';
import Search from '../components/Search/Search';

export default function ErrorPage() {
	const error = useRouteError();


	return (
		<>
			<div className='container error'>
				<Navbar />
					
					<div className='error'>
						<h1>Oops!</h1>
						<p>Sorry, an unexpected error has occurred.</p>
						<p>
							<i>{error.statusText || error.message}</i>
						</p>
					</div>
			</div>
		</>
	);


}
