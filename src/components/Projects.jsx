const projects = [
  { id: 1, title: "Kriya - Meditation for Life", description: "A relaxing meditation website designed to help users find peace and mindfulness. Offers guided sessions, breathing exercises, and a serene user interface. Perfect for beginners and experienced meditators alike.", link: "https://github.com/abhisheksingh7997/Kriya" },
  { id: 2, title: "NeonAttack", description: "An e-commerce platform specializing in customizable neon lights. Users can design and purchase personalized neon signs for homes, businesses, or events. Features a sleek interface, secure payments, and fast delivery.", link: "https://github.com/abhisheksingh7997/neonAttack_Abhishek" },
  { id: 3, title: "NetMirror", description: "A smart movie recommender system that suggests films based on user preferences. Uses advanced algorithms to analyze ratings, genres, and viewing history. Helps users discover new and trending movies effortlessly🎬.", link: "https://github.com/abhisheksingh7997/Netmirror" },
  { id: 4, title: "NeoShoes", description: "An online store for trendy and high-quality shoes. Offers a wide range of footwear styles, from casual to sportswear. Features easy navigation, secure payments, and fast delivery options.", link: "https://github.com/abhisheksingh7997/neo-shoes" },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 bg-gray-100 flex flex-col justify-center">
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-8 rounded-2xl shadow-xl h-72 flex flex-col justify-between transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-3xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-lg text-gray-700">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-500 font-medium mt-4 inline-block hover:text-blue-700 transition duration-300"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
