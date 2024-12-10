import React, { useState } from "react";
import { handleSaveGuestbook } from "@/app/utils";

const Send: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSaveGuestbook({
      name,
      phone,
      message,
    });
    // setName("");
    // setPhone("");
    // setMessage("");
  };

  return (
    <div className="text-black  p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-black text-3xl font-bold text-center mb-4">
        Sổ Lưu Bút
      </h1>
      <p className="text-center text-gray-700 mb-6">
        Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám
        cưới của chúng tôi!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Nhập lời chúc của bạn"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Gửi lời chúc
        </button>
      </form>
    </div>
  );
};

export default Send;
