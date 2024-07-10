import React from "react";
import pic from "/manish.jpg"; // Files in the public directory are served at the root path.
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <div className="max-w-screen-3xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16 ">
        <div className="flex space-x-2">
          <img src={pic} alt="" className="h-12 w-12 rounded-full" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Manish 
            <p className="text-sm">Engineering Student</p>
          </h1>
        </div>
        {/*Desktop navbar*/}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ text, id }) => {
              return (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <ImCross size={24} /> : <IoMdMenu size={24} />}
          </div>
        </div>
      </div>

      {/*Mobile Navbar*/}
      {menu ? (
        <div className="bg-white   ">
          <ul className="md:hidden h-screen flex flex-col items-center text-xl justify-center space-y-4 ">
            {navItems.map(({ text, id }) => {
              return (
                <li
                  key={id}
                  className="hover:scale-105 duration-200  font-semibold cursor-pointer"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
