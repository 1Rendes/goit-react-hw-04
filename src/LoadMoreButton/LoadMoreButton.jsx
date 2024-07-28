import React from "react";

const LoadMoreButton = ({ page, totalPages, onClick }) => {
  const handlerLoadMore = () => {
    onClick();
  };
  return (
    <button type="button" onClick={handlerLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
