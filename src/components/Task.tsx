import { useState } from 'react';
import styles from './Task.module.css';

import { Trash } from 'phosphor-react';

interface Props {
    task: string;
    index: number;
    onDeleteTask: (task: string) => void;
    onCompleteTask: (checked: boolean) => void;
}

export function Task({ task, index, onDeleteTask, onCompleteTask }: Props) {

    const [completedTask, setCompletedTask] = useState(false);

    function handleDeleteTask() {
        if (completedTask)
            handleCheckedTask();
        
        onDeleteTask(task);
    }

    function handleCheckedTask() {
        setCompletedTask(!completedTask);
        onCompleteTask(!completedTask);
    }

    return (
        <div className={styles.container}>

            <div className={styles.checkbox}>
                <input id={"checkbox_"+index} type="checkbox" onChange={handleCheckedTask} checked={completedTask} />
                <label htmlFor={"checkbox_"+index} ></label>
            </div>

            <p className={completedTask ? styles.completedTask : ''}>{ task }</p>

            <Trash weight='bold' onClick={handleDeleteTask} className={styles.trash}/>
        </div>
    );
}