import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

const Analytics = () => {
  const [productsData, setProductsData] = useState([]);
  const genderChartRef = useRef(null);
  const categoryChartRef = useRef(null);
  useEffect(() => {
    fetch('http://localhost:3030/products')
      .then((response) => response.json())
      .then((data) => setProductsData(data))
      .catch((error) => console.error('Error fetching products data:', error));
  }, []);
console.log(productsData)
  const renderDoughnutChart = (data, elementRef, label) => {
    if (elementRef.current) {
      const ctx = elementRef.current.getContext('2d');
      if (ctx.chart) {
        ctx.chart.destroy();
      }
      ctx.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label: label,
              data: Object.values(data),
              backgroundColor: [
                '#36A2EB',
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#FF9F40',
              ],
            },
          ],
        },
      });
    }
  };

  useEffect(() => {
    const countDistributions = (data, key) => {
      const counts = {};
      data.forEach((product) => {
        const value = product[key];
        counts[value] = counts[value] ? counts[value] + 1 : 1;
      });
      return counts;
    };

    const genderCounts = countDistributions(productsData, 'gender');
    const categoryCounts = countDistributions(productsData, 'category');

    renderDoughnutChart(
      genderCounts,
      genderChartRef,
      'Gender Distribution'
    );
    renderDoughnutChart(
      categoryCounts,
      categoryChartRef,
      'Category Distribution'
    );
  }, [productsData]);

  return (
    <div className="container mx-auto my-5">
      <h1 className="text-xl font-bold text-center mb-4 bg-white pt-5 pb-5">Analytics</h1>
      <div className="flex gap-8">
        <div className="w-1/2 text-center">
          <h2 className="text-xl font-bold mb-4">Gender Distribution</h2>
          <canvas ref={genderChartRef} width="200" height="200"></canvas>
        </div>
        <div className="w-1/2 text-center">
          <h2 className="text-xl font-bold mb-4">Category Distribution</h2>
          <canvas ref={categoryChartRef} width="200" height="200"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
