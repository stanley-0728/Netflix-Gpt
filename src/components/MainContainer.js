import React from "react";
import Videotitle from "./Videotitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      <Videotitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
