"use client";
import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { FloatingNav } from "../ui/floating-navbar";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { GiSkills  } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { BiSolidPhoneCall } from "react-icons/bi";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
   const navItems = [
     {
       name: "Profile",
       link: "/#about",
       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white " />,
      },
      {
        name: "Work Experience",
        link: "#proExp",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white " />,
      }, 
      {
      name: "Projects",
      link: "#projects",
      icon: (
        <TfiWrite className="h-4 w-4 text-neutral-500 dark:text-white " />
        ),
      },
      {
        name: "Skills",
        link: "#skills",
        icon: (
          <GiSkills className="h-4 w-4 text-neutral-500 dark:text-white " />
        ),
      },
      {
        name: "Contact",
        link: "#contact",
        icon: (
          <BiSolidPhoneCall className="h-4 w-4 text-neutral-500 dark:text-white " />
        ),
      },
  ];
   return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
// 