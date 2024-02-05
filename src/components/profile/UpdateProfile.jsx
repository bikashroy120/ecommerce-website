
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { useUpdateUserMutation } from '../../redux/features/auth/authApi'
import { toast } from 'react-toastify'
import { useLoadUserQuery } from '../../redux/features/api/apiSlice'

const UpdateProfile = () => {
  const [file,setFile] = useState()
  const {user} = useSelector((state)=>state.auth);
  const [firstname,setFirstName] = useState("")
  const [lastname,setlastname] = useState("")
  const [mobile ,setmobile] = useState("")
  const [city,setcity] = useState("")
  const [loadUser, setLoadUser] = useState(false);
  const [imageLoading,setImageLoading] = useState(false)
  useLoadUserQuery(undefined, { skip: loadUser ? false : true })
  const [updateUser,{isLoading,isSuccess,error}] = useUpdateUserMutation()


  useEffect(()=>{
    if(isSuccess){
      const message = "Profile update success"
      toast.success(message)
      setLoadUser(true)
    }
    if(error){
        toast.error("Profile update failed ! please try again")
    }
  },[isSuccess,error])


  console.log(user)

  useEffect(()=>{
    setFirstName(user?.fastname)
    setlastname(user?.lastname)
    setmobile(user?.mobile)
    setcity(user?.city)
  },[user])

  const imgUrl = `https://api.imgbb.com/1/upload?key=${"45ef102d3f2cc92559a1d8b1191b4237"}`;
  const handleImageUpload = (e) => {
    setImageLoading(true)
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setFile(result.data?.url);
        setImageLoading(false)
      }).catch(error=>{
        setImageLoading(false)
      })
  };

  const updateProfile = async(e)=>{
    e.preventDefault();
    const data = {
      fastname:firstname,
      lastname:lastname,
      mobile,
      city,
      image:file,
    }
      await updateUser(data)
  }


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
                    <input id='id' type="file" onChange={handleImageUpload} style={{display:"none"}} />
                </label>
                {imageLoading && <p>Image uploading...</p>}
                <div style={{height:"80px"}}>
                    {
                      file ? <img src={file} alt="" style={{width:"80px" ,height:"60px"}} /> : 
                      <img src={user.image ? user.image : "images/user.jpg"} style={{width:"80px" ,height:"60px"}} alt="user" />
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
                  <button onClick={updateProfile} type='submit' className='py-2 px-5' style={{border:"none", background:"green",color:"#fff",borderRadius:"10px"}}>
                      {isLoading ? "Loading..." : "Update"}
                    </button>
                </form>
            </div>
        </div>

    </>
  )
}

export default UpdateProfile