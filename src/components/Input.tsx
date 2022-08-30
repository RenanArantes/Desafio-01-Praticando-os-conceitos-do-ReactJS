import { useState, FormEvent, ChangeEvent } from 'react'

import plusButton from '../assets/plus.svg'
import styles from './Input.module.css'

interface InputProps {
  getTask: (newTask: string) => void;
}

export function Input({ getTask }: InputProps) {
  const [tasks, setTasks] = useState([''])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();

    if (tasks[0] === '') {
      setTasks([newTask])
    } else if (tasks[0] !== '') {
      setTasks([...tasks, newTask])
    }

    getTask(newTask)
    return tasks
  }

  function handleNewTaskName(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    e.target.setCustomValidity('')
    setNewTask(e.target.value);
  }

  return(
    <form className={styles.wrapper} onSubmit={handleCreateNewTask}>
      <input 
        className={styles.input} 
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskName}
        value={newTask}
      />
      <button className={styles.button} type="submit">
        <span>Criar</span>
        <img src={plusButton} />
      </button>
    </form>
  )
}