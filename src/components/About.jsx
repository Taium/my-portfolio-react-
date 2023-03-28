import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" pb-64 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a software developer with a Bachelor’s degree in Computer Science 
          & Engineering and 1 year of software development experience. I am
          experienced in frontend technologies like HTML5, CSS3 and JavaScript.
          Also, I have developed and maintained various web applications and I
          have exceptional knowledge of JavaScript frameworks such as Node js
          and React
        </p>

        
      </div>
    </div>
  );
};

export default About;
