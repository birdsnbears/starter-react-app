import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="py-12 px-8 -mx-6 bg-badgebg bg-opacity-25 backdrop-blur-sm drop-shadow 
    md:py-20
    lg:py-24 lg:sticky lg:top-0 lg:bottom-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between"
    >
      <div className="lg:flex lg:flex-col">
        <a href="/" className="text-4xl font-bold sm:text-5xl mx-2">
          Louis Chu
        </a>
        <hr className="my-4 ml-0 border-2 rounded border-white" />
        <div className="flex flex-col text-lg font-medium sm:text-xl mx-2">
          <h2 className="">Full Stack Web Developer</h2>
          <h2 className="">Unity Game Developer</h2>
          <h2 className="">
            Pun En
            <span className="text-green-200">chu</span>
            siast
          </h2>
        </div>
        <div className="text-base font-normal max-w-xs">
          <hr className="my-2 h-0.5 border-[1px] rounded border-white" />
          <p className="mx-2">I transform ideas into engaging experiences from beginning to end.</p>
        </div>
        {/* <nav className="nav hidden lg:block">
          <div className="mt-16 w-max">
            <a className="group flex items-center py-3" href="#about">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
            <a className="group flex items-center py-3" href="#experience">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Experience
              </span>
            </a>
            <a className="group flex items-center py-3" href="#games">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Games
              </span>
            </a>
          </div>
        </nav> */}
      </div>
      <div id="social-links" className="flex flex-row justify-start items-center ml-1 mt-8">
        <FaLinkedin className="mr-5 text-3xl" />
        <FaGithub className="mr-5 text-3xl" />
      </div>
    </div>
  );
};

export default Banner;
