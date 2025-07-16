import { FilmsFilters } from '@/features/FilmsFilters';
import { FilmsGrid } from '@/features/FilmsGrid';

import styles from './FilmsCatalog.module.scss';

const FilmsCatalog = () => {
    return (
        <div className={styles.FilmsCatalog}>
            <FilmsFilters />
            <FilmsGrid />
        </div>
    );
};

export default FilmsCatalog;
