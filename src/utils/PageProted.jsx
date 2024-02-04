import React, { useEffect } from 'react'
import { useLoadUserQuery } from '../redux/features/api/apiSlice'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PageProted = ({children}) => {
    const {isLoading} = useLoadUserQuery("")
    const {user} = useSelector((state)=>state.auth);
    const navigate =  useNavigate()

    useEffect(()=>{
        if(!isLoading){
            if(!user){
                navigate("/login")
            }
        }
        console.log("=======")
    },[isLoading,user,navigate])

  return (
    <div>
        {children}
    </div>
  )
}

export default PageProted