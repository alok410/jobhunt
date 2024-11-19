
import {Company} from "../models/company.model.js"

 
export const register= async(req,res)=>{
    try {
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"CompanyName not found",
                success:false
            })
        }
        let company = await Company.findOne({name:companyName})  
        if(company){
            return res.status(400).json({
                message:"You can't add same company",
                success:false
            })
        }   ;
        company = await Company.create({
            name:companyName,
            userId :  req.id,
        });

        return res.status(201).json({
            message:"Company created successfully",
            company,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}


export const getCompany= async(req,res)=>{
    try {
        const userId = req.id ;
        const companies = await Company.find({userId});

        if(!companies){
            return res.status(404).json({
                message:"You dont have any registered company",
                success:false
            })
        }
        return res.status(200).json({
            companies,
            success:true,
        })

    } catch (error) {
        console.log(error);
        
    }
}


export const getCompanyById = async(req,res)=>{
    try {

        const companyId = req.params.id;
      console.log(companyId)
        const company = await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                message:"Dont have this company",
                success:false
            })
        }

        return res.status(200).json({
            company,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}



export const updateCompany = async (req, res) => {
    try {
        // console.log("hit");
        
        const { name, description, website, location } = req.body;
        const updateData = { name, description, location, website };

        // Make sure to use await here
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true }).lean();

        if (!company) { 
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        return res.status(200).json({

            message: "Information updated successfully",
            company,
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};
