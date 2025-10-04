'use client'
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {

    const arr = Array.from({ length: 200 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setStars(arr);
  }, []);

  return (
    <section
    
      className="relative h-screen flex flex-col justify-center items-center text-center px-6  overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {stars.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 2,0.5] }}
            transition={{
              duration: Math.random() * 2+1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>


      <motion.h1
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        Animation Celebration of Terra Data
      </motion.h1>


      <motion.p
        className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl z-10"
        initial={{ opacity: 0 , y:-50 }}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        Earth in Motion: Animated Stories of Our Planet 🌍✨
      </motion.p>


      <motion.a
        href="#globe"
        initial={{ opacity: 0 , y:-60 }}
        animate={{ opacity: 1,y:0 }}
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 1, ease: "easeIn" }}

      >
        Explore the Globe <ArrowDown size={20} />
      </motion.a>

    </section>
  );
};

export default Hero;
