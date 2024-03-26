// rafce

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import validateInputs from "../utils/validateInputs";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const phoneNumber = useRef(null);
  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = validateInputs(
      email.current.value,
      password.current.value,
      name?.current?.value,
      phoneNumber?.current?.value
    );

    // console.log("message " + message);
    setErrorMessage(message);
    if (message) return;
    if (!isLoginPage) {
      // Signed up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("Signed UP");
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
          })
            .then((user) => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " - " + errorCode);
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // ...
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("code :" + errorCode + "  " + errorMessage);
        });
    }
  };
  const toggleIsLoginState = () => {
    setIsLoginPage(!isLoginPage);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form className="absolute md:w-3/12 w-6/12 p-5 mx-auto my-48 bg-black right-8 left-0 text-white bg-opacity-80">
        <h1 className=" text-4xl font-semibold mb-6 mx-8 mt-10">
          {isLoginPage ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginPage && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 mx-8 w-10/12 bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 m-2 mx-8 w-10/12 bg-gray-800"
        />
        {!isLoginPage && (
          <input
            ref={phoneNumber}
            type="tel"
            placeholder="Phone Number"
            className="p-2 m-2 mx-8 w-10/12 bg-gray-800"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-4 mx-8 w-10/12  bg-gray-800"
        />

        <p className="text-red-600 font-bold ml-8">{errorMessage}</p>
        <button
          className="px-4 py-2 ml-8 mt-8 rounded-md m-6 bg-red-600 w-10/12 block mx-auto "
          onClick={handleButtonClick}
        >
          {isLoginPage ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleIsLoginState} className=" my-10 ml-5 cursor-pointer">
          {isLoginPage ? "New User ? Sign Up" : "Has Account? Sing In"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
