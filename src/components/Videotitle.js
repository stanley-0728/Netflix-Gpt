import React from "react";

const Videotitle = () => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-Bold">Guntur Kaaram</h1>
      <p className="p-6 text-lg w-1/4 hidden md:inline-block">
        A man seeks explanations when his mother asks him to sign a document
        denying he is her son while she campaigns for office, years after she
        deserts him and marries again.
      </p>
      <div className=" flex gap-2 my-4 md:my-0">
        <button className="bg-white text-black py-1 px-3 md:py-4 md:px-12 text-xl  rounded-lg hover:bg-opacity-75">
          ▶ Play
        </button>
        <button className=" hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-75">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
