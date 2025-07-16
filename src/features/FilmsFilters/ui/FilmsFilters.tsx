import { clsx } from '@/shared/lib/hooks/clsx/clsx';

import styles from './FilmsFilters.module.scss';

interface FilmsFiltersProps {
    className?: string;
}

export const FilmsFilters = ({ className }: FilmsFiltersProps) => {
    return <aside className={clsx(styles.FilmsFilters, className)}>Filters</aside>;
};
