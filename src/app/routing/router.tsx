import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/notFound';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
