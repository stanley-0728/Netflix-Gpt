import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice.js";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const handleButton = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANetflix-avatar.png&psig=AOvVaw0PYYYWgBP_nEbNVPZxtduI&ust=1712584772456000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCT7dKhsIUDFQAAAAAdAAAAABAE",
          })
            .then(() => {
              // Profile updated!
              // .
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  const toggleHandler = () => {
    setIsSignIn(!isSignIn);
    email.current.value = null;
    password.current.value = null;

    setErrorMessage(null);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          alt="banner"
          className=" h-[900px] w-screen  bg-cover bg-center object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute   w-11/12 sm:w-6/12  lg:w-4/12
         bg-black bg-opacity-75 my-32 mx-auto left-0 right-0 p-20 rounded-lg text-white"
      >
        <h1 className="font-bold text-3xl pb-4 text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Enter User Name"
            className={`p-4 my-2 w-full rounded-md bg-transparent ${
              errorMessage?.email ? "border-red-700" : "border-white"
            }  `}
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter email"
          className={`p-4 my-2 w-full rounded-md bg-transparent ${
            errorMessage?.email ? "border-red-700" : "border-white"
          }  `}
        />
        {errorMessage?.email && (
          <p className="text-red-600 py-2 text-xl">{errorMessage?.email}</p>
        )}
        <input
          type="password"
          ref={password}
          placeholder="Enter password"
          className={`p-4 my-4 w-full bg-transparent border ${
            errorMessage?.password ? "border-red-700" : "border-white"
          }  `}
        />
        {errorMessage?.password && (
          <p className="text-red-600 py-2 text-xl">{errorMessage?.password}</p>
        )}

        <button className="bg-red-700 py-4 my-4 w-full " onClick={handleButton}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 text-center">
          {isSignIn ? "New to Netflix?" : "Already registered?"}{" "}
          <span className="text-white cursor-pointer " onClick={toggleHandler}>
            {isSignIn ? "Sign up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
