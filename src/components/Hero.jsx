import './Hero.css';
import ProfilePic from "../assets/profilephoto.jpg";
const Hero = () => {
    return (
        <>
            <section
                id="home"
                className="h-screen flex flex-col justify-center items-center w-full bg-gray-100 bg-cover bg-center relative"
                style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149138432.jpg?t=st=1740582534~exp=1740586134~hmac=6aaaeeca5c7639595d2916a4552413b017e19bd321c793251e025987d30c6995&w=1380")' }}
            >
                {/* Overlay to darken the background */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content Wrapper */}
                <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">

                    {/* Profile Picture */}
                    <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                        <img
                            src={ProfilePic} // Replace with your profile picture URL
                            alt="img"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Animated Hello text */}
                    <h1 className="text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-950 to-red-500 animate-fade-in mt-6">
                        Hello, I am Abhishek Singh Chouhan
                    </h1>

                    {/* Description text with fade-in animation */}
                    <p className="text-2xl mt-4 font-sans animate-fade-in text-gray-200">
                        A passionate Full Stack Software Developer 🚀 and a Machine Learning enthusiast having experience in building Web applications with  HTML, CSS, JavaScript, React.js, Streamlit, and more.
                    </p>

                    {/* Button group with animation and hover effects */}
                    <div className="flex mt-8 space-x-4 animate-fade-in">
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
