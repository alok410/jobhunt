import React, { useState } from 'react';
import './UpdateProfileDialog.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '@/redux/authSlice';
import { USER_API_END_POINT } from '@/utils/constant';

const UpdateProfileDialog = ({ open, setOpen }) => {
  
  const [loading,setLoading] = useState(false);
  const {user} = useSelector(store=>store.auth);
  const [input, setInput] = useState({
    fullName:user?.fullname,
    email:user?.email,
    phoneNumber:user?.phoneNumber,
    bio:user?.profile?.bio,
    skills:user?.profile?.skills?.map(skill=>skill),
    file:user?.profile?.resume
  });
  const dispatch = useDispatch();



const changeEventHanlder = (e)=>{
  setInput({...input,[e.target.name]:e.target.value})
}

const fileChangeHandler = (e)=>{
  const file = e.target.files?.[0]
  setInput({...input,file})

}

const submitHandler =async (e)=>{
  e.preventDefault();
  const formData= new FormData();
  formData.append("fullname", input.fullName);
  formData.append("email", input.email);
  formData.append("phoneNumber", input.phoneNumber);
  formData.append("bio", input.bio);
  formData.append("skills", input.skills);
  if(input.file){ 
    formData.append("file",input.file )
  }
  try {  
    console.log(formData);
    
    
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      });
      if(res.data.success){
          dispatch(setUser(res.data.user));
          alert(res.data.message)
      }
      setOpen(false)

  } catch (error) {
    console.log(error);
    console.log(error.response.data.message)
  }
}

  if (!open) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h1>Edit Profile</h1>

        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="fullname">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={input.fullName}
              onChange={changeEventHanlder}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={changeEventHanlder}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHanlder}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={input.bio}
              onChange={changeEventHanlder}
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="bio">Skills</label>
            <textarea
              id="skills"
              name="skills"
              value={input.skills}
              onChange={changeEventHanlder}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contact">Resume</label>
            <input
              type="file"
              id="resume"
              accept='application/pdf'
              name="resume"
              onChange={fileChangeHandler}
              value={input.resume}
              required
            />
          </div>

          <button type="submit">Save Changes</button>
          <button type="button" className="close-btn" onClick={() => setOpen(false)}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileDialog;
