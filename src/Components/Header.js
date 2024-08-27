import React from 'react'
import HeaderPage from './HeaderPage';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utilities/firebase"
import { addUser, removeUser } from "../Utilities/userSlice"
import {toggleGptSearch} from "../Utilities/gptSlice"
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const signOutHandler = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid , email , displayName , photoURL} = user ;
        // console.log(photoURL , "usefeeft body")

        dispatch(addUser({uid : uid , email :email , displayName:displayName ,photoURL:photoURL}))
        navigate("/Browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    return ()=> unSubscribe()
  },[])
  const headerPage = ["home" , "sport" , "games" , "movies" , "comedy"]
const gptHandleSearch = () =>{
  dispatch(toggleGptSearch())
}

  return (
    <div>
      <div className='flex absolute w-full bg-gradient-to-b from-black p-1  z-10 '>
        <img className='w-20 h-12 m-1' alt='logo' src='https://t3.ftcdn.net/jpg/04/81/76/22/360_F_481762281_Xcvl3QsGh1pBMvQuyKIoIqq8aYksXEwX.jpg'/>
    {user && 
    <div className='flex w-screen justify-between'>
      
      
      <div className='flex text-white ml-3 mt-3'>
        {headerPage.map((e,i) =><HeaderPage key={i} info={e}/> )}
      </div>
       <div className='flex'>
       <button className='text-white bg-purple-800 m-3 p-2 rounded-xl' onClick={gptHandleSearch}>GPT Search</button>
        <img alt='logoa' className='rounded-xl w-12 h-12 mt-3' src="https://lh3.googleusercontent.com/ogw/AF2bZygNFa8Br_eMdNjhqxWF3FjSi_71jwGN-C_wNu5UQPdPM5w=s64-c-mo"/>
        <button onClick={signOutHandler} className='text-white'>Sign Out</button>
      </div> </div>
      }   
      </div>
    </div>
  )
}

export default Header