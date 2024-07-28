/* eslint-disable react/prop-types */
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imagesData }) => {
  return (
    <ul className={css.imageList}>
      {imagesData.map((imagesData) => (
        <li className={css.imageItem} key={imagesData.id}>
          <ImageCard imagesData={imagesData} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
