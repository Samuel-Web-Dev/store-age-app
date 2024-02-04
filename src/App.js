import React, { useState } from 'react'

import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

const App = () => {
  const [userList, setUserList] = useState([])

  const addUserHandler = (UserName, UserAge) => {
    setUserList(prevUserList => {
      return [...prevUserList, { name: UserName, age: UserAge, id: Math.random().toString() }]
    })
  }
  return (
    <>
    <AddUser onAddUser={addUserHandler} />
    <UserList users={userList} />
    </>
  )
}

export default App