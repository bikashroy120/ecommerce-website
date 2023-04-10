import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Signup = () => {
  const dispatch = useDispatch()
  const [data,setData]=useState({
    fastname:"",
    lastname:"",
    email:"",
    mobile:"",
    password:""
  })

const signup = ()=>{
  dispatch()
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
              <form action="" className="d-flex flex-column gap-15">
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
                    <button className="button border-0">Sign Up</button>
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
