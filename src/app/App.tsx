import { Outlet } from 'react-router';

import styles from './App.module.scss';

const App = () => {
    return (
        <main className={styles.appLayout}>
            <Outlet />
        </main>
    );
};

export default App;
