import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './components/store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import UserProfile from './components/UserProfile.jsx'
import LogoutBtn from './components/Header/LogoutBtn.jsx'
import ChangeAvatar from './components/ChangeAvatar.jsx'
import ChangeCoverImage from './components/ChangeCoverImage.jsx'
import ChangeName from './components/ChangeName.jsx'
import ChangeUsername from './components/ChangeUsername.jsx'
import ChangeEmail from './components/ChangeEmail.jsx'
import ChangePassword from './components/ChangePassword.jsx'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {

        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/login",
        element:<Login/>
      }, {
        path:"/user",
        element:<UserProfile/>
      },
      {
        path:"/logout",
        element:<LogoutBtn/>
      },{
        path:"/changeavatar",
        element:<ChangeAvatar/>
      },{
        path:"/changecoverimage",
        element:<ChangeCoverImage/>
      },{
        path:"/changename",
        element:<ChangeName/>
      },{
        path:"/changeusername",
        element:<ChangeUsername/>
      },{
        path:"/changeemail",
        element:<ChangeEmail/>
      },{
        path:"/changepassword",
        element:<ChangePassword/>
      }
    
    ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <RouterProvider router={router}/>
</Provider>
)
