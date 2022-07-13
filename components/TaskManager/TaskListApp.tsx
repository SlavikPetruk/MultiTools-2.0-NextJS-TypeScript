import React, { createContext, FC, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TasksContextType, TasksType } from './TaskTypes'

type TasksContextProviderProps = {
  children: React.ReactNode
}

export const TaskListContext = createContext<TasksContextType | null>(null)

const TaskListContextProvider: FC<TasksContextProviderProps> = ({ children }) => {
  const [editItem, setEditItem] = useState(null)
  const [tasks, setTasks] = useState([
    { title: 'hello', id: uuidv4() },
    { title: 'hi', id: uuidv4() },
    { title: 'aloha', id: uuidv4() },
  ])

  useEffect(() => {
    let localTasks = localStorage.getItem('tasks')
    if (localTasks) {
      const initialState = JSON.parse(localTasks)
      setTasks(initialState)
    } else {
      null
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  console.log('TaskListApp => ', tasks)

  const addTask = (title: string) => setTasks([...tasks, { title, id: uuidv4() }])
  const removeTask = (id: string) =>
    setTasks(tasks.filter((task: { id: string }) => task.id !== id))
  const clearTasks = () => setTasks([])

  const findItem = (id: string): void => setEditItem(tasks.find((task) => task.id === id))

  const editTask = (title: string, id: string) => {
    const newTask = tasks.map((task: TasksType) => (task.id === id ? { title, id } : task))
    setTasks(newTask)
    setEditItem(null)
  }

  return (
    <TaskListContext.Provider
      value={{ tasks, addTask, removeTask, clearTasks, findItem, editTask, editItem }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
