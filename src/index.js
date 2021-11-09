const express = require('express');
const app= express();
const PORT=process.env.port || 3000
const hbs=require('hbs');

const path =require('path');
const staticPath=path.join(__dirname,'../public')
const templatePath=path.join(__dirname,'../template/views')
const partialPath=path.join(__dirname,'../template/partials')

hbs.registerPartials(partialPath)
app.use(express.static(staticPath));
app.set('view engine','hbs'); // setting the views engine
app.set('views',templatePath);
app.get('/',(req,res) => {
    res.render("index",{
        check : 'hasan'
    })
})
app.get('/weather',(req,res) => {
    res.render("weather")
})
app.get('/aboutus',(req,res) => {
    res.render("aboutus")
})


app.get("*",(req,res) => {
    res.send("OOps ! Page not found");
})
app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
})