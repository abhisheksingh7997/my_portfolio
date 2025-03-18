import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-16 bg-gray-900 text-white flex flex-col justify-center items-center">
      
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Get in Touch</h2>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a chat!
        </p>
      </div>

      {/* Contact Details (Left Aligned) */}
      <div className="flex flex-col space-y-6 text-xl w-full max-w-lg text-left px-4 sm:px-8 md:px-12">

        {/* Email */}
        <a href="mailto:abhishekchouhan7997@gmail.com" 
           className="flex items-center space-x-4 hover:text-blue-400 transition duration-300">
          <FaEnvelope className="text-4xl sm:text-5xl" />
          <span className="text-lg sm:text-xl">abhishekchouhan7997@gmail.com</span>
        </a>

        {/* Phone */}
        <a href="tel:+919166266849" 
           className="flex items-center space-x-4 hover:text-blue-400 transition duration-300">
          <FaPhone className="text-4xl sm:text-5xl" />
          <span className="text-lg sm:text-xl">+91-9166266849</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/abhisheksingh7997" 
           target="_blank" rel="noopener noreferrer" 
           className="flex items-center space-x-4 hover:text-blue-400 transition duration-300">
          <FaGithub className="text-4xl sm:text-5xl" />
          <span className="text-lg sm:text-xl">github.com/AbhishekSingh</span>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/abhi9779/" 
           target="_blank" rel="noopener noreferrer" 
           className="flex items-center space-x-4 hover:text-blue-400 transition duration-300">
          <FaLinkedin className="text-4xl sm:text-5xl" />
          <span className="text-lg sm:text-xl">linkedin.com/in/AbhishekSingh</span>
        </a>

      </div>
    </section>
  );
};

export default Contact;
