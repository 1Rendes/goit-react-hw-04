/* eslint-disable react/prop-types */
import css from "./ImageCard.module.css";

const ImageCard = ({ imagesData }) => {
  return (
    <div>
      <img
        className={css.image}
        src={imagesData.urls.small}
        alt={imagesData.alt_description}
      />
    </div>
  );
};

export default ImageCard;
