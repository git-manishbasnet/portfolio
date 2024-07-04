import React from "react";
import cpp from "../../public/c++Logo.png";
import reactlogo from "../../public/reactLogo.png";
import jslogo from "../../public/JsLogo.png";
import clogo from "../../public/CLogo.png";

export const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      logo: cpp,
      name: "C++",
    },
    {
      id: 2,
      logo: jslogo,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: reactlogo,
      name: "React",
    },
    {
      id: 4,
      logo: clogo,
      name: "C",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl  mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">portfolio</h1>
        <span className="underline font-semibold">My Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItems.map(({ logo, name, id }) => (
            <div
              key={id}
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                alt=""
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              />
              <div>
                <div className=" px-2 font-bold text-xl mb-2">{name}</div>
                <p className="p-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
