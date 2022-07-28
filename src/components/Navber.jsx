import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/portfolio" ||
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed z-[100] h-20 w-full shadow-xl"
          : "fixed z-[100] h-20 w-full"
      }
    >
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <Link href="/">
          {/* <Image src="/assets/navLogo.png" alt="/" width="125" height="50" /> */}
          <h3
            className=" cursor-pointer hover:border-b hover:opacity-70"
            style={{ color: `${linkColor}` }}
          >
            Yusuke Noguchi
          </h3>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className=" ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            {/* <Link href="/#contact">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link> */}
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className=" md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "fixed left-0 top-0 h-screen w-full bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:hidden md:w-[45%]"
              : "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
          }
        >
          <div className=" flex w-full items-center justify-between">
            {/* <Link href="/">
              <Image
                src="/assets/navLogo.png"
                alt="/"
                width="87"
                height="35"
              ></Image>
            </Link> */}
            <div
              onClick={handleNav}
              className=" cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
          {/* <div className="my-4 border-b border-gray-300"></div> */}
          <div className=" flex flex-col py-4">
            <ul className=" uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Projects
                </li>
              </Link>
              {/* <Link href="/#contact">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Contact
                </li>
              </Link> */}
            </ul>
            <div className=" pt-4">
              <p className=" uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
            </div>
            <div className=" my-4 flex w-full items-center justify-between sm:w-[80%]">
              <a
                href="https://www.linkedin.com/in/yusuke-noguchi-97968b142/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 hover:scale-105">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://twitter.com/Asahi_YN"
                target="_blank"
                rel="noreferrer"
              >
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 hover:scale-105">
                  <AiOutlineTwitter />
                </div>
              </a>
              <a
                href="https://github.com/Asahi-NY"
                target="_blank"
                rel="noreferrer"
              >
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 hover:scale-105">
                  <FaGithub />
                </div>
              </a>
              <Link href="/#contact">
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 hover:scale-105">
                  <AiOutlineMail />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
