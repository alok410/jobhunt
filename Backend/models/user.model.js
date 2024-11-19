import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    password: {
        type: String,  // Changed from Number to String
        required: true
    },
    role: {
        type: String,  // Changed from Number to String
        enum: ["student", "recruiter"],  // Corrected typo in "student"
        required: true
    },
    profile: {
        bio: { type: String },
        skills: [{ type: String }],  // Corrected typo from "skils" to "skills"
        resume: { type: String },
        resumeOriginalName: { type: String },  // Corrected typo in field name
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilePhoto: {
            type: String,
            default: ""
        }
    },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
