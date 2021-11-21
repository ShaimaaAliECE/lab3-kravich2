const getSlot = require('./getSlot'); 
const express = require('express');

const app = express();

app.use(express.static('static'))//all information in static folder

app.get('/admin', (req, res) => {
    res.redirect("admin.html");
});
app.get('/guest', (req, res) => {
    res.redirect("guest.html");
});
app.get('/previous', (req, res) => {
    // attach all previous submissions
    let content = getSlot();//previous submissions are attached
    res.send(content);
});
app.listen(90);