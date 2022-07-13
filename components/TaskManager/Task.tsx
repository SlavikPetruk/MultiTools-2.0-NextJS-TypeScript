import { FC, useContext } from "react";
import { TaskListContext, TasksType } from "./TaskListApp";
import styles from '../../styles/TaskManager.module.css'

type TasksProps = {
    task: TasksType
}

const Task = ({task}:TasksProps) => {
    const {removeTask, findItem }: any = useContext(TaskListContext)
    console.log(task.title)
  return (
      <li className={styles.list__item}>
          <span>{task.title}</span>
          <div>
              <button onClick={() => removeTask(task.id)} className={`${styles.btn__delete} ${styles.task__btn}`}>
                  <i className="fas fa-trash-alt"></i>
              </button>
              <button onClick={() => findItem (task.id)} className={`${styles.btn__edit} ${styles.task__btn}`}>
                  <i className="fas fa-pen"></i>
              </button>
          </div>
      </li>
  )
};

export default Task;
