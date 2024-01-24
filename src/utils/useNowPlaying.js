import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "./movieSlice";
const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movie.nowPlaying);
  const getNowPlaying = () => {
    fetch("https://api.tvmaze.com/schedule")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((json) => {
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
