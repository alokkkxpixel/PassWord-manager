import React from "react";
import { VscGithubInverted } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className=" text-white flex mx-auto w-full  items-center md:px-30 px-5 py-3 justify-between bg-slate-800">
      <div className="logo">
        <h1 className="text-xl font-semibold">
          <span className="text-2xl font-bold text-white">&lt;Pass</span>
          <span className="text-2xl font-bold text-green-500">OP /&gt;</span>
        </h1>
      </div>

      <ul>
        <li className="flex items-center gap-4">
          <a
            className="hover:font-semibold flex items-center gap-5 text-2xl transition-all duration-100"
            href="https://github.com/alokkkxpixel/PassWord-manager"
          >
            <h1 className="text-white font-semibold">Soucre code here</h1>
            <VscGithubInverted />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
