import React from 'react'
import TopDistributer from './MainCoponent/TopDistributer'
import StockRunLow from './MainCoponent/StockRunLow'
import Apidata from './MainCoponent/Apidata'

export default function MainRight() {
  return (
    <>
      <div className='bg-white rounded-r-2xl '>


        <div class="flex items-center justify-between  p-2 mx-3 bg-gray-900 rounded-full">
          <div class=" mx-4 flex items-center">
            <img alt="Blue circular icon" class="w-6 h-6 rounded-full" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGIqrZv0hzk8jcvA50lMBua0uHnSqe2FnPaic1NIEMOYSwOV9F" />
            <span class="ml-2 text-white text-lg font-semibold">
              270+
            </span>
          </div>
          <span class="text-gray-400 text-sm me-6">
            Po recived Today
          </span>
        </div>

        <div class="flex items-center justify-between  p-2 m-3 bg-blue-100 rounded-full ">
          <div class="mx-auto flex items-center">
            <i class="fas fa-link text-2xl text-gray-600">
            </i>
            <span class="ml-2 text-gray-600 text-sm font-semibold">
              Your Reference
            </span>
            <span class="ml-1 text-blue-500 text-xs font-semibold">
              Copy Link
            </span>
          </div>
          <i class="fas fa-share-alt text-2xl text-gray-600 pe-4">
          </i>
        </div>


        <TopDistributer />
        <Apidata />
        <StockRunLow />
      </div>
    </>
  )
}
