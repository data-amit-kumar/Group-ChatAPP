const express= require('express');

const router= express.Router();

router.get('/', (req, res, next) => {
    res.send('<form action="/" method="POST" onsubmit="document.getElementById(\'user\').value = localStorage.getItem(\'username\')"><input id="user" type="text" name="user"><button type="submit">Login</button></form>');
});


module.exports=router;