const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');


const app = express();
const PORT = 8000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// Define routes (similar to the previous example)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/body',(req, res) => res.sendFile(path.join(__dirname, 'body.html')))
app.get('/sideNavBar', (req, res) => res.sendFile(path.join(__dirname, 'sideNavBar.html')));
app.get('/leftNav', (req, res) => res.sendFile(path.join(__dirname, 'leftNav.html')));
app.get('/toolBar', (req, res) => res.sendFile(path.join(__dirname, 'toolBar.html')));
app.get('/services', (req, res) => res.sendFile(path.join(__dirname, 'public', 'services.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')));
app.get('/navbar', (req, res) => res.sendFile(path.join(__dirname, 'public', 'navbar.html')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
