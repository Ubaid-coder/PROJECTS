"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const SeaSection = () => {
  const [seaData, setSeaData] = useState([]);

  useEffect(() => {
    async function fetchSeaLevelData() {
      try {
        const res = await fetch("/api/sea");
        const text = await res.text();

        const rows = text.split("\n").slice(1); // skip header
        const parsed = rows
          .map((row) => {
            const cols = row.split(",");
            if (cols.length >= 2) {
              const year = parseInt(cols[0].trim(), 10);
              const sea_level = parseFloat(cols[1].trim());

              if (!isNaN(year) && !isNaN(sea_level)) {
                return { year, sea_level };
              }
            }
            return null;
          })
          .filter(Boolean);

        setSeaData(parsed);
      } catch (err) {
        console.error("Error fetching sea level data:", err);
      }
    }

    fetchSeaLevelData();
  }, []);

  return (
    <section id="Sea" className="bg-gradient-to- text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">🌊 Sea Level Rise</h2>
        <p className="text-lg mb-12 text-gray-300">
          Global sea levels have been steadily rising due to melting ice caps
          and ocean warming, putting coastal communities and ecosystems at risk.
        </p>

        {/* Chart */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={seaData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis dataKey="year" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sea_level"
                stroke="#00eaff"
                strokeWidth={3}
                dot={false}
                isAnimationActive={true}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Impact Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-cyan-400">+20 cm</p>
            <p className="text-gray-300">Rise since 1900</p>
          </div>

          <div className="bg-blue-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-red-400">3.7 mm/yr</p>
            <p className="text-gray-300">Current yearly rise</p>
          </div>

          <div className="bg-blue-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-yellow-400">90%</p>
            <p className="text-gray-300">Of heat trapped goes into oceans</p>
          </div>

          <div className="bg-blue-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-green-400">+30%</p>
            <p className="text-gray-300">Increase in ocean acidity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeaSection;
