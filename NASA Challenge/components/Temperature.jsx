"use client";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TemperatureSection() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/temperature");
        const csvText = await res.text();

        const lines = csvText.split("\n");

        const years = [];
        const temps = [];


        for (let i = 1; i < lines.length; i++) {
          const row = lines[i].split(",");
          if (row.length > 1) {
            const year = row[0].trim();
            const annual = row[row.length - 1]?.trim();
            if (year && !isNaN(Number(annual))) {
              years.push(year);
              temps.push(Number(annual));
            }
          }
        }

        setChartData({
          labels: years,

          datasets: [
            {
              label: "Annual Mean Temp Anomaly (°C)",
              data: temps,
              borderColor: "rgba(255,99,132,1)",
              backgroundColor: "rgba(255,99,132,0.2)",
              fill: true,
              tension: 0.001,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching:", err);
      }
    }

    fetchData();
  }, []);


  if (!chartData) {
    return <div className="text-white">Loading temperature data...</div>;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { labels: { color: "#fff" } },
      title: { display: true, text: "Global Annual Temperature Anomalies (1880–Present)", color: "#fff" },
    },
    scales: {
      x: { ticks: { color: "#aaa" } },
      y: { ticks: { color: "#aaa" } },
    },
  };

  return (
    <section
      id="Temperature"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center py-10 px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
        Global Temperature Trends
      </h2>
      <p className="max-w-2xl text-gray-300 mb-8 text-center">
        Real data from NASA’s GISS (Annual Global Land-Ocean Temperature Index): how temperature anomalies have changed since 1880.
      </p>

      <div className="w-[70vw] my-32 self-start bg-gray-800 p-4 rounded-xl shadow-lg">
        <Line data={chartData} options={options} />
      </div>

      <div className="mt-10 self-end grid grid-cols-1 gap-6">
        {/* Card 1 */}
        <div className="cursor-pointer bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <p className="text-lg md:text-xl text-gray-300">
            📈 Global temperatures have been rising significantly since the late 20th century.
          </p>
        </div>

        {/* Card 2 */}
        <div className="cursor-pointer bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <p className="text-lg md:text-xl font-semibold text-red-400">
            🔥 2024 is officially the hottest year on record.
          </p>
        </div>

        {/* Card 3 */}
        <div className="cursor-pointer bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <p className="text-lg md:text-xl text-gray-300">
            🌍 This increase is closely linked to greenhouse gases, deforestation, and industrial activity.
          </p>
        </div>

        {/* Card 4 */}
        <div className="cursor-pointer bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <p className="text-lg md:text-xl text-gray-300">
            🌡️ The last decade (2014–2024) has been the hottest decade ever recorded.
          </p>
        </div>
      </div>

      <div className="my-32 sm:w-2xl  self-start rounded-xl overflow-hidden shadow-lg">
        <video
          src="/assets/temperatureVideo.mp4"  
          autoPlay={true}
          controls
          playsInline
          className="w-full h-auto"
        />
      </div>







    </section>
  );
}

export default TemperatureSection;
