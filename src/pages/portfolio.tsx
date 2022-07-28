import Image from "next/image";
import React from "react";
import portfolioImg from "../../public/assets/projects/portfolio.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="w-full">
      <div className="relative h-[50vh] w-screen">
        <div className="absolute top-0 left-0 z-10 h-[50vh] w-full bg-black/70" />
        <Image
          className="z-1 absolute"
          layout="fill"
          objectFit="cover"
          src={portfolioImg}
          alt="/"
        />
        <div className="absolute top-[70%] left-[50%] right-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white">
          <h2 className="py-2">My Portfolio</h2>
          <h3>React JS / Tailwind / Next JS</h3>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 py-8 md:grid-cols-5">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            このアプリはReact
            JSを使用して構築され、Github経由でVercelにデプロイされています。
            なお、スタイリングはTailwind
            CSSを使用しております。（今後更にカスタマイズ予定）
          </p>

          <a href="/" target="_blank" rel="noreferrer">
            <button className=" mt-4 mr-8 px-8 py-2">Demo</button>
          </a>
          <a
            href="https://github.com/Asahi-NY/my-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" mt-4 px-8 py-2">Code</button>
          </a>
        </div>
        <div className=" col-span-4 rounded-xl p-4 shadow-xl shadow-gray-400 md:col-span-1">
          <div className=" p-2">
            <p className="pb-2 text-center font-bold">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className=" flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className=" flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Next JS
              </p>
              <p className=" flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Github
              </p>
              <p className=" flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="cursor-pointer underline">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
