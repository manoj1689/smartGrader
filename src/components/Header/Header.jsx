import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
 <>
 <div className='container mx-auto px-4 py-4 flex flex-row '>
  <div className='basis-1/4 '>
    <img width={179} height={43} src='./images/smartGraderLogo.png' alt="smart Grader" />
  </div>
  <div className='basis-1/2 content-center' >
  <div className='flex justify-center gap-6 font-spline' >
    <span><Link to="/">Home</Link></span>
    <span><Link to="works">How It Works</Link></span>
    <span><Link to="pricing">Pricing</Link></span>
    <span><Link to="partners">Partners</Link></span>
    <span><Link to="FAQ">FAQ</Link></span>
    <span><Link to="contactUs">ContactUs</Link></span>
  </div>

  </div>
  
  <div className='basis-1/4  flex justify-end gap-2'>
    <span><Link to="signIn">SignIn</Link></span>
    <span> <Link to="createAccount">SignUp</Link></span>
  </div>
 </div>
 </>
  
  )
}

export default Header