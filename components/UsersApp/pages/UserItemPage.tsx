import axios from 'axios'
import '../css.css'
import { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { UserType } from '../types/types'

interface UserItemPageParams {
    id: string
}

export const UserItemPage : FC = () => {
    const [user, setUser] = useState<UserType | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()
  
    useEffect(() => {
      fetchUsers()
    }, [])
  
    const fetchUsers = async ()=> {
      try {
        const responce = await axios.get<UserType
        >('https://jsonplaceholder.ir/users/' + params.id)
        setUser(responce.data)
      } catch (error) {
        alert(error)
      }
    }
    return (
        <div>
            <button onClick={()=> history.push('/users') } >Back</button>
            <h1>Page user {user?.name}</h1>
            <img src={user?.avatar} alt={user?.name} style={{width:'50px'}}/>
            <div className='user__info'>
              <p><b>Name:</b> {user?.name}</p>
              <p><b>Username:</b> {user?.username}</p>
              <p><b>Email:</b> {user?.email}</p>
              <p><b>Password:</b> {user?.password}</p>
              <p><b>Phone:</b> {user?.phone}</p>
              <p><b>Website:</b> {user?.website}</p>
              <p><b>Company:</b> {user?.company}</p>
              <p><b>Address:</b> </p>
              <div className='user__info-address'>
                <p>{user?.address.country}</p>
                <p>{user?.address.city}</p>
                <p>{user?.address.street}</p>
                <p>{user?.address.alley}</p>
                <p>{user?.address.number}</p>
              </div>

              
    {/* "avatar": "https://avatars.dicebear.com/api/male/mamad.svg", */}
    {/* "address": {
      "country": "ایران",
      "city": "تبریز",
      "street": "خیابان امام",
      "alley": "کوچه بهشتی",
      "number": 168,
      "geo": {
        "lat": "38.066667",
        "lng": "46.3" */}
            </div>
        </div>
    )
}
