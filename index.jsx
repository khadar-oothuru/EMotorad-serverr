// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Mock data
const dashboardData = {
  metrics: {
    revenue: { value: 2129430, change: 1.52 },
    transactions: { value: 1520, change: 1.12 },
    uses: { value: 9721, change: 1.14 },
    users: { value: 9721, change: 1.42 }
  },
  databases: ['Transactions', 'Schedules', 'Users', 'Settings'],
  activities: {
    period: 'May - June 2021',
    weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [500, 400, 300, 200, 100, 0]
  },
  products: {
    period: 'May - June 2021',
    items: [
      { name: 'Basic Tees', percentage: 55 },
      { name: 'Custom Short Pants', percentage: 31 },
      { name: 'Super Hoodies', percentage: 16 }
    ]
  }
};

// Routes
app.get('/api/metrics', (req, res) => {
  res.json(dashboardData.metrics);
});

app.get('/api/databases', (req, res) => {
  res.json(dashboardData.databases);
});

app.get('/api/activities', (req, res) => {
  res.json(dashboardData.activities);
});

app.get('/api/products', (req, res) => {
  res.json(dashboardData.products);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});