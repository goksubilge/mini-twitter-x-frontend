import wellcometwitter from "../Images/wellcometwitter.png";

import React from "react";
import Footer from "./Footer";

const Wellcome = () => {
  return (
    <div className="max-h-screen">
      <div className="flex flex-row items-center">
        <div className="max-w-[70%]">
          <img
            src={wellcometwitter}
            alt="wellcomeImage"
            className="max-h-auto"
          ></img>
        </div>
        <div className="">
          <h1>Happening Now</h1>
          <h2>Join Twitter Today</h2>
          <nav>
            <a href="/">Sign Up With Google</a>
            <a href="/">Sign Up With Apple</a>
            <a href="/">Sign Up With Phone or E-mail</a>
          </nav>

          <span>
            By singing up you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </span>
          <span>Already have an account_ Log in</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wellcome;
