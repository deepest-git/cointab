contoller = require('../controllers/UserController');
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile('assets/user.html',{root:'./'});
});

router.get('/all',(req,res)=>{
    contoller.getAllUsers(data=>res.json(data));
});

router.get('/delete',(req,res)=>{
    contoller.deleteUser(req.query.id,data=>res.send(data));
});

router.get('/addUser',(req,res)=>{
    contoller.addUser(req.query,data=>res.send(data));
});

router.get('/edit',(req,res)=>{
    contoller.edit(req.query,data=>res.send(data))
});

router.get('/results',(req,res)=>{
    contoller.results(req.query,data=>res.send(data))
});

router.get('/reinitDB',(req,res)=>{
    contoller.reinitDB(data=>res.send(data))
});

router.post('/login',(req,res)=>{
    // res.send(req.body);
    contoller.login(req.body,data=>{res.send(data);})
});

module.exports = router;