import React from "react";
import { Link,useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const [login,{isSuccess,isLoading,error}] =useLoginMutation()
  const navigate = useNavigate();
  const [data,setData]=useState({
    email:"bikash@gmail.com",
    password:"123456"
  })


  useEffect(()=>{
    if(isSuccess){
      const message = "login success"
      toast.success(message)
      navigate("/")
    }
    if(error){
        toast.error("invalid email and password")
    }
  },[isSuccess,error])


const signup = async(e)=>{
  e.preventDefault();
  if(data.email==="" || data.password===""){
    toast.error("Please fill all data and try again")
  }else{
    await login(data)
  }
}

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" 
                  value={data.email}
                  onChange={(e)=>setData({...data,email:e.target.value})}
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e)=>setData({...data,password:e.target.value})}
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button onClick={signup}  className="button border-0" type="submit">
                     {isLoading ? "lodding.." :"login"} 
                    </button>
                  </div>
                  <div className=" d-flex pt-3 align-items-center justify-content-center">
                      <span>Dont have an account? <Link to="/signup" className="text_color"> SignUp</Link></span>
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

export default Login;
