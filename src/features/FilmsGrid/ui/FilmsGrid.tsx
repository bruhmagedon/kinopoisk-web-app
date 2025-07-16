import { clsx } from '@/shared/lib/hooks/clsx/clsx';

import styles from './FilmsGrid.module.scss';

interface FilmsGridProps {
    className?: string;
}

export const FilmsGrid = ({ className }: FilmsGridProps) => {
    return <section className={clsx(styles.FilmsGrid, className)}>Films Grid</section>;
};
