import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import Game from './pages/Game';
import ErrorPage from './pages/ErrorPage.jsx';
import './index.scss';
import './components/GamesList/utils/dateSearch.js';
import GamesList from './components/GamesList/GamesList.jsx';
import GamePage from './components/Game/GamePage';
import GamesByType from './components/GamesList/GamesByType.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchPage from './components/Search/SearchPage.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <GamesList />,
			},
			{
				path: '/:type',
				element: <GamesList />,
			},

			{
				path: '/games/:type/:filterId/:slug',
				element: <GamesByType />,
			},
			{
				path: '/search/:searchGame',
				element: <SearchPage />,
			},
		],
	},
	{
		path: '/game/:gameId',
		element: <Game />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
