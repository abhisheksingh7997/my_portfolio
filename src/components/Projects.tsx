import { Github } from 'lucide-react';

const Projects = () => {
  const projects = 
[
  {
    title: 'RideShare - Taxi Booking Platform',
    description: 'A full-stack taxi booking app featuring real-time ride requests, driver tracking, and route mapping using Socket.io and ArcGIS.',
    image: 'https://rvtechnologies.com/assets/images/taxi_services_img.webp',
    technologies: ['React', 'Node.js', 'Express', 'Socket.io', 'ArcGIS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abhisheksingh7997/RideShare',
    liveUrl: 'https://example.com'
  },
  {
  
  title: 'Stock Management System',
  description: 'A full-stack stock management system to track inventory, manage stock levels, and monitor product performance with admin and user dashboards.',
  image: 'https://t3.ftcdn.net/jpg/04/59/15/58/360_F_459155812_i8zcXL46AxG1VKNQ5KaxSb6gGpapLuO0.jpg',
  technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB'],
  githubUrl: 'https://github.com/abhisheksingh7997/nextjs-stock-management',
  liveUrl: 'https://example.com'


  },
{
  title: 'Worker Management System',
  description: 'A frontend-only web application for managing workers with AI-assisted task recommendations and performance visualization. Built with a focus on UI/UX and intelligent user interaction.',
  image: 'https://www.shutterstock.com/image-photo/hrhuman-resources-technologyonline-modern-technologies-260nw-2139960475.jpg',
  technologies: ['React', 'Tailwind CSS', 'Chart.js', 'OpenAI API'],
  githubUrl: 'https://github.com/abhisheksingh7997/Worker',
  liveUrl: 'https://example.com'
}
,
  {
    title: 'Library Management System',
    description: 'An Angular-based library management system with Firebase backend for real-time book tracking and admin panel.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Angular', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abhisheksingh7997/LibraryManagement',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Neon Attack',
    description: 'A fully responsive eCommerce website built with React and Tailwind CSS, featuring product listings, shopping cart functionality, and a sleek modern UI for seamless user experience.',
    image: 'https://www.shutterstock.com/image-vector/concept-information-technologies-computer-engineering-600nw-2439105125.jpg',
    technologies: ['HTML', 'Tailwind CSS', 'Framer Motion', 'Javascript'],
    githubUrl: 'https://github.com/abhisheksingh7997/neonAttack_Abhishek',
    liveUrl: 'https://example.com'
  },
{
  title: 'NetMirror - Movie Recommender System',
  description: 'A machine learning-powered movie recommender system built using Python and Streamlit. It provides personalized movie suggestions based on user preferences using content-based filtering.',
  image: 'https://editor.analyticsvidhya.com/uploads/76889recommender-system-for-movie-recommendation.jpg',
  technologies: ['Python', 'Streamlit', 'scikit-learn', 'Pandas'],
  githubUrl: 'https://github.com/abhisheksingh7997/Netmirror',
  liveUrl: 'https://example.com'
}

];
  


  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                    {/* <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;