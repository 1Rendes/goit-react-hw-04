/* eslint-disable react/prop-types */
import css from "./ImageModal.module.css";

const ImageModal = ({ modalData, onClose }) => {
  console.log(modalData);

  const HandleClose = (e) => {
    if (e.target.className.includes("backdrop")) {
      onClose(e.target);
    }
  };

  return (
    <div className={css.backdrop} onClick={HandleClose}>
      <div className={css.modal}>
        <img
          className={css.image}
          src={modalData.urls.regular}
          alt={modalData.alt_description}
        />
        <div className={css.descriptionBlock}>
          <p className={css.description}>
            <b>Description:</b> {modalData.description}
          </p>
          <p className={css.description}>
            <b>Author:</b> {modalData.user.username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
