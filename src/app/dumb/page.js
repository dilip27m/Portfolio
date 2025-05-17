// // pages/about.js

// import Image from 'next/image';
// import { FaCode, FaBrain, FaUsers, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-200">
   
      
//       <div className="py-12 max-w-4xl mx-auto px-8">
//         <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>
        
//         {/* Personal Introduction */}
//         <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
//           <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-400">
//             {/* Replace with your actual image */}
//             <div className="bg-blue-900 w-full h-full flex items-center justify-center text-4xl">
//               DKR
//             </div>
//             {/* Uncomment and use your actual image
//             <Image 
//               src="/images/profile-pic.jpg" 
//               alt="Dilip Kumar Reddy" 
//               layout="fill" 
//               objectFit="cover" 
//             />
//             */}
//           </div>
          
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold mb-4 text-blue-400">Who am I?</h2>
//             <p className="text-lg mb-4 text-gray-300">
//               I'm M. Dilip Kumar Reddy, a Computer Science and Engineering student at Amrita Vishwa Vidyapeetham. I'm passionate about using technology to solve real-world problems and helping others do the same.
//             </p>
//             <p className="text-lg text-gray-300">
//               My journey in technology began with simple curiosity but evolved into a deep passion for building solutions that make a difference. I believe in the power of technology to transform lives and am committed to using my skills to contribute positively to society.
//             </p>
//           </div>
//         </div>
        
//         {/* My Story */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">My Story</h2>
//           <p className="text-lg mb-4 text-gray-300">
//             I have always been fascinated by how technology can solve complex problems with elegant solutions. This fascination led me to pursue Computer Science and Engineering, where I discovered my love for software development and problem-solving.
//           </p>
//           <p className="text-lg mb-4 text-gray-300">
//             As a student, I've been proactive about gaining practical experience through internships at companies like Infosys and Traboda, where I've had the opportunity to apply classroom knowledge to real-world challenges. These experiences have been invaluable in shaping my understanding of the industry and honing my technical skills.
//           </p>
//           <p className="text-lg text-gray-300">
//             Beyond technical skills, I'm also passionate about leadership and community building. This led me to found Antistrep, an initiative focused on helping people overcome their limitations and transform their ideas into reality. As both a leader and a coach, I find immense fulfillment in empowering others to reach their potential.
//           </p>
//         </div>
        
//         {/* Antistrep Story */}
//         <div className="mb-12 bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
//           <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
//             <FaLightbulb className="text-yellow-400 mr-3" />
//             The Antistrep Story
//           </h2>
          
//           <p className="text-lg mb-4 text-gray-300">
//             Antistrep was born from my own personal struggles as a student. During my studies, I often found myself overwhelmed and confused about which direction to take. I had numerous ideas for developing solutions with my skills, but I wasn't sure if they were feasible or how to execute them properly.
//           </p>
          
//           <p className="text-lg mb-4 text-gray-300">
//             The abundance of information on social media only added to my confusion. When I would share my ideas with friends, they either didn't understand or didn't encourage me, which led me to abandon potentially valuable projects.
//           </p>
          
//           <p className="text-lg mb-4 text-gray-300">
//             I decided that no one else should have to face these obstacles alone. That's why I created Antistrep — a platform where people can contribute to projects that solve real-world problems, regardless of how large or small their impact might be.
//           </p>
          
//           <p className="text-lg text-gray-300">
//             At Antistrep, we guide aspiring developers, explain what they need to study to bring their ideas to life, and help them create projects from their own concepts. Our mission is to foster an environment where good ideas don't get abandoned due to lack of support or direction.
//           </p>
//         </div>
        
//         {/* My Skills */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2 text-white">Core Skills & Strengths</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <FaCode className="text-blue-400 text-2xl mr-3" />
//                 <h3 className="text-xl font-semibold text-white">Programming & Development</h3>
//               </div>
//               <p className="text-gray-300">
//                 Proficient in various programming languages including JavaScript, Python, and Java. Experienced in web development with expertise in frontend and backend technologies.
//               </p>
//             </div>
            
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <FaBrain className="text-blue-400 text-2xl mr-3" />
//                 <h3 className="text-xl font-semibold text-white">Problem Solving</h3>
//               </div>
//               <p className="text-gray-300">
//                 Strong analytical abilities and creative thinking that enable me to approach problems from multiple angles and develop innovative solutions.
//               </p>
//             </div>
            
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <FaUsers className="text-blue-400 text-2xl mr-3" />
//                 <h3 className="text-xl font-semibold text-white">Leadership & Coaching</h3>
//               </div>
//               <p className="text-gray-300">
//                 Experience in leading teams and coaching individuals to achieve their goals. Skilled in communication, delegation, and inspiring others to perform at their best.
//               </p>
//             </div>
            
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <FaLaptopCode className="text-blue-400 text-2xl mr-3" />
//                 <h3 className="text-xl font-semibold text-white">Full Stack Development</h3>
//               </div>
//               <p className="text-gray-300">
//                 Capable of handling end-to-end development projects, from user interface design to server-side functionality and database management.
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Personal Values */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">Personal Values</h2>
//           <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
//             <li><span className="text-blue-400 font-medium">Continuous Learning:</span> I believe in the power of lifelong learning and constantly seeking to expand my knowledge and skills.</li>
//             <li><span className="text-blue-400 font-medium">Collaboration:</span> I value teamwork and the synergy that comes from diverse perspectives working together.</li>
//             <li><span className="text-blue-400 font-medium">Innovation:</span> I'm committed to thinking outside the box and finding creative solutions to challenging problems.</li>
//             <li><span className="text-blue-400 font-medium">Integrity:</span> I believe in honesty, transparency, and ethical conduct in all aspects of life and work.</li>
//             <li><span className="text-blue-400 font-medium">Empowerment:</span> I'm passionate about helping others realize their potential and achieve their goals.</li>
//           </ul>
//         </div>
        
//         {/* Outside of Work */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">Beyond Technology</h2>
//           <p className="text-lg mb-4 text-gray-300">
//             When I'm not coding or working on projects, I enjoy exploring new technologies and sharing knowledge with others. I believe maintaining a balanced life enhances creativity and productivity, so I make time for activities that refresh and inspire me.
//           </p>
//           <p className="text-lg text-gray-300">
//             I'm also passionate about creating accessible learning environments for aspiring developers, and I try to contribute to these areas whenever possible. I believe that technology should ultimately serve to make our world better and more equitable for everyone.
//           </p>
//         </div>
//       </div>
      
//       {/* Call to Action */}
//       <div className="bg-gray-800 py-12 text-center">
//         <h2 className="text-2xl font-bold mb-4 text-white">Let's Connect</h2>
//         <p className="text-lg mb-6 text-gray-300 max-w-2xl mx-auto">
//           I'm always open to discussing new projects, opportunities, or just having a conversation about technology and innovation.
//         </p>
//         <a href="mailto:your.email@example.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
//           Get In Touch
//         </a>
//       </div>
      
//       {/* Footer */}
//       <footer className="py-6 bg-gray-900 text-center text-gray-400">
//         <p>© {new Date().getFullYear()} M. Dilip Kumar Reddy. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }