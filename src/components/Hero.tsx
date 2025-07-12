import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abhishek Singh Chouhan
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Full Stack Developer passionate about creating beautiful, functional web experiences
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/abhisheksingh7997"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Github size={24} className="text-slate-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhi9779/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a
              href="mailto:abhishekchouhan7997@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail size={24} className="text-green-600" />
            </a>
          </div>
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronDown size={24} className="text-slate-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;