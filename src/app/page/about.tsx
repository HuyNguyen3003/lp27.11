import React from "react";
import Image from "next/image";
import { AboutProps } from "../interface";

const About: React.FC<AboutProps> = ({ title, messages, imageUrl }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto text-center">
      <h1 className="text-black text-3xl font-bold mb-4">{title}</h1>
      <div className="flex flex-col items-center">
        <div className="w-full md:w-1/2">
          {messages.map((message, index) => (
            <p key={index} className="text-gray-700 mb-2">
              {message}
            </p>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-4">
          <Image
            src={imageUrl}
            alt="About Image"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
