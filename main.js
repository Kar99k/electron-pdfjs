'use strict';

const qs = require("querystring");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path'); // Import the 'path' module

var mainWindow = null;

// Use a relative path for the PDF file
const pdfURL = path.join(__dirname, 'pdfjs','web', 'example.pdf'); // Adjust as necessary

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
    },
  });

  const param = qs.stringify({ file: pdfURL });

  // Use the correct relative path to load the PDF.js viewer
  mainWindow.loadURL('file://' + path.join(__dirname, 'pdfjs', 'web', 'viewer.html') + '?' + param);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
