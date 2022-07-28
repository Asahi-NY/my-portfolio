import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export const Footer = () => {
  return (
    <div>
      <div className="m-auto flex max-w-[330px] items-center justify-between py-8">
        <a
          href="https://www.linkedin.com/in/yusuke-noguchi-97968b142/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
            <FaLinkedinIn />
          </div>
        </a>
        <a href="https://twitter.com/Asahi_YN" target="_blank" rel="noreferrer">
          <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
            <AiOutlineTwitter />
          </div>
        </a>
        <a href="https://github.com/Asahi-NY" target="_blank" rel="noreferrer">
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
      <div className="flex justify-center py-4">
        <Link href="/">
          <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
            <HiOutlineChevronDoubleUp className=" text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};
