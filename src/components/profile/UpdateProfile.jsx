import React from 'react'

const UpdateProfile = () => {
  return (
    <>

        <div className='update_profile'>
            <div className="row">
                <form action="">

                <div>
                    
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
                </form>
            </div>
        </div>

    </>
  )
}

export default UpdateProfile