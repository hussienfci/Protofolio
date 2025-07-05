import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,

} from "@tabler/icons-react";
import { FaLinkedin } from "react-icons/fa";

export function FloatingDockDemo() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/hussien-mohamed-b2b82720a/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/hussienfci",
    },
  ];
  return (
    <div className="flex justify-center h-[7rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  );
}
