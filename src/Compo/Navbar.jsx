import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className="flex px-2 pb-3">
        <div className="w-25  ps-5">

          <span className="text-4xl font-bold text-gray-500 underline">
            Jee
          </span>
            <span className='text-blue-600 text-4xl font-extrabold'>1</span>


        </div>
        <div className="w-[80%] bg-white p-2 rounded-2xl me-32">.</div>
        <div className="w-[12%] bg-white  rounded-2xl text-right  ">

      
            <i className="fa-solid fa-bell  border-2 rounded-full p-2"></i>
    

          
            <i className="fa-solid fa-gear border-2 rounded-full p-2"></i>
          
          <button className='p-1'>

            <img src="https://imgs.search.brave.com/QLxGh9avEGGnD2-YjHzmQFwNlsHLzWD0J-fZlfBLgKo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvZ2VuZXJhdGUt/YW4tYWktYXZhdGFy/LW9mLWEtc2VyaW91/cy1tYWxlLWluLWFu/LWFuaW1hdGVkLXN0/eWxlLWluLWZvdG9y/XzIwMjUtMDMtMDUt/MDkzNjIzX3R0bHAu/anBn" alt="Profile" width={30} height={30} className=" rounded-full" />
          </button>
        </div>
      </div>


    </>
  )
}
