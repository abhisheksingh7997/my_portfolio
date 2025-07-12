import { Code, Lightbulb, Users } from 'lucide-react';
import profileImage from '../assets/profilephoto.jpg'; // Adjust the path as needed

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={24} />,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions'
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
             <div className="w-56 h-56 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-md">
  <img
    src={profileImage} 
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

              </div>
            </div>
            
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
               I'm a passionate full-stack developer with hands-on experience in building modern web applications using React, Node.js, and SQL. Alongside web development, I have a strong interest in machine learning and enjoy integrating intelligent features into real-world applications. I love transforming complex challenges into simple, intuitive designs that provide meaningful user experiences .
              </p>
          
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
               
               <a
  href="https://drive.google.com/file/d/1IYC5rmHqzUmyiIfTgqWkSvO2VoPcRPSt/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
>
  Download Resume
</a>

              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
              >
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;