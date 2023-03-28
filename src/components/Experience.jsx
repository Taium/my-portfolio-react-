import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import redux from "../assets/redux.png";
import github from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
import nodejs from "../assets/nodejs.png";
import typescript from "../assets/typescript.png";
import redis from "../assets/redis.png";
import docker from "../assets/docker.png";
import mongo from "../assets/mongo.jpg";
import mysql from "../assets/mysql.png";
import microservice from "../assets/microservice.png";
import tailwind from "../assets/tailwind.png";
import Experiences from "./Experiences";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: gitlab,
      title: "Gitlab",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: typescript,
      title: "TypeScript",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: redis,
      title: "Redis",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: docker,
      title: "Docker",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: microservice,
      title: "Microservice",
      style: "shadow-gray-400",
    },
    {
      id: 15,
      src: mongo,
      title: "MongoDB",
      style: "shadow-gray-400",
    },
    {
      id: 16,
      src: mysql,
      title: "MySQL",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skill"
      className="pt-64   bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="pb-64 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-36  bg-gradient-to-b from-black to-gray-800 px-36">
      
          <p className="text-4xl text-white font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
        
      <Experiences/>
      </div>
    </div>
  );
};

export default Experience;
