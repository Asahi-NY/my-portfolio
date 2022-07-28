import React from "react";

export const About = () => {
  return (
    <div id="about" className=" flex w-full items-center p-2 py-16 md:h-screen">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className=" pt-4 font-bold text-xl uppercase tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">わたしについて</h2>
          <p className=" py-2 text-gray-600 ">
            / / I am not your average developer
          </p>
          <p className=" py-2 text-gray-600 ">
            I have spent the last 12 years in the fire service working as a
            professional firefighter/paramedic. I have always had a knack for
            technology and working with computers. In 2019 I started working
            with HTML and CSS to make some minor edits on a small business
            website that I was operating. What I thought was just a few small
            edits turned into a love for programming.
          </p>
          <p className=" py-2 text-gray-600 ">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          {/* <p className=" cursor-pointer py-2 text-gray-600 underline">
            Check out some of my latest projects.
          </p> */}
        </div>
        <div className=" m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-gray-400 duration-300 ease-in hover:scale-105">
          <img className=" rounded-xl" src="/assets/about.jpg" alt="/" />
        </div>
      </div>
    </div>
  );
};
