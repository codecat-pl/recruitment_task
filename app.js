const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public'));

app.post('/login', (req,res)=>{
    if(req.body.email === 'test@test.pl' && req.body.password === 'Password1'){
        res.json({status: 'ok', message: ''});
    }
    else {
        res.json({status: 'error', message: 'Wrong email or password!'});
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})

