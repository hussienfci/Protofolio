"use client";
import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";
import { FloatingNav } from "../ui/floating-navbar";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

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
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
   return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
