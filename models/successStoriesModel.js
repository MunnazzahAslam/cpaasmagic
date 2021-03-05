const mongoose = require('mongoose')

const successStoriesSchema = new mongoose.Schema({
    TransformX_Vendor_Id: { type: String, ref:'cpaas_vendors'},
    TransformX_Success_Story_Id: { type: String, },
    TransformX_Success_Story_Data_Source: { type: String, },
    TransformX_Success_Story_Post_Year: { type: String, },
    TransformX_Vendor_Name: { type: String, },
    Vendor_Success_Story_Client_Name: { type: String, },
    Vendor_Success_Story_Client_Description: { type: String, },
    Vendor_Success_Story_Name: { type: String, },
    Vendor_Success_Story_Description: { type: String, },
    Vendor_Success_Story_Challenge: { type: String, },
    Vendor_Success_Story_Solution: { type: String, },
    Vendor_Success_Story_Result: { type: String, },
    TransformX_Success_Story_Name: { type: String, },
    TransformX_Success_Story_Description: { type: String, },
    TransformX_Success_Story_Challenge: { type: String, },
    TransformX_Success_Story_Solution: { type: String, },
    TransformX_Success_Story_Result: { type: String, },
    TransformX_Success_Story_Industry: { type: String, },
    TransformX_Success_Story_Region: { type: String, },
    TransformX_Success_Story_Country: { type: String, },
    TransformX_Success_Story_API_Information_Availability: { type: String, },
    Vendor_API_Name_1: { type: String, },
    TransformX_API_Name_1: { type: String, },
    TransformX_API_Id_1: { type: String, },
    Vendor_API_Name_2: { type: String, },
    TransformX_API_Name_2: { type: String, },
    TransformX_API_Id_2: { type: String, },
    Vendor_API_Name_3: { type: String, },
    TransformX_API_Name_3: { type: String, },
    TransformX_API_Id_3: { type: String, },
    Vendor_API_Name_4: { type: String, },
    TransformX_API_Name_4: { type: String, },
    TransformX_API_Id_4: { type: String, },
    Vendor_API_Name_5: { type: String, },
    TransformX_API_Name_5: { type: String, },
    TransformX_API_Id_5: { type: String, },
    Vendor_API_Name_6: { type: String, },
    TransformX_API_Name_6: { type: String, },
    TransformX_API_Id_6: { type: String, },
});

module.exports = mongoose.model("cpaas_success_stories", successStoriesSchema);