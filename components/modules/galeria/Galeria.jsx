import { useContext } from "react";
import { app } from "../../../services/firebase.service";
import { ImageContext } from "../../../store/images/ImageContext";
import { FormatURL } from "../../../utils/FormatURL";
import { File } from "../../common";
import styles from "./styles.module.scss";

export const Galeria = () => {
  const { images, setImages } = useContext(ImageContext);

  const handleAddImage = async (e) => {
    const file = e.target.files[0];
    const path = app.storage().ref().child(file.name);
    await path.put(file);
    setImages([...images, FormatURL(file.name)]);
    localStorage.setItem("images", JSON.stringify([...images, FormatURL(file.name)]));
  };
  return (
    <>
      <h1 className={styles.title}>Galeria de imagenes</h1>
      <File onChange={handleAddImage}>Agregar</File>
      <div className={styles.content}>
        {images?.map((image, index) => {
          return <img key={index} className={styles.image} src={image} alt="ejemplo" />;
        })}
      </div>
    </>
  );
};
