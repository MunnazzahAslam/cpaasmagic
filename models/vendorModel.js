const mongoose = require('mongoose')


const vendorSchema = new mongoose.Schema({
    
    Api: {type: mongoose.Schema.Types.ObjectId, ref:"cpaas_apis"},
    TransformX_Vendor_Id: { type: String, },
    TransformX_Vendor_Data_Source: { type: String, },
    TransformX_Vendor_Name: { type: String, },
    LinkedIn_Vendor_Overview: { type: String, },
    LinkedIn_Vendor_Website: { type: String, },
    LinkedIn_Vendor_Industry: { type: String, },
    LinkedIn_Vendor_Company_Size: { type: String, },
    LinkedIn_Vendor_Type: { type: String, },
    LinkedIn_Vendor_Founded: { type: String, },
    Gartner_Vendor_Type: { type: String, },
    Gartner_Vendor_Type_Definition: { type: String, },
    Crunchbase_Vendor_Stock_Symbol: { type: String, },
    Crunchbase_Vendor_Founders: { type: String, },
    Crunchbase_Vendor_Operating_Status: { type: String, },
    LinkedIn_Vendor_Headquarters: { type: String, },
    TransformX_Vendor_Headquarter_Region: { type: String, },
    TransformX_Vendor_Headquarter_Country: { type: String, },
    TransformX_Vendor_Headquarter_State_or_Province: { type: String, },
    TransformX_Vendor_Headquarter_City: { type: String, },
    TransformX_Vendor_Operational_Regions: { type: String, },
    TransformX_Vendor_Local_Support_Countries: { type: String, },
    TransformX_Vendor_Cloud_Hosting_Platforms: { type: String, },
    Gartner_Vendor_Scalable_Global_Platform: { type: String, },
    Gartner_Vendor_Voice_Routing_Reach: { type: String, },
    Gartner_Vendor_SMS_Routing_Reach: { type: String, },
    Gartner_Vendor_Messaging_API_Capability: { type: String, },
    Gartner_Vendor_Communications_API_Capability: { type: String, },
    Gartner_Vendor_Advanced_API_Capability: { type: String, },
    Gartner_Vendor_Off_The_Shelf_Modules: { type: String, },
    Gartner_Vendor_Full_SaaS_Solution: { type: String, },
    Gartner_Vendor_Third_Party_IDE: { type: String, },
    Gartner_Vendor_Developer_Ecosystem: { type: String, },
    Gartner_Vendor_Visual_Builder: { type: String, },
    Gartner_Vendor_Partner_Program: { type: String, },
    Gartner_Vendor_Enterprise_Security: { type: String, },
    Gartner_Vendor_Self_Service_API_Capability: { type: String, },
    Gartner_Vendor_Assisted_Support: { type: String, },
    TransformX_Vendor_Level_Of_Availability_And_Resiliency: { type: String, },
    TransformX_Vendor_Integration_Strategy: { type: String, },
    TransformX_Vendor_Implementation_Strategy: { type: String, },
    TransformX_Vendor_Implementation_Timeframe: { type: String, },
    TransformX_Vendor_Implementation_Resource_Strategy: { type: String, },
    TransformX_Vendor_Post_Implementation_Support_Availability: { type: String, },
    TransformX_Vendor_Business_Focused_User_Trainings: { type: String, },
    TransformX_Vendor_Technology_Focused_User_Trainings: { type: String, },
    G2_Vendor_Deployment_Model: { type: String, },
    G2_Vendor_Languages_Supported: { type: String, },
    G2_Vendor_User_Ratings_Ease_Of_Use: { type: String, },
    G2_Vendor_User_Ratings_Quality_Of_Support: { type: String, },
    G2_Vendor_User_Ratings_Ease_Of_Setup: { type: String, },
    TransformX_Vendor_SLA: { type: String, },
    TransformX_Vendor_Support_Services: { type: String, },
    LinkedIn_Vendor_Specialties: { type: String, },
    TransformX_Vendor_Unique_Sell_Point: { type: String, },
    TransformX_Vendor_Primary_Buyer: { type: String, },
    TransformX_Vendor_API_Information_Availability: { type: String, },
    TransformX_Vendor_Use_Case_Information_Availability: { type: String, },
    TransformX_Vendor_Success_Stories_Information_Availability: { type: String, },
    G2_Vendor_Market_Segment: { type: String, },
    G2_Vendor_Free_Trial_Availability: { type: String, },
    TransformX_Vendor_Free_Trial_Link: { type: String, },
    G2_Vendor_Product_Video_Links: { type: String, },
    G2_Vendor_Product_Reviews: { type: String, },
    TransformX_Vendor_Pricing_Option_Availability: { type: String, },
    TransformX_Vendor_Pricing_Model: { type: String, },
    TransformX_Vendor_Pricing_Tiers: { type: String, },
    TransformX_Vendor_Pricing_Based_On_Traffic_Volume: { type: String, },
    Crunchbase_Vendor_Contact_Email: { type: String, },
    TransformX_Vendor_Phone_Number: { type: String, },
    TransformX_Vendor_Social_Media_Twitter: { type: String, },
    TransformX_Vendor_Social_Media_Facebook: { type: String, },
    TransformX_Vendor_Social_Media_LinkedIn: { type: String, },
    TransformX_Vendor_Social_Media_Instagram: { type: String, },
    TransformX_Vendor_Social_Media_YouTube: { type: String, }
})

vendorSchema.index({
    TransformX_Vendor_Name: 'text',
    Crunchbase_Vendor_Founders:'text',
    LinkedIn_Vendor_Industry:'text'

}, {
    weights: {
    TransformX_Vendor_Name: 5,
    Crunchbase_Vendor_Founders: 4,
    LinkedIn_Vendor_Industry: 4
    }
}
)

module.exports = mongoose.model("cpaas_vendors", vendorSchema)