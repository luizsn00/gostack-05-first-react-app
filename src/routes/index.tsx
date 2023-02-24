import { Dashboard } from '../pages/Dashboard';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Repository } from '../pages/Repository';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: 'repos',
		element: <Repository />,
	},
]);

const Router: React.FC = () => <RouterProvider router={routes} />;

export { Router };
