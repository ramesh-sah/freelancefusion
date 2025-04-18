import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

function EmployerDashboard() {
  const [data, setData] = useState({
    totalRevenue: 8700,
    monthlyProfit: 5900,
    quarterlySales: 3000,
    netIncome: 1200,
    revenueOverview: [
      { name: "Revenue", data: [1000, 2000, 3000, 4000] }
    ],
    productDistribution: [30, 40, 30],
    monthlySales: [
      { name: "Sales", data: [10, 20, 30, 40] }
    ],
    teamPerformance: [
      { name: "Performance", data: [60, 70, 80, 90] }
    ]
  });

  const primary = {
    500: '#3498db',
    700: '#2ecc71',
    300: '#9b59b6'
  };

  useEffect(() => {
    // Fetch data from API here
    // For demonstration purposes, we'll just use the hardcoded data
  }, []);

  return (
    <div id="webcrumbs" className="w-full bg-neutral-100 min-h-screen flex">
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-neutral-950 font-title text-xl">My Dashboard</h1>
          
        </header>
        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow p-4 border border-primary-500">
            <h4 className="text-neutral-950 font-medium mb-4">Total Revenue</h4>
            <h3 className="text-neutral-950 font-title text-2xl mb-6">${data.totalRevenue.toFixed(2)}</h3>
            <div className="flex items-center justify-between gap-2">
              <span className="h-4 w-10 bg-primary-500 rounded-md"></span>
              <span className="h-4 w-10 bg-neutral-200 rounded-md"></span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="text-neutral-950 font-medium mb-4">Monthly Profit</h4>
            <h3 className="text-neutral-950 font-title text-2xl mb-6">${data.monthlyProfit.toFixed(2)}</h3>
            <div className="flex items-center justify-between gap-2">
              <span className="h-4 w-10 bg-primary-500 rounded-md"></span>
              <span className="h-4 w-10 bg-neutral-200 rounded-md"></span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="text-neutral-950 font-medium mb-4">Quarterly Sales</h4>
            <h3 className="text-neutral-950 font-title text-2xl mb-6">${data.quarterlySales.toFixed(2)}</h3>
            <div className="flex items-center justify-between gap-2">
              <span className="h-4 w-10 bg-primary-500 rounded-md"></span>
              <span className="h-4 w-10 bg-neutral-200 rounded-md"></span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="text-neutral-950 font-medium mb-4">Net Income</h4>
            <h3 className="text-neutral-950 font-title text-2xl mb-6">${data.netIncome.toFixed(2)}</h3>
            <div className="flex items-center justify-between gap-2">
              <span className="h-4 w-10 bg-primary-500 rounded-md"></span>
              <span className="h-4 w-10 bg-neutral-200 rounded-md"></span>
            </div>
          </div>
        </section>
        <section className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6 flex-grow">
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-950 font-medium">Revenue Overview</h4>
              <div className="flex justify-between items-center py-4">
                <p className="text-neutral-700">Yearly Progress</p>
                <span className="h-6 w-6 bg-neutral-200 rounded-md"></span>
              </div>
              <Chart
                type="line"
                series={data.revenueOverview}
                height={200}
                width="100%"
                options={{
                  chart: { toolbar: { show: false } },
                  colors: [primary[500]],
                  dataLabels: { enabled: false },
                  xaxis: { categories: ["Q1", "Q2", "Q3", "Q4"] }
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex-grow">
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-950 font-medium">Product Distribution</h4>
              <div className="flex justify-between items-center py-4">
                <p className="text-neutral-700">Overview</p>
                <span className="h-6 w-6 bg-neutral-200 rounded-md"></span>
              </div>
              <Chart
                type="pie"
                series={data.productDistribution}
                height={200}
                width="100%"
                options={{
                  chart: { toolbar: { show: false } },
                  colors: [primary[500], primary[700], primary[300]],
                  labels: ["Product A", "Product B", "Product C"]
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex-grow">
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-950 font-medium">Monthly Sales</h4>
              <div className="flex justify-between items-center py-4">
                <p className="text-neutral-700">By Month</p>
                <span className="h-6 w-6 bg-neutral-200 rounded-md"></span>
              </div>
              <Chart
                type="bar"
                series={data.monthlySales}
                height={200}
                width="100%"
                options={{
                  chart: { toolbar: { show: false } },
                  colors: [primary[500]],
                  xaxis: { categories: ["Jan", "Feb", "Mar", "Apr"] }
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex-grow">
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-950 font-medium">Team Performance</h4>
              <div className="flex justify-between items-center py-4">
                <p className="text-neutral-700">Current Metrics</p>
                <span className="h-6 w-6 bg-neutral-200 rounded-md"></span>
              </div>
              <Chart
                type="radar"
                series={data.teamPerformance}
                height={200}
                width="100%"
                options={{
                  chart: { toolbar: { show: false } },
                  colors: [primary[500]],
                  labels: ["Metric A", "Metric B", "Metric C", "Metric D"]
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EmployerDashboard;