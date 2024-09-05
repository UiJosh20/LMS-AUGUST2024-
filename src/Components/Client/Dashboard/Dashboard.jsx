import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [userMail,setuserMail] = useState("")
  const fetchEmail = () =>{
    let savedEmail = JSON.parse(localStorage.getItem('student'))
    setuserMail(savedEmail[0].email)

  }
  useEffect(()=>{
    fetchEmail()
  })
  return (
    <>
    <h3>Welcome {userMail}, to your dashboard, enjoy!</h3>
    </>
  )
}

export default Dashboard