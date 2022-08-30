import { useState } from 'react';
import { BiTrash } from 'react-icons/bi'

import styles from './Task.module.css'

interface TaskProps {
  task: string;
  onDeleteTask: (taskToDelete: string) => void;
  onCheckedTask: (checkedTaskCounter: number) => void;
}

export function Task({ task, onDeleteTask, onCheckedTask }: TaskProps) {
  const [checkedTask, setCheckedTask] = useState(false)

  function handleCheck() {
    setCheckedTask(!checkedTask)
    !checkedTask ? onCheckedTask(1) : onCheckedTask(0)
  }

  function handleDeleteTask() {
    onDeleteTask(task)
  }

  function handleCheckCount() {
    
  }

  return(
    <ul className={styles.wrapper}>
      <li className={styles.container}>
        <label>
          <input type="checkbox" className={styles.radio} onClick={handleCheck}/>
          <span className={styles.checkmark}></span>
        </label>
        <span className={checkedTask ? styles.checkedText : styles.task}>
          {task}
        </span>
        <BiTrash className={styles.icon} size={24} onClick={handleDeleteTask}/>
      </li>
    </ul>
  )
}