import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "/public/manish.jpg";

export const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl  mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="order-2 md:order-1 md:w-1/2 mt-12 md:mt-24 space-y-2">
            <span className="text-xl">Welcome to my website</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="whitespace-nowrap">Hello, I'm a </h1>
              <ReactTyped
                className="text-blue-700"
                strings={["Developer", "Programmer", "Designer", "Student"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md: text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              enim reiciendis necessitatibus beatae aspernatur officiis, totam
              tenetur non, ipsam quia dolorem blanditiis culpa?
            </p>
            <br />
            {/*Social media icons*/}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="blank">
                      {" "}
                      <FaFacebook className="text-2xl cursor-pointer " />
                    </a>
                  </li>
                  <li>
                    <a href="https://web.whatsapp.com/" target="blank">
                      {" "}
                      <FaWhatsappSquare className="text-2xl cursor-pointer " />
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/" target="blank">
                      {" "}
                      <SiGmail className="text-2xl cursor-pointer " />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h1 className="font-bold">Working on</h1>
                <ul className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boarder-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boarder-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boarder-[2px]" />
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 mt-8 md:w-1/2 md:ml-48 md:mt-20">
            <img
              className="rounded-full md:w-[450px] md:h-[450px]"
              src={pic}
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};
