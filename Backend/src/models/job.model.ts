import mongoose, { Schema , model } from "mongoose";
interface IJob {
    title : string,
    description : string ,
    requirements? : [] ,
    salary  :  number ,
    experienceLevel : number ,
    location : string ,
    position : number ,
    jobType : string ,
    company : mongoose.Schema.Types.ObjectId,
    created_by : mongoose.Schema.Types.ObjectId
    applications : []

}

const jobSchema = new Schema<IJob>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
    },
    experienceLevel:{
        type:Number,
        required:true,
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
},{timestamps:true});
export const Job = model<IJob>("Job", jobSchema);