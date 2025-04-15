import React from 'react';

export default function TopDistributer() {
  const distributors = [
    { name: "Agarwal Pharma", image: 'https://www.google.com/imgres?q=google%20images&imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2FFJI5Lzbf2dMd32xOqhoKpJArJooZhoX6v2qOcFO-wjSZUvs3H9xqq2gK4DQ47X0KnYgf7X2rpdU%3Ds900-c-k-c0x00ffffff-no-rj&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fgoogleindia&docid=2XmrqRr5NMVd7M&tbnid=R8_TOzsyQ0ntjM&vet=12ahUKEwj0soLE1tqMAxUcSGwGHdZ7AdAQM3oECHsQAA..i&w=900&h=900&hcb=2&ved=2ahUKEwj0soLE1tqMAxUcSGwGHdZ7AdAQM3oECHsQAA',percentage: "15%" },
    { name: "Jyoty Pharma", image: '',percentage: "35%" },
    { name: "Rama Dealers", image: '',percentage: "50%" },
    { name: "Sun Pharma", image: '',percentage: "45%" },
    { name: "MediCare", image: '',percentage: "40%" },
    { name: "LifeWell", image: '',percentage: "38%" },
    { name: "PharmaZone", image: '',percentage: "32%" },
    { name: "Medline", image: '',percentage: "28%" },
    { name: "Cure & Care", image: '',percentage: "25%" },
    { name: "Pharma Hub", image: '',percentage: "20%" }
  ];

  return (
    <div className="mb-4 p-4 rounded-3xl border-2  ">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">Top 10 Distributors <p className='text-sm text-gray-400 '>Based on Order Qty</p></div>
        <div className="flex items-center">
        
          <i className="fas fa-copy text-gray-500 mr-2"></i>
          <i className="fas fa-share-alt text-gray-500"></i>
        </div>
      </div>

      <div className="space-y-2 max-h-60 overflow-y-scroll">
        {distributors.map((distributor, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="Distributor"
                className="rounded-full mr-2"
                src="data:image/jpeg;base64,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" width={30}
              />
              <p className="text-gray-700">{distributor.name}</p>
            </div>
            <div className="text-gray-700">{distributor.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
