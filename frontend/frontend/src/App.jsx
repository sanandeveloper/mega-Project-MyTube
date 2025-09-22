import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/SignUp'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from './components/store/authSlice'


function App() {

  const {status}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()

 const token= localStorage.getItem("accessToken")

useEffect(()=>{

 if (token) {
    dispatch(getCurrentUser())
 }

},[token,status])


  
  return (
    <>
    <Header/>
   <main>
    <Outlet/>
   </main>
    </>
  )
}

export default App
