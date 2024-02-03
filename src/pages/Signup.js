import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../redux/features/auth/authApi";
const Signup = () => {
  const [register,{isLoading,isSuccess,error}] = useRegisterMutation()
  const dispatch = useDispatch()
  const navigate =  useNavigate()
  const [data,setData]=useState({
    fastname:"",
    lastname:"",
    email:"",
    mobile:"",
    password:""
  })

  useEffect(()=>{
    if(isSuccess){
      const message = "Register success"
      toast.success(message)
      navigate("/login")
    }
    if(error){
        toast.error("register failed ! please try again")
    }
  },[isSuccess,error])

const signup = async(e)=>{
  e.preventDefault();

  console.log(data)

  if(data.fastname==="" || data.lastname==="" || data.email==="" || data.mobile==="" || data.password===""){
    toast.error("please fill all data and try again!")
  }else{
    await register(data)
  }
}


  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="First Name" value={data.fastname} onChange={(e)=>setData({...data,fastname:e.target.value})} />
                <CustomInput type="text" name="lastname" placeholder="Last Name" 
                  value={data.lastname}
                  onChange={(e)=>setData({...data,lastname:e.target.value})}
                />
                <CustomInput type="email" name="email" placeholder="Email" 
                value={data.email}
                onChange={(e)=>setData({...data,email:e.target.value})}
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={data.mobile}
                  onChange={(e)=>setData({...data,mobile:e.target.value})}
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e)=>setData({...data,password:e.target.value})}
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" onClick={signup} className="button border-0">{isLoading ? "Loading..." :"Sign Up"}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
