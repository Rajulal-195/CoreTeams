import React from "react";

const topProducts = [
  {
    id: "01",
    name: "Paracetamol",
    percentage: 45,
    color: "bg-blue-600",
  },
  {
    id: "02",
    name: "Aspirin",
    percentage: 29,
    color: "bg-green-600",
  },
  {
    id: "03",
    name: "Calpol",
    percentage: 18,
    color: "bg-purple-600",
  },
  {
    id: "04",
    name: "Caltabs",
    percentage: 25,
    color: "bg-yellow-600",
  },
];

export default function TopProduct() {
  return (
    <div className="bg-white p-4 rounded-2xl border-2">
      <h2 className="text-xl font-bold mb-4">Top Products</h2>
      <div className="space-y-4">
        {topProducts.map((product) => (
          <div key={product.id} className="flex justify-between items-center">
            <p className="text-gray-700 w-1/5">{`${product.id} ${product.name}`}</p>
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${product.color}`}
                style={{ width: `${product.percentage}%` }}
              ></div>
            </div>
            <p className="text-gray-700 w-1/5 text-right">{`${product.percentage}%`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


