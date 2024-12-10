"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { AlbumProps } from "../interface";

const Album: React.FC<AlbumProps> = ({ title, description, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="my-8 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-3xl">
      <h1 className="text-black text-3xl font-bold text-center mb-4">
        {title}
      </h1>
      <p className="text-center text-gray-700 mb-6">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          images={images.map((src) => ({ url: src }))}
          startIndex={photoIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Album;
