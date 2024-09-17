"use client"
import React from 'react'

const HomePage = () => {
  const fetchDataFromApi =async()=> {
   
    
    try {
      const response = await fetch("/api/users",{
        headers:{
          Accept:"application/json",
          method:"GET"
        },

      })
      if(response) {
        const data = await response.json()
        console.log(data);
        
      }
      
    } catch (error) {
      console.log(error);
      
      
    }

  }
  return (
    <div>
      home page
      <button className='bg-blue-500 p-4' onClick={()=>fetchDataFromApi()}>Get Data</button>
    </div>
  )
}

export default HomePage