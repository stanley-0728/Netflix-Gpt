import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "./movieSlice";
const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlaying = () => {
    fetch("https://api.tvmaze.com/schedule")
      .then((response) => {
        if (response.ok) {
          console.log("reponse ok", response.ok);
          return response.json();
        } else {
          console.log("response status", response.status);
          throw new Error(response.status);
        }
      })
      .then((json) => {
        console.log(json);
        dispatch(addNowPlaying(json));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};
export default useNowPlaying;
