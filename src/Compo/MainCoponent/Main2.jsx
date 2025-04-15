import React from 'react'

export default function Main2() {
  return (
    <>   
    <div class="grid grid-cols-3 gap-4 mb-6">
    <div class="bg-yellow-200 p-4 rounded-3xl">
        <p class="text-gray-700">
            Orders Received Last 30 Days
        </p>
        <p class="text-3xl font-bold">
            23
        </p>
    </div>
    <div class="bg-blue-200 p-4 rounded-3xl">
        <p class="text-gray-700">
            Total Products In Portfolio
        </p>
        <p class="text-3xl font-bold">
            101
        </p>
    </div>
    <div class="bg-gray-200 p-4 rounded-3xl">
        <p class="text-gray-700">
            Distributor Approved by You
        </p>
        <p class="text-3xl font-bold">
            39
        </p>
    </div>
</div></>
  )
}
