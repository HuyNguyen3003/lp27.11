/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { InitFormInterface, InitDataInterface } from "../interface";

function setClientCookie(name: string, value: string) {
  Cookies.set(name, value, { expires: 3, path: "/" });
}

function getClientCookie(name: string) {
  return Cookies.get(name);
}

const baseData = async (fileName: string) => {
  const path = `/${fileName}.json`;
  const file = await fetch(path);
  const data = await file.json();
  return data;
};

const handleSaveSystem = async (data: InitDataInterface) => {
  await fetch("/api/system", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
};

const handleSaveGuestbook = async (data: InitFormInterface) => {
  await fetch("/api/guesbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
};

const handleSaveDesign = async (field: string, data: any) => {
  const result = await fetch("/api/design", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data, field }),
  });
  return result.json();
};

const fetchFileList = async () => {
  const response = await fetch("/api/image", {
    method: "GET",
  });
  return response.json();
};
const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/image", {
    method: "POST",
    body: formData,
  });

  return response.json();
};
const deleteFile = async (fileName: string) => {
  const response = await fetch(
    `/api/image?fileName=${encodeURIComponent(fileName)}`,
    {
      method: "DELETE",
    }
  );

  return response.json();
};

export {
  fetchFileList,
  uploadFile,
  deleteFile,
  baseData,
  setClientCookie,
  getClientCookie,
  handleSaveSystem,
  handleSaveGuestbook,
  handleSaveDesign,
};
