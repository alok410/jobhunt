import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
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
        location: {
                type: String,
                required: true
        },
        jobtype: {
                type: String,
                required: true
        },
        experience: {
                type: Number,
                required: true
        },
        position: {
                type: Number,
                required: true
        },

        company: {
                ref: 'Company',
                type: mongoose.Schema.Types.ObjectId,
                required: true
        },

        created_by: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
        },
        application: [
                {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Application'
                }
        ]

}, { timestamps: true });
export const Job = mongoose.model("Job", jobSchema)