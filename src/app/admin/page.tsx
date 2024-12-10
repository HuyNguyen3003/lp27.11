"use client";
import React, { useState, useEffect } from "react";
import { setClientCookie, getClientCookie, baseData } from "../utils/index";
import type { InitDataInterface, InitFormInterface } from "../interface";
import { logout } from "./common";
import Interface from "./interface";
import Customer from "./customer";
import Guestbook from "./guestbook";
import ManageImage from "./image";

const Page = () => {
  const [initData, setInitData] = useState<InitDataInterface>();
  const [initForm, setInitForm] = useState<InitFormInterface[]>([]);
  const [stateLogin, setStateLogin] = useState(false);
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [statePageAdmin, setStatePageAdmin] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const form = await baseData("form");
      setInitForm(form);

      const system = await baseData("data");
      setInitData(system);
      setIsClient(true);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const adminCookie = getClientCookie("admin");
    if (initData && initData.ADMIN_KEY) {
      setStateLogin(adminCookie === initData.ADMIN_KEY);
    }
  }, [initData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (initData && key === initData.ADMIN_KEY) {
      await setClientCookie("admin", initData.ADMIN_KEY);
      setStateLogin(true);
    } else {
      setMessage("Invalid key. Access denied.");
    }
  };

  const exportData = () => {
    const link = document.createElement("a");
    link.href = `/data.json`;
    link.download = "data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = async (file: File) => {
    if (file.type !== "application/json") {
      alert("Please upload a JSON file.");
      return;
    }

    try {
      // Đọc nội dung file JSON
      const fileContent = await file.text();
      const jsonData = JSON.parse(fileContent);

      console.log("JSON Data:", jsonData);
      // Bạn có thể xử lý dữ liệu JSON ở đây

      const response = await fetch("/api/system", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: jsonData }),
      });

      if (response.status === 200) {
        window.location.reload();
      } else {
        alert("Failed to upload file.");
      }

      console.log("Response:", response);
    } catch (error) {
      console.error("Error processing file:", error);
      alert("An error occurred while processing the file.");
    }
  };

  if (!isClient) {
    return null;
  }

  return stateLogin ? (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-100 via-blue-100 to-purple-100 text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-md">
        <h1 className="text-2xl font-extrabold">Admin Dashboard</h1>
      </header>

      <main className="flex-grow p-8">
        <div className="flex justify-around mb-8">
          <button
            className="bg-stone-500 text-white px-6 py-3 rounded-lg shadow hover:bg-stone-600 transition duration-300"
            onClick={() => setStatePageAdmin(1)}
          >
            Update Interface
          </button>
          <button
            className="bg-slate-500 text-white px-6 py-3 rounded-lg shadow hover:bg-slate-400 transition duration-300"
            onClick={() => setStatePageAdmin(4)}
          >
            Manage Image
          </button>
          <button
            className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-600 transition duration-300"
            onClick={() => setStatePageAdmin(3)}
          >
            Guestbook
          </button>
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300"
            onClick={() => setStatePageAdmin(2)}
          >
            Manage Customer
          </button>
          <button
            onClick={() => exportData()}
            className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-600 transition duration-300"
          >
            Export Data
          </button>

          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Import Data</h3>
            <input
              type="file"
              className="mb-2"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
            <button
              onClick={() => selectedFile && handleUpload(selectedFile)}
              disabled={!selectedFile}
              className={`bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300 ${
                !selectedFile ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Upload
            </button>
          </div>

          <button
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition duration-300"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          {statePageAdmin === 1 ? (
            <Interface
              header={initData?.header}
              video={initData?.video}
              album={initData?.album}
              date={initData?.date || {}}
              store={initData?.store}
              about={initData?.about}
              event={initData?.event}
              couple={initData?.couple}
              subcouple={initData?.subcouple}
              donate={initData?.donate}
              footer={initData?.footer}
            />
          ) : statePageAdmin === 2 ? (
            <Customer Customer={initData?.Customer} />
          ) : statePageAdmin === 3 ? (
            <Guestbook data={initForm} />
          ) : (
            <ManageImage />
          )}
        </div>
      </main>

      <footer className="bg-gray-200 text-center p-6 shadow-inner">
        <p>&copy; {new Date().getFullYear()} HuyNguyen. All rights reserved.</p>
      </footer>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300 w-full"
        >
          Submit
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default Page;
