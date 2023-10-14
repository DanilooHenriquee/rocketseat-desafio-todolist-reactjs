import styles from './Header.module.css';

import logoIcon from '../assets/rocket.svg';
import logoText from '../assets/todo.svg';

export function Header() {
    return (
        <header className={styles.header}>
           <img className={styles.icon} src={logoIcon} alt="Logotipo icon rocket" />
           <img className={styles.text} src={logoText} alt="Logotipo text todo" />
        </header>
    )
}