import React from "react";

interface FooterProps {
  message: string;
  names: string;
}

const Footer: React.FC<FooterProps> = ({ message, names }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full text-center">
      <p className="text-lg text-gray-700 mb-2">{message}</p>
      <p className="text-lg text-gray-700">{names}</p>
    </div>
  );
};

export default Footer;
