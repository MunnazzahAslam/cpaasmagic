const express=require('express');
const router=express.Router();
const cpaas_apis= require('../models/apiModel');

router.route('/').get((req, res) => {
  cpaas_apis.find().populate('Vendor').exec(function(error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  })

module.exports=router;