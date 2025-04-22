import Image from "next/image";
import Navbar from '../components/Navbar';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Navbar />
      
      {/* Introduction Section */}
      <div className="px-8 py-12 max-w-3xl mx-auto">
        <p className="text-3xl font-bold mb-4 text-white">Hi, I'm M. Dilip Kumar Reddy <span className="animate-pulse">👋</span></p>
        <p className="text-lg leading-relaxed text-gray-300">
          I'm a passionate Computer Science student with a strong focus on applying my knowledge to solve real-world problems, no matter how small. 
          Through my work and experiences, I aim to make a meaningful impact by combining technical skills with creativity and problem-solving.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-gray-300">
          As the founder of <span className="text-blue-400 font-medium">Antistrep</span>, I lead efforts to help people step out of their comfort zones and bring their ideas to life. I see myself not just as a leader, but as a coach — empowering and supporting others to grow, build, and believe in their potential.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-gray-300">
          I thrive on collaboration and continuous learning, always striving to apply my knowledge in practical, impactful ways. 
          Whether it's through my internships at <span className="text-blue-400 font-medium">Infosys</span> and <span className="text-blue-400 font-medium">Traboda</span>, or in my personal projects, I'm always seeking opportunities to innovate and solve real-world challenges.
        </p>
      </div>
      
      {/* Contact Links Section */}
      <div className="px-8 py-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Connect With Me</h2>
        
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <a href="https://linkedin.com/in/yourusername" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300">
            <FaLinkedin className="text-blue-400 text-xl" />
            <span>LinkedIn</span>
          </a>
          
          <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300">
            <FaEnvelope className="text-red-400 text-xl" />
            <span>Email</span>
          </a>
          
          <a href="https://github.com/yourusername" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300">
            <FaGithub className="text-gray-300 text-xl" />
            <span>GitHub</span>
          </a>
          
          <a href="https://twitter.com/yourusername" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300">
            <FaTwitter className="text-blue-500 text-xl" />
            <span>Twitter</span>
          </a>
          
          <a href="https://instagram.com/yourusername" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300">
            <FaInstagram className="text-purple-400 text-xl" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      
      {/* Professional Experience Section */}
      <div className="px-8 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Professional Experience</h2>
        
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Traboda</h3>
            <p className="text-gray-400 text-sm">April 2025 - Present</p>
          </div>
          <p className="text-lg text-white">Full Stack Engineer</p>
          <p className="text-gray-300 mt-2">Currently working on full stack development projects, applying both frontend and backend skills to create comprehensive web solutions.</p>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Dream Team</h3>
            <p className="text-gray-400 text-sm">February 2025 - Present</p>
          </div>
          <p className="text-lg text-white">Team Member</p>
          <p className="text-gray-300 mt-2">Contributing as a member of the Dream Team, collaborating on innovative projects and initiatives.</p>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Infosys</h3>
            <p className="text-gray-400 text-sm">November 2024 - January 2025</p>
          </div>
          <p className="text-lg text-white">Web Developer Intern</p>
          <p className="text-gray-300 mt-2">Worked on web development projects, enhancing my skills in building responsive and functional web applications.</p>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Antistrep</h3>
            <p className="text-gray-400 text-sm">Founder</p>
          </div>
          <p className="text-lg text-white">Founder & Leader</p>
          <p className="text-gray-300 mt-2">Founded Antistrep to help individuals break out of their comfort zones and transform their ideas into reality through coaching and support.</p>
        </div>
      </div>
      
      {/* Education Section */}
      <div className="px-8 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Education</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400">Amrita Vishwa Vidyapeetham</h3>
          <p className="text-lg text-white">Bachelor of Technology in Computer Science and Engineering</p>
          <div className="flex justify-between mt-2">
            <p className="text-gray-400">2023 - 2027</p>
            <p className="text-green-400 font-medium">CGPA: 9.23</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400">Narayana Junior College</h3>
          <p className="text-lg text-white">Intermediate MPC</p>
          <div className="flex justify-between mt-2">
            <p className="text-gray-400">2021 - 2023</p>
            <p className="text-green-400 font-medium">Score: 971/1000</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400">Narayana Olympiad School</h3>
          <p className="text-lg text-white">Secondary Schooling</p>
          <div className="flex justify-between mt-2">
            <p className="text-gray-400">2020 - 2021</p>
            <p className="text-green-400 font-medium">Score: 10/10</p>
          </div>
        </div>
      </div>
      
      {/* Footer with Copyright */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} M. Dilip Kumar Reddy. All rights reserved.</p>
      </footer>
    </div>
  );
}