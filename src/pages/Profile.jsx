import React, { useEffect } from 'react'
import {RxDashboard} from "react-icons/rx"
import {GrUnorderedList} from "react-icons/gr"
import {FiSettings} from "react-icons/fi"
import {AiOutlineUnlock} from "react-icons/ai"
import Container from '../components/Container'
import { useState } from 'react'
import Dashbord from '../components/profile/Dashbord'
import Order from '../components/profile/Order'
import UpdateProfile from '../components/profile/UpdateProfile'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const Profile = () => {
    const naviget =  useNavigate()
    const dispacth = useDispatch()
    const [profileActive,setprofileActive] = useState(1)
    const profileData = [
        {
            id:1,
            title:"Dashboard",
            icons:<RxDashboard/>
        },
        {
            id:2,
            title:"My Orders",
            icons:<GrUnorderedList/>
        },
        {
            id:3,
            title:"Update Profile",
            icons:<FiSettings/>
        },
        // {
        //     id:4,
        //     title:"Change Password",
        //     icons:<MdOutlineRequestPage/>
        // },
        // {
        //     id:5,
        //     title:"Logout",
        //     icons:<AiOutlineUnlock/>
        // },
    ]



    const logOut = ()=>{
        localStorage.clear()
        naviget("/")
        toast.success("Log out success")
    }


  return (
    <>
        <Container class1="checkout-wrapper py-5 home-wrapper-2">
            <div className='row'>
                <div className=' col-12 col-md-3 mb-3'>
                    <div className='py-5 px-4 bg-white d-flex flex-column gap-2 rounded-3 shadow-md'>
                        {
                            profileData.map((item,i)=>{
                                return(
                                    <div onClick={()=>setprofileActive(item.id)} key={i} className={`d-flex align-content-center gap-2 p-3 rounded-3 profile_left_bg ${item.id===profileActive ? "profile_active" : ""}`}>
                                        {item.icons}
                                        <h6 style={{margin:"0", padding:"0"}}>{item.title}</h6>
                                    </div>
                                )
                            })
                        }
                    <div onClick={()=>logOut()} className={`d-flex align-content-center gap-2 p-3 rounded-3 profile_left_bg `}>
                        <AiOutlineUnlock/>
                        <h6 style={{margin:"0", padding:"0"}}>Logout</h6>
                    </div>
                    </div>
                </div>
                <div className=' col-12 col-md-9 '>
                    <div className=' bg-white rounded-3 px-4 py-4'>
                        {
                            profileActive === 1 && <Dashbord />
                            
                        }

                        {
                            profileActive === 2 && <Order />
                        }

                        {
                            profileActive === 3 && <UpdateProfile />
                        }
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Profile