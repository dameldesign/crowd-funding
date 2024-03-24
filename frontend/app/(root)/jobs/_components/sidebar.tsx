// "use client";

// import React, { useState } from "react";
// import FlashAd from "@/components/category/flash-ad";
// import { Checkbox } from "@/components/ui/checkbox";

// import { X, XCircle } from "lucide-react";
// import { businessData } from "@/constants/filters";
// import CustomModal from "@/components/ui/Modal";

// interface IData {
//   name: string;
// }

// export default function JobsSidebar() {
//   const subData: IData[] = [
//     { name: "Marketing" },
//     { name: "Audit" },
//     { name: "Banking" },
//     { name: "Trade Sphere" },
//     { name: "Finances" },
//     { name: "Hospitality" },
//   ];
//   const carData: IData[] = [
//     { name: "Full-time" },
//     { name: "Part-time" },
//     { name: "Remote" },
//     { name: "Hybrid" },
//   ];

//   const filtersMore = [
//     { name: "Full-time" },
//     { name: "Part-time" },
//     { name: "New" },
//     { name: "Remote" },
//     { name: "Hybrid" },
//     { name: "Foreign" },
//   ];

//   const [selectedFeatures, setSelectedFeatures] = useState<IData[]>([]);
//   const [selectedBusinessNames, setSelectedBusinessNames] = useState<string[]>(
//     []
//   );
//   const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false);
//   const [isAdditionalFeature, setIsAdditionalFeature] = useState(false);
//   const [anyChecked, setAnyChecked] = useState(false);

//   const [checkedFilters, setCheckedFilters] = useState(
//     filtersMore ? new Array(filtersMore.length).fill(false) : []
//   );
//   const handleApply = () => {
//     // Logic to apply the selected filters
//     // This could involve updating the state or making an API call
//     setIsAdditionalFeature(false); // Close the modal
//   };

//   const handleRemoveBusinessName = (data: string) => {
//     setSelectedBusinessNames(
//       selectedBusinessNames.filter((name) => name !== data)
//     );
//   };

//   const handleClearAll = () => {
//     setSelectedBusinessNames([]);
//   };

//   const handleChecked = (e: boolean | string, data: { name: string }) => {
//     if (e) {
//       setSelectedBusinessNames([...selectedBusinessNames, data.name]);
//       console.log("Updated selectedBusinessNames:", selectedBusinessNames);
//     } else {
//       setSelectedBusinessNames(
//         selectedBusinessNames.filter((name) => name !== data.name)
//       );
//     }
//   };
//   const handleSubCategory = (e: string, data: { name: string }) => {
//     if (!selectedBusinessNames.includes(e)) {
//       setSelectedBusinessNames([...selectedBusinessNames, data.name]);
//     } else {
//       setSelectedBusinessNames(
//         selectedBusinessNames.filter((name) => name !== data.name)
//       );
//     }
//   };

//   console.log(selectedFeatures, selectedBusinessNames);

//   return (
//     <aside className="flex w-[400px] flex-col  justify-between p-6   items-center overflow-y-scroll  gap-6 text-sm sticky  border-t-0 border-r-2 border-[#EBEBEB]">
//       <div className="w-full flex flex-col gap-6  px-2">
//         <div className="w-full flex flex-col justify-start items-start gap-4">
//           <div className="flex flex-col gap-2">
//             <div className="w-full justify-between items-center flex-row flex">
//               <h1 className="text-[24.19px] font-semibold text-brand-black">
//                 Filters
//               </h1>

