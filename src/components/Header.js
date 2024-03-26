import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("user.......");
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="absolute py-2 px-8 bg-gradient-to-b z-20 from-black flex justify-between w-full">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      ></img>
      {user && (
        <div className="pt-5 flex justify-between">
          <p className="text-white font-vold m-3">{user.displayName}</p>
          <button onClick={handleSignOut} className="font-vold text-white">
            {"Sign Out"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
