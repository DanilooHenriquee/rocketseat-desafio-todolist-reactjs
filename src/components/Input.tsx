import { ChangeEvent } from 'react';
import styles from './Input.module.css';

interface Props {
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export function Input({ 
    placeholder,
    value,
    onChange
}: Props) {
    return (        
        <input className={styles.input} 
            type="text" 
            name="task"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
            
    );
}