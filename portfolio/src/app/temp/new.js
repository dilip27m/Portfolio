// pages/index.js
'use client';
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { useState } from "react";

export default function Home() {

  const [activeTab, setActiveTab] = useState("Work Experience");

  const tabs = ["Work Experience", "Education", "Achievements"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Work Experience":
        return (
          <div className="mt-6 space-y-4 text-white">
            <div>
              <h3 className="text-xl font-bold">Traboda</h3>
              <p className="text-sm text-gray-400">Full Stack Engineer (April 2025 - Present)</p>
              <p>Working on full stack development projects.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Dream Team</h3>
              <p className="text-sm text-gray-400">Team Member (Feb 2025 - Present)</p>
              <p>Collaborating on innovative projects.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Infosys</h3>
              <p className="text-sm text-gray-400">Web Developer Intern (Nov 2024 - Jan 2025)</p>
              <p>Worked on responsive web apps.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Antistrep</h3>
              <p className="text-sm text-gray-400">Founder</p>
              <p>Founded <a href="https://www.antistrep.com" className="text-blue-400 underline">Antistrep</a> to help individuals grow.</p>
            </div>
          </div>
        );
      case "Education":
        return (
          <div className="mt-6 text-white">
            <p>B.Tech in Computer Science – [Your University], 2021-2025</p>
            {/* Add more education details here */}
          </div>
        );
      case "Achievements":
        return (
          <div className="mt-6 text-white">
            <ul className="list-disc list-inside">
              <li>Leetcode 150+ problems solved</li>
              <li>Infosys Internship Certificate</li>
              <li>Started Antistrep for student growth</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Navbar />

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

      Work Experience Section
      <div className="px-8 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-2">Work Experience</h2>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Traboda</h3>
            <p className="text-gray-400 text-sm">April 2025 - Present</p>
          </div>
          <p className="text-lg text-white">Full Stack Engineer</p>
          <p className="text-gray-300 mt-2">
            Currently working on full stack development projects, applying both frontend and backend skills to create comprehensive web solutions.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Dream Team</h3>
            <p className="text-gray-400 text-sm">February 2025 - Present</p>
          </div>
          <p className="text-lg text-white">Team Member</p>
          <p className="text-gray-300 mt-2">
            Contributing as a member of the Dream Team, collaborating on innovative projects and initiatives.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Infosys</h3>
            <p className="text-gray-400 text-sm">November 2024 - January 2025</p>
          </div>
          <p className="text-lg text-white">Web Developer Intern</p>
          <p className="text-gray-300 mt-2">
            Worked on web development projects, enhancing my skills in building responsive and functional web applications.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Antistrep</h3>
            <p className="text-gray-400 text-sm">Founder</p>
          </div>
          <p className="text-lg text-white">Founder & Leader</p>
          <p className="text-gray-300 mt-2">
            Founded Antistrep to help individuals break out of their comfort zones and transform their ideas into reality through coaching and support.
          </p>
          <a
            href="https://www.antistrep.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 mt-4 inline-block"
          >
            Visit Antistrep Portfolio
          </a>
        </div>
      </div>

      {/* Education Section */}
      <div className="px-8 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-2">Education</h2>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Amrita University</h3>
            <p className="text-gray-400 text-sm">2023 - Present</p>
          </div>
          <p className="text-lg text-white">Bachelor of Technology in Computer Science</p>
          <p className="text-gray-300 mt-2">Currently pursuing my degree with a focus on software engineering and AI.</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Narayana Junior College</h3>
            <p className="text-gray-400 text-sm">2021 - 2023</p>
          </div>
          <p className="text-lg text-white">Intermediate MPC (Mathematics, Physics, Chemistry)</p>
          <p className="text-gray-300 mt-2">Marks: 971/1000</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Narayana Olympiad School</h3>
            <p className="text-gray-400 text-sm">2019 - 2021</p>
          </div>
          <p className="text-lg text-white">High School</p>
          <p className="text-gray-300 mt-2">Marks: 971/1000</p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="px-8 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-2">Achievements</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400">JEE Mains</h3>
          <ul className="text-lg text-white ml-6">
            <li>General Category: Rank: 63,000 out of 12 Lakhs</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400">JEE Advanced</h3>
          <ul className="text-lg text-white ml-6">
            <li>General Category: Rank 23,000 out of 2.5 Lakhs</li>
            <li>EWS Category: Rank 3,000</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400">COMEDK</h3>
          <ul className="text-lg text-white ml-6">
            <li>General Category: Rank: 2,800</li>
          </ul>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>

      {/* Tab buttons */}
      <div className="flex gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        {renderTabContent()}
      </div>
    </div>

    </div>
  );
}
