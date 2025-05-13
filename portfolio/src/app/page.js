// pages/index.js
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Education from '../components/education';
import WorkExperience from '../components/workExperience';
import Achievements from '../components/Achievements';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div className="min-h-screen  text-gray-200">
     

      {/* Hero Section */}
      <div className="px-8 py-40 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Section (80%) */}
        <div className="basis-[80%]">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 leading-tight">
            Hi, I'm <span className="text-blue-400">M. Dilip Kumar Reddy</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            I'm a Software Developer passionate about solving real-world problems and constantly learning cutting-edge technologies to build impactful solutions.
          </p>
          <p className="text-lg sm:text-xl text-gray-400 mt-6 max-w-3xl">
            I love building new things — not because of the impact they might create, but because of the joy of bringing ideas to life.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/your-leetcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="/resume.pdf"
            download
            className="hover:text-blue-300"
            title="Download Resume"
          >
            <FaFileDownload />
          </a>
        </div>
        </div>
        

        
      </div>

      {/* Uncomment if needed: Profile Image */}
      {/* <div className="basis-[20%] hidden md:block">
        <Image
          src="/your-photo.jpg"
          alt="Profile Picture"
          width={160}
          height={160}
          className="rounded-xl object-cover shadow-lg"
        />
      </div> */}
              {/* Social Icons
          <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/your-leetcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="/resume.pdf"
            download
            className="hover:text-blue-300"
            title="Download Resume"
          >
            <FaFileDownload />
          </a>
        </div> */}

      {/* Work Experience Section */}
      <WorkExperience/>

      {/* Projects Section */}
      
      {/* Education Section */}
      <Education/>

      {/* Achievements Section */}
      <Achievements/>
      <Contact/>
      {/* Footer */}
      
    </div>
  );
}
