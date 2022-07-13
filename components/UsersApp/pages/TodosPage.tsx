import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import List from '../List'
import { TodoItem } from '../TodoItem'
import { ITodo } from '../types/types'



const TodosPage: FC = () => {
    
    const [todos, setTodos] = useState<ITodo[]>([])
  
    useEffect(() => {
      fetchTodo()
    }, [])
  
    const fetchTodo = async ()=> {
      try {
        const responce = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(responce.data)
      } catch (error) {
        alert(error)
      }
    }

    return (
        <div>
          <List 
            items={todos} 
            renderItem={(todo: ITodo)=> <TodoItem todo={todo} key={todo.id} />}
          />
        </div>
    )
}

export default TodosPage
