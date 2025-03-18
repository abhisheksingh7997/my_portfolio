import { FaCode, FaTools, FaDatabase } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900 text-white flex flex-col justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Programming Languages */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center h-60">
            <FaCode className="text-6xl text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Programming Languages</h3>
            <p className="text-lg text-gray-400">C++, Python, JavaScript</p>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center h-60">
            <FaTools className="text-6xl text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Frameworks & Libraries</h3>
            <p className="text-lg text-gray-400">React, Tailwind CSS, Express, Pandas, ScikitLearn</p>
          </div>

          {/* Databases & Tools */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center h-60">
            <FaDatabase className="text-6xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Databases & Tools</h3>
            <p className="text-lg text-gray-400">MySQL, MongoDB, GitHub, VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
