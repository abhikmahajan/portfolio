"use client"

import { BookMarked, CircleUserRound, Contact, Home, Layers2, Moon, Sun } from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  

  return (
    <div className="fixed w-full z-[1000] bottom-6">
        <div className="max-w-72 lg:max-w-xl mx-auto px-4 py-3">
      <ul className="flex gap-5 lg:gap-8 justify-center items-center text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl p-3 bg-gradient-to-r from-white via-gray-100 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
        <li>
          <a href="#header">
            <Home className="h-5"/>
          </a>
        </li>
        <li>
          <a href="#about" className="flex items-center gap-2">
            <CircleUserRound className="h-5"/>
            <p className="hidden lg:flex">About</p>
          </a>
        </li>
        <li>
          <a href="#skills" className="flex items-center gap-2">
            <Layers2 className="h-5"/>
            <p className="hidden lg:flex">Skills</p>
          </a>
        </li>
        <li>
          <a href="#projects" className="flex items-center gap-2">
            <BookMarked className="h-5"/>
            <p className="hidden lg:flex">Work</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="flex items-center gap-2">
            <Contact className="h-5"/>
           <p className="hidden lg:flex">Contact</p>
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
