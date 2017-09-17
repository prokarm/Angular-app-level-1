const express = require('express');
const port = process.env.PORT||3000;
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.send('index.html');
});


app.listen(port,() => {
    
    console.log(`server is up and running on port ${port}`);
});