import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  let url = "http://localhost:3000/user/signup"

let studentArray = []
  const navigate = useNavigate()

    const handlesubmit = () =>{
      let studentObj = {email, password}
      setEmail("")
      setPassword("")

      axios.post(url, studentObj)
      .then((result) => {
        alert(result.data.message)
        // navigate(`/user/dashboard/${email}`)
      })

      
      //  studentArray.push(studentObj)
      //   localStorage.setItem("student", JSON.stringify(studentArray))
      //   navigate(`/user/dashboard/${email}`)
       
    }

    const handleinputchangeE = (e) => {
      setEmail(e.target.value);
      
    }
    const handleinputchangeP = (e) => {
      setPassword(e.target.value);
      
    }
  return (
    <>
    
    <form className="flex max-w-md flex-col gap-4">
      
      <div>
        <div className="mb-2 block">
          <label htmlFor="email1" value="Your email" />
        </div>
        <input type="email" placeholder="name@flowbite.com" required name='email'  value={email} onChange={handleinputchangeE} />
      </div>
      <div>
        <div className="mb-2 block">
          <label htmlFor="password1" value="Your password" />
        </div>
        <input id="password1" type="password" required placeholder='Password' name='password' value={password} onChange={handleinputchangeP} />
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