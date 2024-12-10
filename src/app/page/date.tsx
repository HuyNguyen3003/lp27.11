"use client";
import React, { useEffect, useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  differenceInSeconds,
  getDay,
} from "date-fns";
import { CalendarProps } from "../interface";

export const Calendar: React.FC<CalendarProps> = ({
  startDate,
  weddingDate,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    setIsClient(true);

    const interval = setInterval(() => {
      setElapsedTime(differenceInSeconds(new Date(), startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  if (!isClient) {
    return null;
  }

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(weddingDate),
    end: endOfMonth(weddingDate),
  });

  // Get the day of the week for the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const startDay = getDay(startOfMonth(weddingDate));

  return (
    <div className="my-8 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-3xl">
      <h1 className="text-black text-3xl font-bold text-center mb-6">Lịch</h1>

      <div className="text-center mb-4">
        <div className="text-black font-semibold">
          Tháng {format(weddingDate, "MM/yyyy")}
        </div>
        <div className="grid grid-cols-7 text-sm text-black mt-1">
          <span>T2</span>
          <span>T3</span>
          <span>T4</span>
          <span>T5</span>
          <span>T6</span>
          <span>T7</span>
          <span>CN</span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {/* Add empty divs to align the first day of the month */}
        {Array.from({ length: (startDay + 6) % 7 }).map((_, index) => (
          <div key={`empty-${index}`} className="p-3"></div>
        ))}
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`text-black p-3 border rounded text-center ${
              format(day, "yyyy-MM-dd") === format(weddingDate, "yyyy-MM-dd")
                ? "bg-green-300 font-semibold"
                : "bg-gray-100"
            }`}
          >
            {format(day, "dd")}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-black text-2xl font-semibold">
          Thời gian trôi qua
        </h2>
        <p className="text-black text-lg mt-2">
          {Math.floor(elapsedTime / (24 * 3600))} ngày,{" "}
          {Math.floor((elapsedTime % (24 * 3600)) / 3600)} giờ,{" "}
          {Math.floor((elapsedTime % 3600) / 60)} phút, {elapsedTime % 60} giây
        </p>
      </div>
    </div>
  );
};
