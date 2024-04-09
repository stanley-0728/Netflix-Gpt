import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlaying from "../utils/useNowPlaying";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGpt);
  useNowPlaying();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
        MainContainer
          VideoBackground
          VideoInfo
        SecondaryContainer
          MovieList*n
            MovieCards
      */}
    </div>
  );
};

export default Browse;
