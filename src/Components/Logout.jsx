import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../Features/userSlice'
import "./Logout.css"

const Logout = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const handleLogut = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <div>
      <h1>
        Welcome <span>{user.name}</span>
        
      </h1>
      <button className='Logout_button' onClick={(e) => handleLogut(e)}>Logout</button>
    </div>
  )
}

export default Logout
