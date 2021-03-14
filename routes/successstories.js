const express=require('express');
const router=express.Router();
const cpaas_success_stories= require('../models/successStoriesModel');

/*router.route('/').get((req, res) => {
  cpaas_success_stories.aggregate([
    {
      '$lookup': {
        'from': 'cpaas_images', 
        'localField': 'TransformX_Vendor_Id', 
        'foreignField': 'TransformX_Vendor_Id', 
        'as': 'cpaas_images'
      }
    }
]).exec((error, data)=>{
  if (error) {
      console.log("error" ,error)
  }
  else{
    res.json(data);
  }
});
})
*/
router.route('/').get((req, res) => {
  cpaas_success_stories.find().exec(function(error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  })
 

module.exports=router;