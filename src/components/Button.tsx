import styles from './Button.module.css';

import { PlusCircle }  from 'phosphor-react';

interface Props {
    title: string;
}

export function Button({ title }: Props) {
    return (
        <button className={styles.button}>
            {title}
            <PlusCircle size={20} weight='bold' className={styles.icon}/>
        </button>
    );
}