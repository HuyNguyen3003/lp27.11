import React, { useState, useEffect } from "react";
import { deleteFile, fetchFileList, uploadFile } from "../utils";
import Image from "next/image";

export default function ManageImage() {
  const [files, setFiles] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const result = await fetchFileList();
      setFiles(result.files || []);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      const response = await uploadFile(selectedFile);
      if (response.message) {
        loadFiles();
        setSelectedFile(null);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleDelete = async (fileName: string) => {
    try {
      const response = await deleteFile(fileName);
      if (response.message) {
        loadFiles();
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const copyFileName = (fileName: string) => {
    navigator.clipboard.writeText(fileName).then(() => {
      alert(`Copied: ${fileName}`);
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Images</h1>

      <div className="mb-6 flex items-center justify-center space-x-4">
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          onClick={handleUpload}
          disabled={!selectedFile}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-300"
        >
          Upload
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Image List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {files.map((fileName) => (
          <li
            key={fileName}
            className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-gray-50"
          >
            <Image
              src={`/image/${fileName}`}
              alt={fileName}
              width={160}
              height={160}
              className="object-cover w-full"
            />
            <div className="p-2 text-center">
              <button
                onClick={() => copyFileName(fileName)}
                className="text-sm text-blue-500 hover:underline"
              >
                Copy File Name
              </button>
              <button
                onClick={() => handleDelete(fileName)}
                className="mt-2 px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
