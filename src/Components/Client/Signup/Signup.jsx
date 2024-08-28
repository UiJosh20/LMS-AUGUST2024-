import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const navigate = useNavigate()
const Signup = () => {

    const handlesubmit = () =>{
        navigate(`/user/dashboard/${1}`)
    }
  return (
    <>
    
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <label htmlFor="email1" value="Your email" />
        </div>
        <input id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <label htmlFor="password1" value="Your password" />
        </div>
        <input id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        
        <label htmlFor="remember">Remember me</label>
      </div>
    </form>
      <button type="submit" onClick={handlesubmit}>Submit</button>
    
    </>
  )
}

export default Signup