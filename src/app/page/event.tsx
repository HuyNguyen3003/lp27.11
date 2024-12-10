import React from "react";
import Image from "next/image";
import { EventProps } from "../interface";

const Event: React.FC<EventProps> = ({ title, message, events }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className=" text-black text-3xl font-bold text-center mb-4">
        {title}
      </h1>
      <p className="text-center text-gray-700 mb-8">{message}</p>
      {events.map((event, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center mb-6"
        >
          <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
            <Image
              src={event.imageUrl}
              alt={event.name}
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h2 className=" text-gray-600 text-xl font-semibold">
              {event.name}
            </h2>
            <p className="text-gray-500">{event.time}</p>
            <p className="text-gray-500 mb-4">{event.location}</p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Thêm vào lịch
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Xem bản đồ
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
