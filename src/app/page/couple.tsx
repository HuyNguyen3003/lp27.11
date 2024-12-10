import React from "react";
import Image from "next/image";
import { CoupleProps } from "../interface";

const Couple: React.FC<CoupleProps> = ({ title, groom, bride }) => {
  return (
    <div className="my-8 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-3xl mx-auto">
      <h1 className="text-gray-700 text-3xl font-bold text-center mb-8">
        {title}
      </h1>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center w-full">
          <div className="w-64 h-64 mb-4 overflow-hidden rounded-full">
            <Image
              src={groom.imageUrl}
              alt="Chú Rể"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <div className="text-gray-700">Con ông: {groom.father}</div>
            <div className="text-gray-700">Con bà: {groom.mother}</div>
            <p className="text-gray-700 mt-2">{groom.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Đọc thêm
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-64 h-64 mb-4 overflow-hidden rounded-full">
            <Image
              src={bride.imageUrl}
              alt="Cô Dâu"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <div className="text-gray-700">Con ông: {bride.father}</div>
            <div className="text-gray-700">Con bà: {bride.mother}</div>
            <p className="text-gray-700 mt-2">{bride.description}</p>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              Đọc thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
