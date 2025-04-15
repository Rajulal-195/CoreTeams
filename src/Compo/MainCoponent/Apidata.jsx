import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Apidata() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const res = await axios.get("http://157.15.202.188:3001/stock-runningLow-test", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTksInVzZXJOYW1lIjoibWFuamVldGRpczExMiIsInVzZXJUeXBlIjoiRGlzdHJpYnV0b3IiLCJpYXQiOjE3NDQ2MTEyMDIsImV4cCI6MTc0NzIwMzIwMn0.K36w-Bby_od86Nr5zaXuT4swET4PyR9gUR1cDZQWL7U"
          }
        });

        setProducts(res.data.apiData);
      } catch (error) {
        console.error("Failed to fetch stock data", error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div className="p-3 rounded-3xl  border-2 mb-4">
      <h2 className="text-xl font-bold mb-4">
      Dist Product Info
      </h2>
    
      
      <div className="max-h-60 overflow-y-scroll min-h-40">

        <button className="text-gray-500  ">totalPro</button>
        <button className="text-gray-500  px-3">reteApp</button>
        <button className="text-sm text-gray-500 ps-1"> ordRec</button>
        <button className="text-sm text-gray-500 ps-1"> odRcToday</button>

        <hr />
              <button className="text-gray-500  pe-5">4</button>
              <button className="text-gray-500  px-4">0</button>
              <button className="text-sm text-gray-500 px-9">0</button>
              <button className="text-sm text-gray-500 ps-9"> 0</button>
      </div>

    </div>
  );
}
