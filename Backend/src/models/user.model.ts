import { Schema, model  } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
    fullname:   String,
    email:      String,
    phoneNumber:   Number,
    password: String,
    role: 'employee' | 'employer',
    profile : {
        bio:String,
        skills:[String],
        resume:String, // URL to resume file
        resumeOriginalName:String,
        company: string , 
        profilePhoto: String,
    }
}
// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>( { 
    fullname: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true,
    unique: true
},
phoneNumber: {
    type: Number,
    required: true
},
password:{
    type:String,
    required:true,
},
role:{
    type:String,
    enum:['student','recruiter'],
    required:true
},
profile:{
    bio:{type:String},
    skills:[{type:String}],
    resume:{type:String}, // URL to resume file
    resumeOriginalName:{type:String},
    company:{type: Schema.Types.ObjectId, ref:'Company'}, 
    profilePhoto:{
        type:String,
        default:""
    }
},
} , {timestamps:true});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

export default User