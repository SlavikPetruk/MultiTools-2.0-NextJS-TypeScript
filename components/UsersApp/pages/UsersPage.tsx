import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import List from '../List'
import { UserType } from '../types/types'
import { UserItem } from '../UserItem'


const UsersPage: FC = () => {
    
    const [users, setUsers] = useState<UserType[]>([])
    const history = useHistory()
  
    useEffect(() => {
      fetchUsers()
    }, [])
  
    const fetchUsers = async ()=> {
      try {
        const responce = await axios
                .get<UserType[]>('https://jsonplaceholder.ir/users')
        setUsers(responce.data)
      } catch (error) {
        alert(error)
      }
    }
  

    return (
        <div>
            <List 
          items={users} 
          renderItem={(user: UserType)=> <UserItem 
                                            onClick={(user)=> history.push('/users/' + user.id)} 
                                            user={user} 
                                            key={user.id} />}
          />
        </div>
    )
}
export default UsersPage