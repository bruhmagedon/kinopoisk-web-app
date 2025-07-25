import { createBrowserRouter, Outlet } from 'react-router';

import { Providers } from './Providers';

export const router = createBrowserRouter([
    {
        element: (
            <Providers>
                <Outlet />
            </Providers>
        ),
        children: [
            {
                path: '/',
                lazy: () => import('@/modules/Catalog/Catalog.page')
            }
        ]
    }
]);
