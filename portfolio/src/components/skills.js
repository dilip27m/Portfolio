// components/SkillIcons.js
"use client"
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiPostgresql, SiPython, SiC, SiHaskell,
  SiDjango, SiPytest, SiTestinglibrary, SiVscodium, SiGit, SiDocker,
  SiFigma, SiCanva, SiHackerrank, SiLeetcode, SiCodechef
} from 'react-icons/si';

import { FaRobot,FaCoffee } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const sections = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "Django", icon: <SiDjango className="text-green-800" /> },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Python", icon: <SiPython className="text-blue-500" /> },
     { name: "Java", icon: <FaCoffee className="text-red-600" /> },
      { name: "C", icon: <SiC className="text-gray-400" /> },
      { name: "Haskell", icon: <SiHaskell className="text-violet-800" /> },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "Pytest", icon: <SiPytest className="text-blue-400" /> },
      { name: "unittest", icon: <SiTestinglibrary /> },
    ],
  },
  {
    title: "Dev Tools",
    items: [
      { name: "VS Code", icon: <SiVscodium className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "ChatGPT", icon: <FaRobot /> },
      { name: "Claude", icon: <FaRobot /> },
      { name: "DeepSeek", icon: <FaRobot /> },
      { name: "Lovable", icon: <FaRobot /> },
      { name: "Perplexity", icon: <FaRobot /> },
      { name: "Blackbox", icon: <FaRobot /> },
    ],
  },
  {
    title: "Design Platforms",
    items: [
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Canva", icon: <SiCanva className="text-cyan-500" /> },
    ],
  },
  {
    title: "Coding Platforms",
    items: [
      { name: "HackerRank", icon: <SiHackerrank className="text-green-500" /> },
      { name: "LeetCode", icon: <SiLeetcode className="text-yellow-500" /> },
      { name: "CodeChef", icon: <SiCodechef className="text-brown-700" /> },
    ],
  },
];

const SkillIcons = () => {
  return (
    <div className="space-y-12">
      <Tooltip id="skill-tooltip" className="z-50" />
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {section.items.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-col items-center space-y-1 hover:scale-110 transition-transform"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={name}
              >
                <div className="text-4xl">{icon}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillIcons;
