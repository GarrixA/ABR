import React from 'react'
import { Link } from 'react-router-dom'
import "../../index.scss";

const Reset = () => {
  return (
    <>
    <div className="wrapper w-full h-screen bg-no-repeat flex justify-center items-center">
      <div className="blue bg-[#1a8cff] w-[27%] h-[80%] rounded-l-md text-white flex flex-col justify-between">
        <div className="top">
          <div className="tit text-center py-4 text-3xl px-6 my-4 font-bold">Construc</div>
          <div className="decri px-14 leading-8">
          With the power of construc, you can now organize, manage, track, share, maintain all you construct project work load in one place.
          </div>
        </div>
        <div className="bootom flex flex-col items-center mb-14">
          <div className="acc flex flex-col items-center py-10">
            Don't have an account?
            <span className="my-1 underline font-semibold">Get started</span>
          </div>
          <div className="foot">© All rights reserved. MMPAS 2023</div>
        </div>
      </div>
      <div className="white bg-white px-10 w-[43%] h-[80%] rounded-r-md flex flex-col justify-center">
        <h1 className="text-4xl font-bold py-2">Forgot your password?</h1>
        <form className="flex flex-col w-full">
          <div className="flex flex-col py-3">
          <label className='text-slate-400'>Enter your email and we will send you a reset link</label>
          <input type="text" placeholder="email" className="border border-green-700 px-4 py-2 rounded mt-2"/>
          </div >
          <button className="bg-[#1a8cff] py-1 mt-4 rounded uppercase text-white font-semibold">Send a reset link</button>
          <Link to={"/"}><span className=" text-slate-400">I can't recover my account using this page</span></Link>
        </form>
      </div>
    </div>
  </>
  )
}

export default Reset
