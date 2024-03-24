// rafce
import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const handleClick = () => {
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
      <form className="absolute md:w-3/12 w-6/12 p-5 mx-auto my-56 bg-black right-8 left-0 text-white bg-opacity-80">
        <h1 className=" text-4xl font-semibold mb-6 mx-8 mt-10">
          {isLoginPage ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginPage && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 mx-8 w-10/12 bg-gray-800"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 m-2 mx-8 w-10/12 bg-gray-800"
        />
        {!isLoginPage && (
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-2 m-2 mx-8 w-10/12 bg-gray-800"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-4 mx-8 w-10/12  bg-gray-800"
        />
        <button className="px-4 py-2 ml-8 mt-8 rounded-md m-6 bg-red-600 w-10/12 block mx-auto ">
          {isLoginPage ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleClick} className=" my-10 ml-5 cursor-pointer">
          {isLoginPage ? "New User ? Sign Up" : "Has Account? Sing In"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
