/* eslint-disable react/prop-types */
import css from "./ImageCard.module.css";

const ImageCard = ({ imageData }) => {
  return (
    <div>
      <img
        className={css.image}
        src={imageData.urls.small}
        alt={imageData.alt_description}
      />
    </div>
  );
};

export default ImageCard;
