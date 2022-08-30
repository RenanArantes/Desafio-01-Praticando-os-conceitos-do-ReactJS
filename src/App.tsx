import { Header } from './components/Header'

import clipboardIcon from './assets/clipboard.svg'
import styles from './App.module.css'
import './global.module.css'
import { Input } from './components/Input'
import { useState } from 'react'
import { Task } from './components/Task'

function App() {
  const [tasks, setTasks] = useState([''])
  const [checkedCount, setCheckedCount] = useState(0)

  function getTask(newTask: string) {
    if(tasks[0] === '') {
      setTasks([newTask])
    } else if (tasks[0] !== '') {
      setTasks([...tasks, newTask])
    }
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  function checkTask(checkedTaskCounter: number) {
    if(checkedTaskCounter === 1) {
      setCheckedCount(checkedCount + 1)
    } else if (checkedTaskCounter === 0) {
      setCheckedCount(checkedCount - 1)
    }
  }

  return (
    <div>
      <Header />
      <Input getTask={getTask}/>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div>
            <span className={styles.task}>
              Tarefas criadas
            </span>
            <span className={styles.counter}>{tasks[0] === '' ? 0 : tasks.length}</span>
          </div>
          <div>
            <span className={styles.done}>
              Concluídas
            </span>
            <span className={styles.counter}>{checkedCount} de {tasks[0] === '' ? 0 : tasks.length}</span>
          </div>
        </div>
        { tasks[0] !== '' ? (
          <div className={styles.taskContainer}>
            { tasks.map( task => {
              return (
                <Task task={task} onDeleteTask={deleteTask} onCheckedTask={checkTask} />
              )
            })}
          </div>
        ) : (
          <div className={styles.empty}>
            <img className={styles.clipboardIcon} src={clipboardIcon}/>
            <p>
              <p className={styles.bold}>
                Você ainda não tem tarefas cadastradas
              </p>
              <p>
                Crie tarefas e organize seus itens a fazer
              </p>
            </p>
          </div>
        ) }
      </div>
    </div>
  )
}

export default App
