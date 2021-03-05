const express=require('express');
const router=express.Router();
const cpaas_success_stories= require('../models/successStoriesModel');

router.route('/').get((req, res) => {
    cpaas_success_stories.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})


module.exports=router;