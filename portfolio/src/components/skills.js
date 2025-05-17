// components/SkillIcons.js
"use client"
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiPostgresql, SiPython, SiC, SiHaskell,
  SiDjango, SiPytest, SiTestinglibrary, SiVscodium, SiGit, SiDocker,
  SiFigma, SiCanva, SiHackerrank, SiLeetcode, SiCodechef
} from 'react-icons/si';
import Image from 'next/image';
import { FaRobot,FaCoffee } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const sections = [
  // ========== Core Web Development ==========
  {
    title: "Web Fundamentals",
    items: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-600 rounded-xl" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-600 rounded-xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 rounded-xl" /> },
    ],
  },
  {
    title: "Frontend Frameworks",
    items: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    title: "CSS & Styling",
    items: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    ],
  },

  // ========== Backend & Databases ==========
  {
    title: "Backend & APIs",
    items: [
      { name: "Django", icon: <SiDjango className="text-green-800" /> },
      { 
        name: "GraphQl", 
        icon: <Image src="/images/graphql.png" alt="GraphQL" width={32} height={32} className="w-10 h-10 object-contain rounded-xl" /> 
      },
      { 
        name: "Strawberry", 
        icon: <Image src="/images/strawberry.jpeg" alt="Strawberry" width={32} height={32} className="w-10 h-10 object-contain rounded-xl" /> 
      },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },

    ],
  },

  // ========== Programming Languages ==========
  {
    title: "Languages",
    items: [
      { name: "Python", icon: <SiPython className="text-blue-500" /> },
      { name: "Java", icon: <Image src="/images/java.png" alt="Java" width={32} height={32} className="w-10 h-10 object-contain" /> },
      { name: "C", icon: <SiC className="text-gray-400" /> },
      { name: "Haskell", icon: <SiHaskell className="text-violet-800" /> },
    ],
  },

  // ========== DevOps & Linux ==========
  {
    title: "DevOps & Linux",
    items: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Linux CLI", icon: <Image src="/images/linux.png" alt="Linux" width={32} height={32} className="w-10 h-10 object-contain" /> },
      { name: "bash", icon: <Image src="/images/bash.png" alt="Bash" width={32} height={32} className="w-10 h-10 object-contain rounded-xl" /> },
      
    ],
  },

  // ========== Tools & Platforms ==========
  {
    title: "Development Tools",
    items: [
      { name: "VS Code", icon: <Image src="/images/vscode.png" alt="VS Code" width={32} height={32} className="w-10 h-10 object-contain" /> },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "Pytest", icon: <SiPytest className="text-blue-400" /> },
      { 
        name: "Unittest", 
        icon: <Image src="/images/unittest.png" alt="unittest" width={32} height={32} className="w-12 h-12 object-contain rounded-xl" /> 
      },
    ],
  },
  {
    title: "Design Tools",
    items: [
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Canva", icon: <SiCanva className="text-cyan-500" /> },
    ],
  },

  // ========== AI & Coding Platforms ==========
  {
    title: "AI Tools",
    items: [
      { name: "ChatGPT", icon: <Image src="/images/ai-icons/chatgpt.png" alt="ChatGPT" width={32} height={32} className="w-10 h-10 object-contain" /> },
      { name: "Claude", icon: <Image src="/images/ai-icons/claude.png" alt="Claude" width={32} height={32} className="w-10 h-10 object-contain" /> },
      { name: "Copilot", icon: <Image src="/images/ai-icons/copilot.png" alt="Copilot" width={32} height={32} className="w-10 h-10 object-contain" /> },
      { name: "Deepseek", icon: <Image src="/images/ai-icons/deepseek.png" alt="Deepseek" width={32} height={32} className="w-10 h-10 object-contain" /> },
      { name: "Gemini", icon: <Image src="/images/ai-icons/gemini.png" alt="Gemini" width={32} height={32} className="w-10 h-10 object-contain" /> },
      { name: "Perplexity", icon: <Image src="/images/ai-icons/perplexity.png" alt="Perplexity" width={32} height={32} className="w-12 h-12 object-contain" /> },
    ],
  },
  {
    title: "Coding Practice",
    items: [
      { name: "HackerRank", icon: <SiHackerrank className="text-green-500 rounded-xl" /> },
      { name: "LeetCode", icon: <SiLeetcode className="text-yellow-500 rounded-xl" /> },
      { name: "CodeChef", icon: <SiCodechef className="text-brown-700 rounded-xl" /> },
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
