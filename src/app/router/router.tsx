import { createBrowserRouter, Outlet } from 'react-router';

import FilmsCatalog from '@/pages/FilmsCatalog/FilmsCatalog';

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
                element: <FilmsCatalog />
            }
        ]
    }
]);
