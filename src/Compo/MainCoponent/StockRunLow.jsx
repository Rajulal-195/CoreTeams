import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StockRunLow() {
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
        <div className="p-3 rounded-3xl  border-2">
            <h2 className="text-xl font-bold mb-4">
                Stocks Running Low
            </h2>
            <div className="bg-white text-gray-400 ">
                <button >PId</button>
                <button className="px-5">Name</button>
                <button className="ps-5">Qty Left</button>
            </div>
            <hr />
            <div className="max-h-60 overflow-y-scroll min-h-40">

                {products.length === 0 ? (
                    <p>No stock data found</p>
                ) : (
                    products.map((item, index) => (
                        <div key={index} className="bg-white  ">
                            <button className="text-gray-500  ">{item.PId}</button>
                            <button className="text-gray-500 px-3">{item.PName}</button>
                            <button className="text-sm text-gray-500  ms-4"> {item.Stock}</button>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}
