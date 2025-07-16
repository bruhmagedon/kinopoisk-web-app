import { clsx } from '@/shared/lib/hooks/clsx/clsx';

import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={clsx(styles.Header, className)}>
            <div>
                <div className={styles.logo}>Absolute Cinematify</div>
                <div className={styles.search}></div>
                <div className={styles.nav}></div>
            </div>
        </header>
    );
};
