"use client";
import { useEffect, useState } from "react";
import { baseData, handleSaveSystem } from "../utils";
import { InitDataInterface } from "../interface";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [invitation, setInvitation] = useState("");
  const [initData, setInitData] = useState<InitDataInterface>();
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const result = await baseData("data");
    setInitData(result);
  };

  useEffect(() => {
    fetchData();
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleSubmit = async () => {
    const customerData = initData?.Customer;
    const customerIndex = customerData?.findIndex(
      (item) => item.id === Number(invitation)
    );

    if (customerIndex !== undefined && customerIndex >= 0) {
      const data = await baseData("data");
      data.Customer[customerIndex].confirmed = true;
      await handleSaveSystem(data);

      setMessage("Xác nhận thành công!");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      setMessage("Mã mời không hợp lệ.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-black text-2xl font-bold mb-4 text-center">
          Nhập Mã Lời Mời
        </h1>
        <div
          className={`mb-4 text-center ${
            message.includes("thành công") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </div>
        <input
          type="text"
          placeholder="Nhập lời mời của bạn..."
          value={invitation}
          onChange={(e) => setInvitation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Xác Nhận tham dự
        </button>
      </div>
    </div>
  );
}
