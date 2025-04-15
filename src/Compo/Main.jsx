import React from 'react'
import Main1 from './MainCoponent/Main1'
import Main2 from './MainCoponent/Main2'
import DistributerReq from './MainCoponent/DistributerReq'
import TopProduct from './MainCoponent/TopProduct'

export default function Main() {
  return (
    <>
        <div className=' flex-1 p-4 bg-white rounded-l-2xl'>
          <Main1 />

          <Main2 />
          <DistributerReq />
        

          <TopProduct />
        </div>


    </>
  )
}
