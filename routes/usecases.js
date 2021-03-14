const express=require('express');
const router=express.Router();
const cpaas_usecases= require('../models/useCasesModel');

router.route('/').get((req, res) => {
  cpaas_usecases.find().exec(function(error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  })

 
module.exports=router;