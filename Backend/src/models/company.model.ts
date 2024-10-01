import mongoose, { Schema , model } from "mongoose";

interface ICompany {
    name : String,
    description? : String,
    website?  : String ,
    location? : String ,
    logo? : String ,
    userId : mongoose.Schema.Types.ObjectId,
}
const companySchema = new Schema<ICompany>({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String, 
    },
    website:{
        type:String 
    },
    location:{
        type:String 
    },
    logo:{
        type:String // URL to company logo
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})
export const Company = model<ICompany>("Company", companySchema);