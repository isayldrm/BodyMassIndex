const electron = require('electron');
const app = electron.app;
const path= require('path');
const url = require('url');
const BrowserWindow = electron.BrowserWindow;
var mainWindow;

app.on('ready',function(){
    mainWindow = new BrowserWindow({width:500, title:"BMI Calculator"});
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,'bmiCalculator.html'),
        protocol:'file:',
        slashes:true
    }));
});