import React from 'react'
import { useState } from 'react'
import { FiUploadCloud } from 'react-icons/fi'

const UpdateProfile = () => {
  const [file,setfile] = useState()
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
                      file ? <img src={URL.createObjectURL(file)} alt="" style={{width:"80px" ,height:"60px"}} /> : null
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
                      />

                    </div>
                    <div className="checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Deo"
                        className="form-control"
                        name="LastName"
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
                      />

                    </div>
                    <div className="checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>Phone</label>
                      <input
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                        name="LastName"
                      />
                    </div>
                  </div>
                </form>
            </div>
        </div>

    </>
  )
}

export default UpdateProfile