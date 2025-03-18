import './Hero.css';
import ProfilePic from "../assets/profilephoto.jpg";

const Hero = () => {
    return (
        <>
            <section
                id="home"
                className="h-screen flex flex-col justify-center items-center w-full bg-gray-100 bg-cover bg-center relative"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRhcmslMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D")' }}
            >
                {/* Overlay to darken the background */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content Wrapper */}
                <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">

                    {/* Profile Picture */}
                    <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-6">
                        <img
                            src={ProfilePic} // Replace with your profile picture URL
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Animated Hello text */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-950 to-red-500 animate-fade-in mt-6">
                        Hello, I am Abhishek Singh Chouhan
                    </h1>

                    {/* Description text with fade-in animation */}
                    <p className="text-xl sm:text-2xl mt-4 font-sans animate-fade-in text-gray-200 px-6 sm:px-12">
                        A passionate Full Stack Software Developer 🚀 and a Machine Learning enthusiast having experience in building Web applications with HTML, CSS, JavaScript, React.js, Streamlit, and more.
                    </p>

                    {/* Button group with animation and hover effects */}
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 space-y-4 sm:space-y-0 animate-fade-in">
                        <a
                            href="https://github.com/abhisheksingh7997"
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            View My Work
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1USGAdP4PkCLYLkZcNUD-IjOaAOnyIs6B/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            Download My Resume
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
