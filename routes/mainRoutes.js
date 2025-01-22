const express = require('express');
const router = express.Router();

// Route to render the index page with dynamic data
router.get('/', (req, res) => {
  const data = {
    name: 'Janhavi',
    surname: 'Khonde',
    institute: "SVKM's Institute of Technology",
    skills: [
      { name: 'Python', percentage: '90%' },
      { name: 'Web Design', percentage: '80%' },
      { name: 'Data Structures', percentage: '85%' },
      { name: 'Data Analysis', percentage: '80%' },
      { name: 'HTML/CSS', percentage: '85%' },
      { name: 'JavaScript', percentage: '70%' },
      { name: 'SQL', percentage: '80%' }
    ],
    projects: [
      { title: 'Resume Maker', description: 'A web application for creating professional resumes.' },
      { title: 'Vehicle Documentation', description: 'A platform for storing vehicle documents.' },
      { title: 'Twitter Data Analysis', description: 'Analyze Twitter data using Python.' },
      { title: 'Smart Irrigation System', description: 'An IoT-based automated irrigation system.' }
    ],
    education: [
      { level: '10th', school: 'RCSV', city: 'Dhule', batch: '2019', percentage: '68.08%' },
      { level: '12th', school: 'Jahin Senior College', city: 'Dhule', batch: '2021', percentage: '73.00%' },
      { level: 'BTech', school: 'SVKM\'S', city: 'Dhule', batch: '2025', percentage: '6.8 CGPA' }
    ],
    contact: { address: '12B, Santsena Nagar, Devpur, Dhule', phone: '8605125307', email: 'janhavikhonde20@gmail.com' }
  };

  res.render('index', data); // Render the EJS template with data
});

module.exports = router;
