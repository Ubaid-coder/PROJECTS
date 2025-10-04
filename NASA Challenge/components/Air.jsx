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

const AirSection = () => {
  const [airData, setAirData] = useState([]);

  useEffect(() => {
    async function fetchAirData() {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.csv"
        );
        const text = await res.text();

        const rows = text.split("\n");
        const headers = rows[0].split(",");

        // ✅ index find kar lo instead of hardcoding
        const entityIndex = headers.indexOf("country");
        const yearIndex = headers.indexOf("year");
        const co2Index = headers.indexOf("co2");

        const parsed = rows
          .slice(1)
          .map((row) => {
            const cols = row.split(",");

            if (cols[entityIndex] === "World") {
              return {
                year: Number(cols[yearIndex]),
                co2: parseFloat(cols[co2Index]),
              };
            }
            return null;
          })
          .filter(Boolean);

        setAirData(parsed.slice(-100)); // last 100 years only
      } catch (err) {
        console.error("Error fetching CO₂ data:", err);
      }
    }

    fetchAirData();
  }, []);

  return (
    <section id="Air" className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">🌫️ Air Pollution & CO₂ Emissions</h2>
        <p className="text-lg mb-12 text-gray-300">
          Air pollution is a silent killer, with rising CO₂ levels fueling climate change 
          and millions of lives lost every year due to toxic air.
        </p>

        {/* Chart */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={airData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis dataKey="year" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="co2"
                stroke="#ff5555"
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
          <div className="bg-red-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-red-400">420+ ppm</p>
            <p className="text-gray-300">Current CO₂ concentration</p>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-yellow-400">7M</p>
            <p className="text-gray-300">Deaths/year from air pollution</p>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-cyan-400">+50%</p>
            <p className="text-gray-300">Increase since 1990</p>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-green-400">Transport & Industry</p>
            <p className="text-gray-300">Major contributors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirSection;