//               {selectedBusinessNames.length > 0 && (
//                 <button
//                   className="p-4 text-primary-10 text-[14px]"
//                   onClick={handleClearAll}
//                 >
//                   Clear All
//                 </button>
//               )}
//             </div>
//             {/* Sub-categories selected */}
//             <div className="w-[100%] flex flex-col">
//               <div className="flex flex-row flex-wrap gap-2 w-full">
//                 {selectedBusinessNames.map((name, index) => (
//                   <div key={index}>
//                     <span className="flex py-1.5 px-[12px] gap-1 items-center text-black bg-[#F4F4F4] text-sm justify-center rounded-[16px]">
//                       {name}{" "}
//                       <button>
//                         <XCircle
//                           size={12}
//                           onClick={() => handleRemoveBusinessName(name)}
//                         />
//                       </button>
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           {/* Sub-categories  */}
//           <div className="w-[100%] flex flex-col border-b py-3 ">
//             <h1 className="text-dark-600 text-base font-semibold mb-2">
//               Sub-categories
//             </h1>
//             {/* checkbox */}
//             <div className="flex flex-row flex-wrap gap-2 w-full">
//               {subData.map((sub: IData, index: number) => (
//                 <div key={index}>
//                   <button
//                     onClick={() => handleSubCategory(sub.name, sub)}
//                     className={`flex py-1 px-[12px]  items-center hover:text-white   hover:bg-[#F08D38] text-sm justify-center border rounded-[16px] ${
//                       selectedBusinessNames.includes(sub.name)
//                         ? "bg-[#F08D38] text-white"
//                         : ""
//                     }`}
//                   >
//                     {sub.name}
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => setIsAdditionalInfoOpen(true)}
//               className="text-links text-start  text-sm font-semibold my-2"
//             >
//               See all
//             </button>
//           </div>
//           {/*  format*/}
//           <div className="w-[90%] flex flex-col border-b py-3 ">
//             <h1 className="text-dark-600 text-base font-semibold mb-2">
//               Employment Type
//             </h1>
//             {/* checkbox */}
//             <>
//               {selectedFeatures.length > 0 ? (
//                 <>
//                   {selectedFeatures.map((feature, index) => (
//                     <div key={index} className="mb-3">
//                       <div className="flex items-center space-x-3">
//                         <Checkbox
//                           id={`feature-${index}`}
//                           className="border-gray-400"
//                           checked={selectedBusinessNames.includes(feature.name)}
//                           onCheckedChange={(e) => handleChecked(e, feature)}
//                         />
//                         <label
//                           htmlFor={`feature-${index}`}
//                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                         >
//                           {feature.name}
//                         </label>
//                       </div>
//                     </div>
//                   ))}
//                 </>
//               ) : (
//                 <>
//                   {carData.map((car: IData, index: number) => (
//                     <div className="mb-3" key={index}>
//                       <div className="flex items-center space-x-3">
//                         <Checkbox id="car" className="border-gray-400" />
//                         <label
//                           htmlFor="car"
//                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                         >
//                           {car.name}
//                         </label>
//                       </div>
//                     </div>
//                   ))}
//                 </>
//               )}
//             </>

//             <button
//               onClick={() => setIsAdditionalFeature(true)}
//               className="text-links text-start  text-sm font-semibold my-2"
//             >
//               See all
//             </button>
//           </div>
    
//         </div>

//       </div>
//       <CustomModal
//         open={isAdditionalFeature}
//         onClose={() => setIsAdditionalFeature(false)}
//       >
//         <div className="w-screen flex items-center mx-auto justify-center h-[80vh] overflow-hidden">
//           <div className="bg-white p-6 rounded-[16px] w-[398px] mx-auto h-[342px] overflow-y-auto">
//             <div className="flex items-center mt-2 justify-between">
//               <p className="font-semibold text-2xl">More filters</p>
//               <div
//                 className="cursor-pointer"
//                 onClick={() => setIsAdditionalFeature(false)}
//               >
//                 <X size={24} color="#0A1429" />
//               </div>
//             </div>
//             {/* content */}
//             {/*  format*/}
//             <div className="w-full h-auto items-center justify-between  flex flex-col mt-4 ">
//               {/* checkbox */}
//               <>
//                 <div className="grid grid-cols-2 w-full gap-3">
//                   {filtersMore?.map((filters, index) => (
//                     <div key={index}>
//                       {index % 5 === 0 && <div className="w-full"></div>}
//                       <div className="mb-3">
//                         <div className="flex items-center space-x-3">
//                           {/* convert this to use shadcn checkbox */}
//                           <input
//                             type="checkbox"
//                             id={`filters-${index}`}
//                             className="accent-amber-600 scale-125 "
//                             checked={checkedFilters[index]}
//                             onChange={(e) => {
//                               const newCheckedFilters = [...checkedFilters];
//                               newCheckedFilters[index] = e.target.checked;
//                               setCheckedFilters(newCheckedFilters);
//                               setAnyChecked(
//                                 newCheckedFilters.some((filter) => filter)
//                               );

