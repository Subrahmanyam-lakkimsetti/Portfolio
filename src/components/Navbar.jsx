import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 px-6 py-4 flex items-center justify-evenly">
      {/* Left: Logo/Name */}
      <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        Subrahmanyam
      </div>

      {/* Right: Navigation Links */}
      <ul className="flex gap-4 sm:gap-6 text-sm md:text-base font-medium text-white">
        <li>
          <a href="#hero" className="hover:text-purple-400 transition-all">
            Home
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-purple-400 transition-all">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-400 transition-all">
            Projects
          </a>
        </li>
        <li>
          <a
            href="#certifications"
            className="hover:text-purple-400 transition-all"
          >
            Certifications
          </a>
        </li>
        <li>
          <a href="#education" className="hover:text-purple-400 transition-all">
            Education
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-400 transition-all">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
