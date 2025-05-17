// pages/index.js
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Education from '../components/education';
import WorkExperience from '../components/workExperience';
import Achievements from '../components/Achievements';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-200 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Hero Section */}
      <div className="px-8 py-40 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Section (80%) */}
        <div className="basis-[80%]">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Hi, I&rsquo;m <span className="text-blue-600 dark:text-blue-400">M. Dilip Kumar Reddy</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            I&rsquo;m a Software Developer passionate about solving real-world problems and constantly learning cutting-edge technologies to build impactful solutions.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl">
            I love building new things — not because of the impact they might create, but because of the joy of bringing ideas to life.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl text-gray-800 dark:text-gray-200">
            <a
              href="https://github.com/dilip27m"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-gray-400 transition-colors"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/dilip29/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.linkedin.com/in/mdilipkumarreddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="files/dilip's resume.pdf"
              download
              className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              title="Download Resume"
            >
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <WorkExperience />

      {/* Education Section */}
      <Education />

      {/* Achievements Section */}
      <Achievements />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
