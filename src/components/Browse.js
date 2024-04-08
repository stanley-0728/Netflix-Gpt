import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  const user = useSelector((store) => store.user);

  return (
    <div>
      <Header />
      {/* 
        MainContainer
          VideoBackground
          VideoInfo
        SecondaryContainer
          MovieList*n
            MovieCards
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
