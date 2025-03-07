import React, { useContext, useEffect, useState } from 'react'
import { Login } from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AdminDashboard } from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'     
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  
  const authData = useContext(AuthContext)

  const handleLogin = (email,password) =>{
    if (email == 'admin@me.com' && password == '123'){
      setUser('admin')
    }
    else if(authData && authData.employees.find((e)=> email == e.email && e.password == password)) {
      setUser('employee')
    }
    else{
      alert("Invalid user")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : ""}
      {user == "employee" ? <EmployeeDashboard changeUser={setUser} /> : ""}
    </>
  );
}

export default App