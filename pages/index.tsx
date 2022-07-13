import type { NextPage } from 'next'
import Head from 'next/head'
import TaskForm from '../components/TaskManager/TaskForm'
import TaskList from '../components/TaskManager/TaskList'
import TaskListContextProvider from '../components/TaskManager/TaskListApp'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Task Manager</title>
      </Head>
      <TaskListContextProvider>
        <TaskForm />
        <TaskList />
      </TaskListContextProvider>
    </div>
  )
}

export default Home
