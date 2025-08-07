import React from "react";

const Navbar = () => {
  return (
    <nav className=" text-white flex mx-auto w-full  items-center px-40 py-2 justify-between bg-slate-800">
      <div className="logo">
        <h1 className="text-xl font-semibold">
          <span className="text-2xl font-bold text-white">&lt;Pass</span>
          <span className="text-2xl font-bold text-green-500">OP /&gt;</span>
        </h1>
      </div>

      <ul>
        <li className="flex items-center gap-4">
          <a
            className="hover:font-semibold transition-all duration-100"
            href="#"
          >
            Home
          </a>
          <a
            className="hover:font-semibold transition-all duration-100"
            href="#"
          >
            About
          </a>
          <a
            className="hover:font-semibold transition-all duration-100"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
