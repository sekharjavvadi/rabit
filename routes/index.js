const express = require('express')
const router = express.Router()
const { ensureAuth,ensureGuest }=require('../middleware/auth')

// load config
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'});

// login/landing page
//get /
// router.get('/',ensureGuest,(req,res) =>
// {
//     res.render('login',{
//         layouts:'login'
//     })
// })
router.get('/',ensureGuest,(req,res) =>
{
    res.render('index')
})

// router.get('/courses',(req,res)=>
// {
//     res.render('course-list')
// })

// dashboard
// get/dashboard
router.get('/dashboard',ensureAuth,async (req,res)=>
{
    res.render('index2',{
        displayname:req.user.displayname,
        firstname:req.user.firstname,
        lastname:req.user.lastname,
        googleid:req.user.googleid,
        image:req.user.image,
    })
})

module.exports=router