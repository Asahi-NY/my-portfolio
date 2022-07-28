import React from "react";
import { ProjectItem } from "src/components/ProjectItem";
import portfolioImg from "../../public/assets/projects/Myportfolio.png";
import propertyImg from "../../public/assets/projects/property.jpg";
import cryptoImg from "../../public/assets/projects/crypto.jpg";
import netflixImg from "../../public/assets/projects/netflix.jpg";
import twitchImg from "../../public/assets/projects/twitch.jpg";

export const Projects = () => {
  return (
    <div id="projects" className=" w-full py-4">
      <div className=" mx-auto max-w-[1240px] px-2 py-16">
        <p className="text-xl font-bold uppercase tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">つくったもの</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="My Portfolio"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio"
            tech="React JS"
          />
          {/* <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="React JS"
          /> */}
          {/* <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          /> */}
        </div>
      </div>
    </div>
  );
};
