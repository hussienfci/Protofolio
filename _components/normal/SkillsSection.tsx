import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaGlobe,
  FaAward, 
  FaLayerGroup,
  FaNetworkWired, 
  FaShieldAlt,
  FaCode,
  FaJsSquare, 
  FaProjectDiagram, 
  FaCodeBranch,
  FaSitemap,
  FaShare,
  FaChartBar,
  FaCubes, 
  FaDesktop 
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';
import { } from 'react-icons/fa';

interface SkillItem {
  name: string;
  icon: JSX.Element;
  color: string;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
}

const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'ReactJS', icon: <FaReact />, color: 'text-blue-500' },
      { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
      { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-600' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-600' },
      { name: 'TailwindCSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'NodeJS', icon: <FaNodeJs />, color: 'text-green-600' },
      { name: 'ExpressJS', icon: <SiExpress />, color: 'text-white' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
      { name: 'SQL/Databases', icon: <FaDatabase />, color: 'text-purple-500' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
      { name: 'GitHub', icon: <FaGitAlt />, color: 'text-white' },
      { name: 'REST APIs', icon: <SiExpress />, color: 'text-white' },
    ],
  }, 
  {
    category: 'ServiceNow',
    items: [
      {
        name: "Service Portal",
        icon: <FaGlobe />,
        color: "text-[#FF6B35]"
      },
      {
        name: "UI Builder",
        icon: <FaLayerGroup />,
        color: "text-[#4ECDC4]"
      },
      {
        name: "Access Control Lists (ACLs)",
        icon: <FaShieldAlt />,
        color: "text-[#38A169]"
      },
      {
        name: "Scripting in ServiceNow",
        icon: <FaCode />,
        color: "text-[#48BB78]"
      },
      {
        name: "Subflow",
        icon: <FaCodeBranch />,
        color: "text-[#38B2AC]"
      },
      {
        name: "Flow design",
        icon: <FaShare />,
        color: "text-[#63B3ED]"
      },
      {
        name: "Reports and dashboards",
        icon: <FaChartBar />,
        color: "text-[#48BB78]"
      },
      {
        name: "App Engine Studio",
        icon: <FaCubes />,
        color: "text-[#9F7AEA]"
      },
      
      
    ],
  
  }, 
];

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300 },
  },
  hover: {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.5 },
  },
};

export default function SkillsSection(): JSX.Element {
  return (
    // <section className="pb-12 px-6 bg-white dark:bg-black" id="skills">
    //   <div className="max-w-6xl mx-auto">
    //     <h2 className="mt-[5rem] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-l md:text-2xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
    //       Skills
    //     </h2>
    //     <div className="grid md:grid-cols-3 gap-8">
    //       {skills.map((group, i) => (
    //         <div key={i}>
    //           <h3 className="text-xl font-semibold mb-4 text-gray-700 border-2 border-gray-700 text-center rounded-2xl dark:text-gray-300">
    //             {group.category}
    //           </h3>
    //           <ul className="space-y-3">
    //             {group.items.map((skill, j) => (
    //               <motion.li
    //                 key={j}
    //                 className="flex items-center space-x-3 cursor-pointer"
    //                 initial="initial"
    //                 whileInView="animate"
    //                 whileHover="hover"
    //                 viewport={{ once: true }}
    //                 variants={{iconVariants}}
    //               >
    //                 <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
    //                 <span className="text-base font-medium text-gray-700 dark:text-gray-300">
    //                   {skill.name}
    //                 </span>
    //               </motion.li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="pb-12 px-6 bg-white dark:bg-black" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="mt-[5rem] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-l md:text-2xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <div 
              key={i}
              className={skills.length % 2 === 0 && i === skills.length - 1 ? "md:col-start-2" : ""}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-700 border-2 border-gray-700 text-center rounded-2xl dark:text-gray-300">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill, j) => (
                  <motion.li
                    key={j}
                    className="flex items-center space-x-3 cursor-pointer"
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    variants={{iconVariants}}
                  >
                    <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
  </section>
  );
}
