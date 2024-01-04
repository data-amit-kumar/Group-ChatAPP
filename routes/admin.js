const express= require('express');
const { start } = require('repl');
const fs=require('fs');

const router= express.Router();
let username;
router.get('/login', (req, res, next) => {
    res.send('<form action="/" method="POST" onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)"><input id="username" type="text" name="title"><button type="submit">Login</button></form>');
});


router.get('/',(req,res,next)=>{
    fs.readFile('messages.txt',(err, data)=>{
        if(err){
            console.log(err);
            data='No chat exists';
        }
        res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"><input id="message" type="text" name="message"><input id="username" type="hidden" name="title"><button type="submit">Chat</button></form>`);
    })
   
})

router.post('/', (req, res, next) => {
    const message = req.body.message;
    username=req.body.title;
    const data = `${username}: ${message}\n`;
    fs.writeFile('messages.txt', data,{flag:'a'}, (err) => {
        if (err) throw err;
    });

    res.redirect('/');
});

module.exports=router;