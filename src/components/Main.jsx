import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="home" className="w-full pt-32 text-center">
      <div className="mx-auto h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <h1 className=" py-4 text-gray-700">
            Hi, I'm <span className=" text-[#5651e5]">Yusuke</span>
          </h1>
          <h1 className=" py-2 text-gray-700">A Front-End Web Developer</h1>
        </div>
        <p className="m-auto max-w-[70%] py-4 text-gray-600">
          アクセスありがとうございます！
        </p>
        <div className="m-auto flex max-w-[330px] items-center justify-between py-4">
          <a
            href="https://www.linkedin.com/in/yusuke-noguchi-97968b142/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://twitter.com/Asahi_YN"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
              <AiOutlineTwitter />
            </div>
          </a>
          <a
            href="https://github.com/Asahi-NY"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
              <FaGithub />
            </div>
          </a>
          <Link href="/#contact">
            <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
              <AiOutlineMail />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
