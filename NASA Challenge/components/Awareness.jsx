"use client";
import React from "react";
import { motion } from "framer-motion";

const AwarenessSection = () => {
  const facts = [
    {
      title: "🌡️ Global Warming",
      desc: "The Earth's temperature has risen by 1.1°C since pre-industrial times.",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "🌊 Rising Seas",
      desc: "Sea levels are rising at 3.3 mm per year, threatening coastal cities.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "🌫️ Air Pollution",
      desc: "Over 7 million deaths annually are linked to polluted air worldwide.",
      color: "from-gray-500 to-gray-800",
    },
    {
      title: "🌳 Forest Loss",
      desc: "10 million hectares of forest are lost every year, reducing biodiversity.",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="Awareness"  className=" text-white py-20  ">

      <div className=" max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
          🌍 Climate Change Awareness
        </h2>
        <p className="text-lg mb-12 text-gray-300">
          Awareness is the first step towards action. Learn about the key issues driving
          climate change and their global impact.
        </p>

        {/* Fact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${fact.color} hover:scale-105 transition-transform`}
            >
              <h3 className="text-2xl font-bold mb-4">{fact.title}</h3>
              <p className="text-gray-100">{fact.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-3xl font-bold text-yellow-300 mb-4">
            ✊ Be the Change!
          </h3>
          <p className="text-gray-300 mb-6">
            Every small action counts. Save energy, reduce waste, and spread awareness.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl font-semibold text-lg shadow-lg hover:opacity-90 transition">
            Take Action
          </button>
        </motion.div>
      </div>

    </section>

  );
  
};

export default AwarenessSection;
