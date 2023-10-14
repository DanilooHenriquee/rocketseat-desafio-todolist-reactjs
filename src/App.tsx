import styles from './App.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';

import Clipboard from './assets/clipboard.svg';

import { Task } from './components/Task';

export default function App() {

    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState("");

    const [createdTasks, setCreatedTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);


    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        if (!newTask)
            return;

        setTasks((state) => [...state, newTask]);

        setCreatedTasks((state) => state + 1);
        setNewTask("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        const newTask = event.target.value;

        setNewTask(newTask);
    }

    function handleDeleteTask(task: string) {
        setTasks(tasks.filter(item => item !== task));
        
        setCreatedTasks((state) => state - 1);
    }

    function handleCompleteTask(completedTask: boolean) {
        setCompletedTasks((state) => {
            return completedTask ? state + 1 : state - 1;
        });
    }

    return (
        <div className={styles.background}>
            <Header />
            <main className={styles.main}>
                <form onSubmit={handleCreateNewTask} className={styles.addNewTask}>
                    <Input 
                        placeholder="Adicione uma nova tarefa"
                        onChange={handleNewTaskChange}
                        value={newTask}
                    />
                    <Button title="Criar"/>
                </form>

                <div className={styles.tasks}>
                    <div className={styles.tasksHeader} >
                        <p>Tarefas criadas <span>{createdTasks}</span></p>
                        <p>Concluídas <span>{ completedTasks > 0 ? completedTasks + " de " + createdTasks : 0 }</span></p>
                    </div>

                    {
                        tasks.length > 0 ?
                            tasks.map((task, index) => {
                                return <Task 
                                            task={task} 
                                            key={task}
                                            index={index}
                                            onDeleteTask={handleDeleteTask}
                                            onCompleteTask={handleCompleteTask}
                                        />
                            })
                        :   (
                                <div className={styles.tasksContent}>
                                    <img src={Clipboard} alt="Icone de um clipboard" />

                                    <p> Você ainda não tem tarefas cadastradas </p>
                                    <p> Crie tarefas e organize seus itens a fazer </p>
                                </div>
                            )
                    }

                    
                </div>
            </main>
        </div>
    );
}