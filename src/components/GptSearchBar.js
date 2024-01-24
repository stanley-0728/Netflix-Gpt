import { React, useRef } from "react";
import lang from "../utils/LangConstants";
import { useSelector, useDispatch } from "react-redux";
import { toggleSuggestions } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGptSearch = () => {
    dispatch(toggleSuggestions());
  };

  return (
    <div className=" pt-[40%] md:pt-[10%]  flex justify-center">
      <form
        className=" bg-black grid grid-cols-12 md:w-1/2 w-full "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button
          onClick={handleGptSearch}
          className="my-3 mr-2 md:m-4 md:px-4 md:py-2 col-span-3 bg-red-800 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
