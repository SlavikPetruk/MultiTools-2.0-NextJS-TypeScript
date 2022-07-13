import { useContext, useEffect, useState } from "react";
import { TaskListContext } from "./TaskListApp";
import styles from '../../styles/TaskManager.module.css'


const TaskForm = () => {
    const {addTask, clearTasks, editItem, editTask}:any = useContext(TaskListContext)

    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!editItem ) {
            addTask(title)
            setTitle('')
        } else {
            editTask(title,editItem.id)
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
        } else {
            setTitle('')
        }
    },[editItem])

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className={styles.task_input}
      />
        <div className={styles.buttons}>
            <button className={`${styles.btn} ${styles.add_task__btn}`}>
                {editItem ? 'Edit Task' : 'Add Task'}
            </button>
            <button onClick={clearTasks} className={`${styles.btn} ${styles.add_task__btn}`}>
                Clear
            </button>
        </div>
  </form>
  )
}

export default TaskForm;
