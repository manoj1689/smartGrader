import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'

function HideNav({children}) {
    const [showNavbar,setShowNavbar]=useState(false)
    const Location=useLocation()

    useEffect(()=>{
       // console.log('This is Location',Location)
        if (Location.pathname ==='/signUp' || Location.pathname ==='/signUp/selectInterest'  || Location.pathname ==='/signIn'  || Location.pathname ==='/createAccount' || Location.pathname ==='/signIn/password' || Location.pathname ==='/signIn/dashboard' || Location.pathname ==='/signInAs'    ){
            setShowNavbar(false)
        }else{
            setShowNavbar(true)
        }
    },[Location])
  return (
    <div>{showNavbar && children}</div>
  )
}

export default HideNav