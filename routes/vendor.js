const express=require('express');
const router=express.Router();
const cpaas_vendors= require('../models/vendorModel');


router.route('/').get((req, res) => {
  cpaas_vendors.find().exec(function(error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  })
    

module.exports=router;