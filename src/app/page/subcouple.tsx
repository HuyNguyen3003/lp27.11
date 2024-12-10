import React from "react";
import Image from "next/image";
import { SubCoupleProps } from "../interface";

const SubCouple: React.FC<SubCoupleProps> = ({
  title,
  bridesmaid,
  groomsman,
}) => {
  return (
    <div className="my-8 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-3xl">
      <h1 className="text-black text-3xl font-bold text-center mb-8">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:w-1/2 mb-8 md:mb-0">
          <div className="w-48 h-48 mb-4 overflow-hidden rounded-full">
            <Image
              src={bridesmaid.imageUrl}
              alt={bridesmaid.name}
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <p className="text-black text-lg font-semibold">
              {bridesmaid.name}
            </p>
            <p className="text-gray-700 mt-2">{bridesmaid.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <div className="w-48 h-48 mb-4 overflow-hidden rounded-full">
            <Image
              src={groomsman.imageUrl}
              alt={groomsman.name}
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <p className="text-black text-lg font-semibold">{groomsman.name}</p>
            <p className="text-gray-700 mt-2">{groomsman.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCouple;
