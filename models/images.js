const mongoose = require('mongoose')

const imagesSchema = new mongoose.Schema({
    Vendor:{type: mongoose.Schema.Types.ObjectId, ref:"cpaas_vendors"},
    TransformX_Vendor_Id: { type: String },
    TransformX_Vendor_Logo: { type: String },
    TransformX_Vendor_Banner: { type: String },

});

module.exports = mongoose.model("cpaas_images", imagesSchema)