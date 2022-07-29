import Image from "next/image";
import React from "react";

export const Skills = () => {
  return (
    <div id="skills" className=" w-full px-2 py-20">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <p className=" text-xl font-bold uppercase tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">できること</h2>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
        <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/html.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/css.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/javascript.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/Typescript_logo_2020.svg.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/react.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/tailwind.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/github1.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/nextjs.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>Next</h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/figma.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>Figma</h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-2 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/skills/XD.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="mt-2">
                <h3>Adobe XD</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
