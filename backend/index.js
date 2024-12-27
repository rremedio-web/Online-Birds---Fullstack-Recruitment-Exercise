const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/images', (req, res) => {
  const imagesDir = path.join(__dirname, 'public', 'images');
  
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to access files' });
    }
    
    // Filter files to only include .jpg, .png, and .webp
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const imageUrls = files
      .filter(file => validExtensions.includes(path.extname(file).toLowerCase()))
      .map(file => `http://localhost:${port}/images/${file}`);
    
    res.json(imageUrls);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
