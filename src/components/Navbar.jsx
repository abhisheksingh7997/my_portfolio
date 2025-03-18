import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-lg font-medium px-3 py-2 transition duration-300 hover:text-gray-300 after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-blue-800 p-4 mt-2 space-y-2 rounded-lg shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-lg text-white hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
