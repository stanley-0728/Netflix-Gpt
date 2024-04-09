import React from "react";
import lang from "../utils/LangConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%]  flex justify-center">
      <form className=" bg-black grid grid-cols-12 w-1/2">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button className="m-4 px-4 py-2 col-span-3 bg-red-800 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;