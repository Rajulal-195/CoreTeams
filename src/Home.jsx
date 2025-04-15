import React from 'react'
import Navbar from './Compo/Navbar'
import Sidebar from './Compo/Sidebar'
import Footer from './Compo/Footer'
import Main from './Compo/Main'
import MainRight from './Compo/MainRight'
export default function Home() {
  return (
    <>
      <div className='bg-blue-100 p-3 '>

        <Navbar />
        <div class="flex bg-white">
          <Sidebar />
          <div class="w-4/6 bg-blue-100 ">
            <Main />
          </div>
          <div class="w-2/6 bg-white p-3  rounded-r-2xl ">
            <MainRight />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
