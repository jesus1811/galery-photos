import { useEffect, useState } from "react";
import { ImageContext } from "./ImageContext";
import { ImageState } from "./ImagesState";

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState(ImageState);
  useEffect(() => {
    const local = window.localStorage.getItem("images");
    if (local !== null) {
        setImages(JSON.parse(local));
    }
  }, ["images"]);
  return <ImageContext.Provider value={{ images, setImages }}>{children}</ImageContext.Provider>;
};
