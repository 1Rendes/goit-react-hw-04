/* eslint-disable react/prop-types */
const LoadMoreButton = ({ page, onClick }) => {
  const handlerLoadMore = () => {
    onClick(page);
  };
  return (
    <button type="button" onClick={handlerLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
