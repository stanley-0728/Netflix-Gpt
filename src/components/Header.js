import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/UserSlice.js";
import { FaUserTie } from "react-icons/fa";
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { SUPPORTED_LANG } from "../utils/constants.js";
import { changeLang } from "../utils/configSlice.js";
const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGpt);
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);
  const handleGpt = () => {
    console.log("hi");
    dispatch(toggleGptSearchView());
  };
  const handleLang = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="absolute flex-col bg-gradient-to-b from-black top-0 w-full h-20 z-50 flex justify-between ">
      <div className="px-8 py-4">
        <img
          className="w-[130px] md:[200px]"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
      </div>
      {user && (
        <div className="m-4  -z-2 absolute right-10 ">
          <div className="flex gap-2 ">
            {showGptSearch && (
              <select
                className="p-0 w-15 m-2 bg-gray-700 text-white"
                onChange={handleLang}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option value={lang.identifier} key={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGpt}
              className="px-2 py-2 mx-2 hidden md:block bg-purple-800 md:me-0  text-white rounded-lg"
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <button
              onClick={handleMenu}
              type="button"
              className=" text-sm bg-red-700 rounded-full md:me-0 px-2 py-2 text-white"
            >
              <FaUserTie className="text-3xl text-white-400" />
            </button>
          </div>
          {showMenu && (
            <div
              className="  my-2 list-none bg-gray-600 divide-y divide-gray-400 rounded-lg shadow-lg "
              id="user-dropdown"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">
                  {user?.displayName}
                </span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  {user?.email}
                </span>
              </div>
              <ul class="py-2">
                <li
                  onClick={handleGpt}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-transparent md:hidden
                  dark:hover:bg-gray-500 dark:text-gray-200 dark:hover:text-white"
                >
                  GPT Search
                </li>
                <li
                  onClick={handleLogOut}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-transparent
                  dark:hover:bg-gray-500 dark:text-gray-200 dark:hover:text-white"
                >
                  Log out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
