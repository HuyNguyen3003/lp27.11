import React from "react";
import Image from "next/image";
import { HeaderProps } from "@/app/interface/index";

interface HeaderPropsExtend extends HeaderProps {
  onSendClick: () => void;
  onDonateClick: () => void;
}

const Header: React.FC<HeaderPropsExtend> = ({
  mainImage,
  subImage,
  title,
  subtitle,
  date,
  month,
  onSendClick,
  onDonateClick,
}) => {
  return (
    <div className="w-[90%] mx-auto text-center p-6 shadow-lg relative">
      <div className="flex flex-col items-end mb-6">
        <span className="text-black font-bold text-lg">{title}</span>
        <span className="text-gray-700 text-sm mt-1">
          {subtitle} ({date}/{month})
        </span>
      </div>

      {/* Main Image */}
      <div className="relative w-full max-w-md mx-auto mb-4 mt-16">
        <Image
          src={mainImage}
          alt={title}
          layout="responsive"
          width={1}
          height={1}
          objectFit="cover"
        />
      </div>

      {/* Sub Image */}
      <div className="relative w-[28rem] h-[12rem] mx-auto -mt-20">
        <Image
          src={subImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button
          type="button"
          className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition duration-300"
          onClick={onSendClick}
        >
          Gửi lời chúc
        </button>
        <button
          type="button"
          className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300"
          onClick={() => (window.location.href = "/confirm")}
        >
          Xác nhận tham dự
        </button>
        <button
          type="button"
          className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
          onClick={onDonateClick}
        >
          Mừng cưới
        </button>
      </div>
    </div>
  );
};

export default Header;
