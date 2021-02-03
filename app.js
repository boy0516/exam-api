const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// http://127.0.0.1:3000/
app.get('/', (req, res) => res.send('Hello, Nodejs!'))
// http://127.0.0.1:3000/welcom?name=choi
app.get('/service',(req, res)=>{
    var user_status = req.param('status')
    //res.send('Hi,ther.welcome to the nodejs. [' + user_status +')')
    res.send('The system is running [Status: : ON]')
})
app.get('/check',(req, res)=>res.send('Example app listen on port 3000'))
app.listen(port, () => console.log('Example app listen on port 3000'))