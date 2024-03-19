import React from 'react'

function Login() {
  return (
    <div className='flex flex-col w-full items-center justify-center h-screen'>
        <div className='flex flex-col border-2 border-black rounded-lg text-3xl p-10'>
          <h1 className='text-5xl font-semibold'>Login</h1>
          <p className='mt-2'>Enter Your Details</p>
          <input className=' border-2 border-black rounded-lg text-2xl p-2' type='email' placeholder='Email'/>
          <br/>
          <input className=' border-2 border-black rounded-lg text-2xl p-2' type='password' placeholder='Password'/>   
          <br/>
          <button className='mt-3 bg-red-700 text-3xl rounded-lg p-2'>Login</button>
        </div>  
    </div>
  )
}

export default Login