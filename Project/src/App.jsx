// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [isOn, setIsOn] = useState(false);
  
//   const toggleLight = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <div className="text-center p-10 bg-gray-100 min-h-screen flex justify-center flex-col items-center w-[1500px]">
//     <div
//       className={`text-8xl transition-all duration-300 ${
//         isOn ? 'text-yellow-400 drop-shadow-[0_0_15px_gold]' : 'text-gray-400'
//       }`}
//     >
//       💡
//     </div>
      
//       <div>
//         <p className="text-xl mt-4">{isOn ? 'Light is ON' : 'Light is OFF'}</p>
//     <button
//       onClick={toggleLight}
//       className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//     >
//       Toggle Light
//     </button>
//       </div>

//   </div>
//   )
// }

// export default App








// import React from "react";

// const sales = [
//   { category: "Electronics", subCategory: "Mobile", unitsSold: 10, pricePerUnit: 200 },
//   { category: "Electronics", subCategory: "Laptop", unitsSold: 5, pricePerUnit: 1000 },
//   { category: "Electronics", subCategory: "Mobile", unitsSold: 15, pricePerUnit: 180 },
//   { category: "Furniture", subCategory: "Chair", unitsSold: 20, pricePerUnit: 50 },
//   { category: "Furniture", subCategory: "Table", unitsSold: 5, pricePerUnit: 300 },
//   { category: "Electronics", subCategory: "Laptop", unitsSold: 3, pricePerUnit: 1200 },
//   { category: "Furniture", subCategory: "Chair", unitsSold: 30, pricePerUnit: 45 },
//   { category: "Furniture", subCategory: "Chair", unitsSold: 10, pricePerUnit: 55 },
// ];

// const getRevenueData = () => {
//   const revenueByCategory = []; 

//   for (const sale of sales) {
//     const { category, subCategory, unitsSold, pricePerUnit } = sale;
//     const revenue = unitsSold * pricePerUnit;

//     if (!revenueByCategory[category]) {
//       revenueByCategory[category] = [];
//     }

//     if (!revenueByCategory[category][subCategory]) {
//       revenueByCategory[category][subCategory] = 0;
//     }

//     revenueByCategory[category][subCategory] = revenueByCategory[category][subCategory] + revenue;
//   }

//   return revenueByCategory;
// };

// const RevenueSummary = () => {
//   const revenueData = getRevenueData();

//   return (
//     <div>
//       <h2>Revenue Summary</h2>
//       {Object.entries(revenueData).map(([category, subCategories]) => (
//         <div key={category}>
//           <h3>{category}</h3>
//           <ul>
//             {Object.entries(subCategories).map(([subCategory, revenue]) => (
//               <li key={subCategory}>
//                 {subCategory}: {revenue}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RevenueSummary;



