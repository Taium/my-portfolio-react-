import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactWeather,
      demo: "https://www.ekshop.gov.bd/",
      code: "https://github.com/Taium",
    },
    {
      id: 2,
      src: reactParallax,
      demo: "https://beauti4me.com/",
      code: "https://beauti4me.com/",
    },
    {
      id: 3,
      src: navbar,
      demo: "https://github.com/Taium/Admin_panel-typescript_RTKQuery/blob/main/README.md/",
      code: "https://github.com/Taium/Admin_panel-typescript_RTKQuery",
    },
    {
      id: 4,
      src: reactSmooth,
      demo: "https://github.com/Taium/API-Nodejs-Mysql-task-rainer-technology",
      code: "https://github.com/Taium/API-Nodejs-Mysql-task-rainer-technology",
    },
    {
      id: 5,
      src: installNode,
      demo: "https://volunteer-network-taium.web.app/",
      code: "https://github.com/Taium/react-node-volunteer-network-CLIENT",
    },
    {
      id: 6,
      src: arrayDestruct,
      demo: "https://agency-taium.web.app/",
      code: "https://github.com/Taium/react-node-agency-client",
    },
  ];

  return (
    <div
      name="portfolio"
      className="pb-64 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-48"
              />
              <div className="flex items-center justify-center">
                <button
                
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                  
                </button>
                <button
                 src={demo}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
