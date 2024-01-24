import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
const GptSearchPage = () => {
  const showSuggestions = useSelector((store) => store.gpt.showSuggestions);
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          alt="banner"
          className=" h-[900px] w-screen  bg-cover bg-center object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div>
        <GptSearchBar />
        {showSuggestions && <GptMovieSuggestions />}
      </div>
    </>
  );
};

export default GptSearchPage;
