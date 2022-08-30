import todoLogo from '../assets/todo.svg'

import styles from './Header.module.css' 

export function Header() {
  return (
    <div className={styles.header}>
      <img src={todoLogo} />
    </div>
  )
}