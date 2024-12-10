"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DetailStore, StoreProps } from "../interface";

const Store: React.FC<StoreProps> = ({ title, description, storyItem }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-black text-3xl font-bold text-center mb-4">
        {title}
      </h1>
      <p className="text-center text-gray-700 mb-8">{description}</p>
      <div className="flex flex-col gap-6 relative">
        {storyItem.map((item: DetailStore, index: number) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg bg-gray-100 w-full relative"
          >
            <div className="p-4">
              <p className="text-sm text-black">{item.time}</p>
              <h2 className="text-black text-xl font-semibold mt-2">
                {item.title}
              </h2>
              <p className="text-gray-700 mt-2">{item.detail}</p>
            </div>
            <Image
              src={item.srcImage}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-auto"
              layout="responsive"
            />
            {index < storyItem.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-6 w-0.5 bg-gray-400"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
