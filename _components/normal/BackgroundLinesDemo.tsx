import React from "react";
import { BackgroundLines } from "../ui/background-lines";

export function BackgroundLinesDemo({children}) {
  return (
    <BackgroundLines className="flex mt-10 w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-l md:text-2xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Welcome to your own Website builder<br /> Hussien Mohamed.
      </h2>
      {children}
      {/* <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p> */}
    </BackgroundLines>
  );
}
