const express=require('express');
const router=express.Router();
const {Insert,View,Delete,Update,Register,View1}=require('../controller/company')

router.post('/insert',Insert)
router.get('/view/:id',View)
router.get('/view',View1)
router.delete('/delete/:id',Delete)
router.put('/update/:id',Update)
router.post('/register',Register)
module.exports=router;
