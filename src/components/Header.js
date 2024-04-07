import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="flex  justify-between px-5 py-2 absolute bg-gradient-to-b from-black w-screen z-10 ">
      <div className="w-40 md:w-48">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className=""
          alt="NetflixGPT"
        />
      </div>

      <div className=" my-4 text-white rounded-sm flex">
        {user && (
          <div>
            {/* {GPTSearchStatus &&
              <select name="" onChange={handleLangChange} id="" className="sm:px-2 px-1 capitalize py-0.5 mr-4 text-sm outline-none rounded bg-cyan-950  text-cyan-600  border-cyan-600 border-2">
                {SUPPORTED_LAGUAGES.map((data) => (
                  <option value={data} key={data} className="capitalize">{data}</option>

                ))}

              </select>
            } */}
            {/* <button
              className="px-2 py-1 bg-cyan-950 text-cyan-600 border-cyan-600 border-2 mr-4 rounded text-sm sm:font-bold "
              onClick={handleGPTBtn}
            >
              {GPTSearchStatus ? "Home" : "GPT Search"}
            </button> */}
            <button
              className="px-2 py-1 bg-red-600 text-white mr-4 rounded text-sm sm:font-bold "
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
