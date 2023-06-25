import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { base_url, image_url } from '../../utils/baseUrl'
import { config2 } from '../../utils/axiosconfig'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const UpdateProfile = () => {
  const [file,setfile] = useState()
  const [profile,setProfile] = useState()
  const {user} = useSelector((state)=>state.auth);
  const [firstname,setFirstName] = useState("")
  const [lastname,setlastname] = useState("")
  const [mobile ,setmobile] = useState("")
  const [city,setcity] = useState("")

  const updateProfile = async()=>{
      const res = await axios.post(`${base_url}/user/one`,config2)
      setProfile(res)
  }

  console.log(user)

  useEffect(()=>{
    setFirstName(user?.firstname)
    setlastname(user?.lastname)
    setmobile(user?.mobile)
    setcity(user?.city)
  },[user])


  return (
    <>

        <div className='update_profile'>
            <div className="row">
                <form action="">

                <div className=''>
                <label htmlFor="id" className=' Update_Profile'>
                    <FiUploadCloud className=' text-[45px] text-green-600' />
                    <h2 className='text-[20px] font-medium'>Drag your images here</h2>
                    <p>(Only *.jpeg, *.webp and *.png images will be accepted)</p>
                    <input id='id' type="file" onChange={(e)=>setfile(e.target.files[0])} style={{display:"none"}} />
                </label>
                <div style={{height:"80px"}}>
                    {
                      file ? <img src={URL.createObjectURL(file)} alt="" style={{width:"80px" ,height:"60px"}} /> : 
                      <img src={user.image ? image_url+'uploads/'+user.image : "images/user.jpg"} style={{width:"80px" ,height:"60px"}} alt="user" />
                    }
                </div>
                </div>

                <div className="Chakeout_box ">
                      <div className=" checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>First Name</label>
                      <input
                        type="text"
                        placeholder="Jone"
                        className="form-control"
                        name="FirstName"
                        value={firstname}
                        onChange={(e)=>setFirstName(e.target.value)}
                      />

                    </div>
                    <div className="checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Deo"
                        className="form-control"
                        name="LastName"
                        value={lastname}
                        onChange={(e)=>setlastname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="Chakeout_box">
                      <div className=" checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>City</label>
                      <input
                        type="text"
                        placeholder="City"
                        className="form-control"
                        name="FirstName"
                        value={city}
                        onChange={(e)=>setcity(e.target.value)}
                      />

                    </div>
                    <div className="checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>Phone</label>
                      <input
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                        name="LastName"
                        value={mobile}
                        onChange={(e)=>setmobile(e.target.value)}
                      />
                    </div>



                  </div>
                  <button type='submit' className='py-2 px-5' style={{border:"none", background:"green",color:"#fff",borderRadius:"10px"}}>
                      Update
                    </button>
                </form>
            </div>
        </div>

    </>
  )
}

export default UpdateProfile