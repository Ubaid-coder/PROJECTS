"use client";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ForestSection() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchForestData() {
      try {
        const res = await fetch(
          "https://api.worldbank.org/v2/country/WLD/indicator/AG.LND.FRST.ZS?format=json&date=1990:2020&per_page=100"
        );
        const json = await res.json();

        const dataArr = json[1];


        const filtered = dataArr
          .filter((item) => item.value !== null)
          .map((item) => ({
            year: item.date,
            value: item.value,
          }))
          .sort((a, b) => Number(a.year) - Number(b.year));

        const labels = filtered.map((d) => d.year);
        const values = filtered.map((d) => d.value);

        setChartData({
          labels,
          datasets: [
            {
              label: "Forest area (31.2% of land area)",
              data: values,
              backgroundColor: "rgba(34,197,94,0.6)",
              borderColor: "rgba(34,197,94,1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching forest data:", err);
      }
    }

    fetchForestData();
  }, []);

  if (!chartData) {
    return <div className="text-white">Loading forest data...</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#fff" } },
      title: {
        display: true,
        text: "Global Forest Cover (1990–2020)",
        color: "#fff",
      },
    },
    scales: {
      x: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <section id="Forest" className="flex flex-col py-16 bg-gradient-to-b  text-white">


      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        🌲 The Lungs of Our Planet Are Disappearing
      </h2>

      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-center">
        Forests play a vital role in regulating the Earth's climate, absorbing
        CO₂, and sustaining wildlife. Yet, millions of hectares are being
        lost every year due to deforestation.
      </p>

      <div className="bg-slate-600 p-6 rounded-2xl shadow-lg mb-12 max-w-4xl ">
        <Bar data={chartData} options={options} />
      </div>

      <div className="mt-12 text-center space-y-4">
        <p className="text-lg md:text-xl text-gray-300">
          📉 Global forest area as a percentage of land has been declining.
        </p>
        <p className="text-lg md:text-xl font-semibold text-red-400">
          ⚠️ Protecting forest cover is critical for climate stability.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <p className="text-3xl font-bold text-yellow-400">420M</p>
          <p className="text-gray-300">Hectares of forest lost since 1990</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <p className="text-3xl font-bold text-red-400">10M+</p>
          <p className="text-gray-300">Hectares lost annually since 2015</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <p className="text-3xl font-bold text-green-400">30%</p>
          <p className="text-gray-300">CO₂ emissions absorbed by forests</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <p className="text-3xl font-bold text-blue-400">50%</p>
          <p className="text-gray-300">Of Earth’s biodiversity depends on forests</p>
        </div>
      </div>



    </section>
  );
}
