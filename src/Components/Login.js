import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../Utilities/validate';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from '../Utilities/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utilities/userSlice';
const Login = () => {

  const [isSignIn , setIsSignin] = useState(true)   ;

  const [errorMessage , setErrorMessage] = useState(null)
  
  const email = useRef();
  const password = useRef();
  const name = useRef()
  const dispatch = useDispatch()

  const CheckValidation = () => {
    console.log(email)
    console.log(password.current.value)

  const message =checkValidation(email.current.value,password.current.value) ;
  // console.log(message)
  setErrorMessage(message)
   if(message) return;

   if(!isSignIn){

     console.log(name.current.value ,"if" )
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
        updateProfile(auth ,{
          displayName : name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
         
        }).then(() => {
          // console.log(name.current.value ,"then")

          const {uid , email , displayName ,photoURL} = auth.currentUser
          dispatch(addUser({uid : uid , email :email , displayName:displayName ,photoURL:photoURL}))
          // Profile updated!
          // ...
          
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error)
          // console.log(name.current.value , "error")
        });
        // navigate("/Browse")
        
        console.log(user ,"user")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrorMessage(errorCode + " - " +errorMessage)
        // console.log(error)
      });
   }else{
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    
      // console.log(user , "sign")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      setErrorMessage(errorCode + " - " +errorMessage)
      // console.log(error)
    });
   }

  }
  const toggleHandlerFundtion = ()=>{
      setIsSignin(!isSignIn)
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='w-full fixed'  alt='back' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs'/>
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className='absolute mt-36 ml-[500px] bg-black p-10 w-3/12 text-white bg-opacity-75' >
      <h1 className='font-bold text-2xl mb-4' >{isSignIn ? "Sign In" : "Sign UP"}</h1>
      {!isSignIn && <input ref={name} type='text' placeholder='Full Name' className=' p-2 mt-4 w-full bg-slate-500 rounded-sm'/> }
        <input ref={email} type='email' placeholder='Enter Email' className=' p-2 mt-4 w-full bg-slate-500 rounded-sm'/>
        <input ref={password} type='password' placeholder='Enter Password' className='p-2 mt-4 w-full bg-slate-500 rounded-sm'/>
        <p className='text-lg font-bold text-red-500 mt-2'>{errorMessage}</p>
        <button className=' bg-red-700 w-full p-2 mt-4 rounded-sm'  onClick={CheckValidation}>{isSignIn ? "Sign In" : "Sign UP"}</button>
        <p className='text-white mt-5 cursor-pointer' onClick={toggleHandlerFundtion}> {isSignIn ? "New to Netflex ? click on Sign Up" : "Already have account click sign in"}</p>
      </form>
     
     
    </div>
  )
}

export default Login