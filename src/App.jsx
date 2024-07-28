/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import { Circles } from "react-loader-spinner";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
export let query = "";

const App = () => {
  const [imagesData, setImagesData] = useState([]);
  const [loader, setLoader] = useState(false);
  let currentPage = 1;
  let totalPages = 1;
  const onSearch = (query, page) => {
    async function fetchImages(query, page) {
      if (query === "") {
        toast.error("Please fill the request");
        return;
      }
      setLoader(true);
      const params = {
        client_id: "JWj_bCNUx3Fd2nBL7E1nsdRQrLZyjwxfSxU1LEDU88c",
        query: query,
        page: 1,
        per_page: 12,
      };
      if (page) {
        params.page = page;
      }
      try {
        const responce = await axios.get(
          `https://api.unsplash.com/search/photos`,
          { params }
        );
        if (responce.data.results.length === 0) {
          toast.error("There is no matches to yout request. Try again!");
          setLoader(false);
          return;
        }
        if (params.page !== 1) {
          setImagesData((prevData) => [...prevData, ...responce.data.results]);
        } else {
          console.log(responce);
          currentPage = 1;
          totalPages =
            responce.headers["x-total"] / responce.headers["x-per-page"];
          setImagesData(responce.data.results);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setLoader(false);
      }
    }
    fetchImages(query, page);
  };

  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <SearchBar onSearch={onSearch} />

      {loader && (
        <Circles
          wrapperStyle={{ justifyContent: "center" }}
          height="80"
          width="80"
          color="#000000"
          ariaLabel="circles-loading"
          wrapperClass=""
          visible={true}
        />
      )}
      {imagesData.length > 0 && <ImageGallery imagesData={imagesData} />}
      <LoadMoreButton
        onClick={onSearch}
        page={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default App;
