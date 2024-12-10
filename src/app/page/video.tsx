"use client";
import { useEffect, useState } from "react";
import { VideoProps } from "../interface";

const Video: React.FC<VideoProps> = ({ title, description, videoUrl }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="my-8 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-xl h-[400px]">
      <h1 className="text-black text-2xl font-bold text-center mb-4">
        {title}
      </h1>
      <p className="text-center text-gray-700 mb-4">{description}</p>
      <div
        style={{ paddingBottom: "56.25%" }}
        className="relative overflow-hidden"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ height: "100%" }}
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
