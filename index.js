import express from 'express'
import ejsLayouts from 'express-ejs-layouts'
const port = 3000;


const server = express();

server.set('view engine', 'ejs');
server.use(express.static('public')); 

server.get("/",(req,res)=>{
    res.render('index');
})

server.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`)
})