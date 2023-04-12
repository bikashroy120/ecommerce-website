import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../services/auth/authSlice";
import { useEffect } from "react";

const Login = () => {
const {user,isSuccess,isLoading,message} = useSelector((state)=>state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [data,setData]=useState({
    email:"",
    password:""
  })

const signup = (e)=>{
  e.preventDefault();
  console.log(data)
  dispatch(login(data))
}


useEffect(()=>{
  if(isSuccess && user && message){
    navigate(-1)
  }
},[isSuccess, user, message])


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
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
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