//                               // Update the selectedFeatures state
//                               if (e.target.checked) {
//                                 setSelectedFeatures((prev) => [
//                                   ...prev,
//                                   filters,
//                                 ]);
//                                 setSelectedBusinessNames([
//                                   ...selectedBusinessNames,
//                                   filters.name,
//                                 ]);
//                               } else {
//                                 setSelectedFeatures((prev) =>
//                                   prev.filter(
//                                     (feature) => feature.name !== filters.name
//                                   )
//                                 );
//                                 setSelectedBusinessNames(
//                                   selectedBusinessNames.filter(
//                                     (name) => name !== filters.name
//                                   )
//                                 );
//                               }
//                             }}
//                           />
//                           <label
//                             htmlFor={`filters-${index}`}
//                             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                           >
//                             {filters.name}
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             </div>
//             {/* button */}
//             <div className="w-full flex justify-end items-center">
//               <button
//                 onClick={handleApply}
//                 className={`px-[24px] h-[48px] flex text-base font-bold items-center justify-center text-white 
//                 ${anyChecked ? "bg-primary-20" : "bg-gray-100"} rounded-[12px]`}
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </div>
//       </CustomModal>
//       <CustomModal
//         open={isAdditionalInfoOpen}
//         onClose={() => setIsAdditionalInfoOpen(false)}
//       >
//         <div className="w-screen flex items-center mx-auto justify-center h-[80vh] overflow-hidden">
//           <div className="bg-white p-8 rounded-[16px] w-[880px] mx-auto h-full overflow-y-auto">
//             <div className="flex items-center mt-5 justify-between">
//               <p className="font-semibold text-2xl">More categories</p>
//               <div
//                 className="cursor-pointer"
//                 onClick={() => setIsAdditionalInfoOpen(false)}
//               >
//                 <X size={30} color="#0A1429" />
//               </div>
//             </div>
//             {/* content */}
//             {/*  format*/}
//             <div className="w-full h-[82.5%] items-center justify-between overflow-y-scroll  flex flex-col mt-6 p-3 ">
//               {/* checkbox */}
//               <>
//                 <>
//                   <div className="grid grid-cols-3 w-full gap-3">
//                     {businessData?.map((business, index) => (
//                       <div key={index}>
//                         {index % 24 === 0 && <div className="w-full"></div>}
//                         <div className="mb-3">
//                           <div className="flex items-center space-x-3">
//                             <Checkbox
//                               id={`business-${index}`}
//                               className="border-gray-400"
//                               checked={selectedBusinessNames.includes(
//                                 business.name
//                               )}
//                               onCheckedChange={(e) => {
//                                 // const target = e.target as HTMLInputElement;
//                                 if (e) {
//                                   setSelectedBusinessNames([
//                                     ...selectedBusinessNames,
//                                     business.name,
//                                   ]);
//                                   console.log(
//                                     "Updated selectedBusinessNames:",
//                                     selectedBusinessNames
//                                   );
//                                 } else {
//                                   setSelectedBusinessNames(
//                                     selectedBusinessNames.filter(
//                                       (name) => name !== business.name
//                                     )
//                                   );
//                                   console.log(
//                                     "Updated selectedBusinessNames:",
//                                     selectedBusinessNames
//                                   );
//                                 }
//                               }}
//                             />
//                             <label
//                               htmlFor={`business-${index}`}
//                               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                             >
//                               {business.name}
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               </>
//             </div>
//             {/* button */}
//             <div className="w-full flex justify-end items-center">
//               <button
//                 onClick={() => setIsAdditionalInfoOpen(false)}
//                 className="px-[24px] h-[48px] flex text-base font-bold items-center justify-center text-white bg-primary-20 rounded-[12px]"
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </div>
//       </CustomModal>
//     </aside>
//   );
// }
