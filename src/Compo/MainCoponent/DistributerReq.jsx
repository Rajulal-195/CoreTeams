import React, { useState } from 'react';

export default function DistributerReq() {
  const [Request, setRequest] = useState({});

  const distributors = [
    {
      type: "Distributor",
      name: "Aparna Pharmacy",
      licenseNo: "123896",
      address: "36 Sitapura Ind Area Jaipur",
      timeAgo: "1 day ago",
      status: "Pending",
      contact: "+91 8899228833"
    },
    {
      type: "Distributor",
      name: "Aparna Pharmacy",
      licenseNo: "123896",
      address: "36 Sitapura Ind Area Jaipur",
      timeAgo: "1 day ago",
      status: "Pending",
      contact: "+91 8899228833"
    },
    {
      type: "Distributor",
      name: "Aparna Pharmacy",
      licenseNo: "123896",
      address: "36 Sitapura Ind Area Jaipur",
      timeAgo: "1 day ago",
      status: "Rejected",
      contact: "+91 8899228833"
    },
    {
      type: "Distributor",
      name: "Aparna Pharmacy",
      licenseNo: "123896",
      address: "36 Sitapura Ind Area Jaipur",
      timeAgo: "16 days ago",
      status: "Approved",
      contact: "+91 8899228833"
    }
  ];

  const getStatusClass = (status) => {
    if (status === "Approved") return "text-green-600 bg-green-200";
    if (status === "Rejected") return "text-red-600 bg-red-200";
    return "text-blue-600 bg-blue-200";
  };

  return (
    <div className="mb-6">
      <div className="bg-white p-4 rounded-3xl border-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Distributor Requests
            <button className="border-1 mx-auto p-2 text-sm rounded-full text-gray-400 ml-2">
              42 Pending
            </button>
            <br />
            <span className="text-sm text-gray-700">
              You have get order !!
              <p className="text-xs text-gray-400">
                Approved The dealers and start processing order!
              </p>
            </span>
          </h2>
          <div className="flex">
            <button className="px-1 rounded-l-lg border-2">All</button>
            <button className="border-2 px-1 p-1">Pending</button>
            <button className="bg-green-500 border-2 px-1">Approved</button>
            <button className="border-2 px-1 rounded-r-lg">Rejected</button>
          </div>
        </div>

        <hr />

        <div className="space-y-4">
          <div className="flex items-center justify-between text-bold">
            <div className="text-gray-500">Distributor Name</div>
            <div className="text-gray-500 text-center">Status</div>
            <div className="text-gray-500">Contact No.</div>
            <div className="text-gray-500">Action</div>
          </div>
          <div className='max-h-80 overflow-y-scroll'>

            {distributors.map((d, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img alt="Distributor" className="rounded-2xl mr-3 " src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSe4zvlRX-QqcNiH1Ft6h_8HMv1qNR2x8X5jj6TtI3QndgikTF" height={30}  width={40}/>
                  <div>
                    <p className="text-gray-700">{d.name}</p>
                    <p className="text-gray-500 text-sm">License No. {d.licenseNo}</p>
                    <p className="text-gray-500 text-sm">{d.address}</p>
                    <p className="text-gray-500 text-sm">{d.timeAgo}</p>
                  </div>
                </div>
                <div className={`${getStatusClass(d.status)} p-2 rounded-2xl`}>
                  {d.status}
                </div>
                <div className="text-gray-700">{d.contact}</div>
                <div className="text-blue-600">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
