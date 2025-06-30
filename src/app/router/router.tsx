import { createBrowserRouter, Outlet } from 'react-router';

import { Header } from './layouts/Header/Header';
import { Providers } from './Providers';

export const router = createBrowserRouter([
    {
        element: (
            <Providers>
                <Header />
                <Outlet />
            </Providers>
        ),
        children: [
            {
                path: '/',
                element: <div>Home Page</div>
            }
        ]
    }
]);
