import React from "react";
import { CiLinkedin } from "react-icons/ci";

import { PiGithubLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray text-black">
      <div className="container py-12 text-center space-y-4 flex justify-between items-center">
        <div className="text-[14px] ">
          <span className="opacity-70"> Created by</span>{" "}
          <Link
            target="_blank"
            to="https://hayatul.vercel.app/"
            className="text-primary font-bold"
          >
            Hayatul Islam
          </Link>
        </div>
        <div className="flex justify-center text-[24px] space-x-3">
          <Link
            className="hover:text-primary transform delay-100 duration-200"
            target="_blank"
            to="https://github.com/hayatul-islam"
          >
            <PiGithubLogo />
          </Link>
          <Link
            className="hover:text-primary transform delay-100 duration-200"
            target="_blank"
            to="https://www.linkedin.com/in/hayatul-islam"
          >
            <CiLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
