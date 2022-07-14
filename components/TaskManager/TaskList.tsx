import { FC, useContext } from 'react'
import Task from './Task'
import styles from '../../styles/TaskManager.module.css'
import { TaskListContext } from './TaskListApp'
import { TasksContextType, TasksType } from './TaskTypes'

const TaskList:FC<TasksContextType | null> = () => {
  const { tasks }: any = useContext(TaskListContext)

  return (
    <div>
      {tasks.length ? (
        <ul className={styles.list}>
          {tasks.map((task:TasksType, index:number) => (
            <Task key = {index} task = {task} />
          ))}
        </ul>
      ) : (
        <div className={styles.no__tasks}>No Tasks</div>
      )}
    </div>
  )
}

export default TaskList
