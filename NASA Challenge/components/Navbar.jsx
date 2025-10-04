"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = ({ navbarRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Globe", href: "#globe" },
    { name: "Awareness", href: "#Awareness" },
    
  ];

  return (
    <header ref={navbarRef} className="fixed top-0 left-0 w-full z-50 bg-white  md:rounded-b-full ">
      <div className="w-[100vw] flex justify-around items-center">

        <motion.a
          href="#"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}

        >
          <img className="max-w-[120px]" src="/assets/StellarCoders.png" alt="" />
        </motion.a>

        

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              className="text-black text-[1.3rem] hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}


            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <button
          className="md:hidden text-black mr-[1.5rem]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>

      </div>


      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90  border-t border-white/10"
        >
          <div className="flex flex-col items-center space-y-6 p-5">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-400 text-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
