import React from 'react'
import {BsCart2} from "react-icons/bs"
import {MdWifiProtectedSetup} from "react-icons/md"
import {CiDeliveryTruck} from "react-icons/ci"
import {GiCheckMark} from "react-icons/gi"
import Table from '../Table'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDashbord } from '../../services/profile/profileSlice'

const Dashbord = () => {
{/* <img src={`http://localhost:5000/uploads/${row.feature_image}`} className='' style={{width:"40px", height:"40px",borderRadius:"50%"}} ></img> */}
        const dispacth = useDispatch()
        const {dashbord} = useSelector((state)=>state.profile)

        console.log(dashbord)

        useEffect(()=>{
            dispacth(getDashbord())
        },[dispacth])

const columns = [
        {
            name: 'Image',
            selector: row => "hi",
            center:true,
            width: "150px"   
        },
        {
            name: 'PRODUCT NAME',
            selector: row => "hi",
            width: "400px"    
        },
        {
            name: 'QUANTITY',
            selector: row => "hi",
            center:true
        },
        {
            name: 'ITEM PRICE',
            selector: row => "hi",
            center:true
        },
        {
            name: 'AMOUNT',
            selector: row => "hi",
            center:true
        },
    ];

  return (
    <div className=''>
        <h5 className='mb-4'>Dashboard</h5>
        <div className='row'>
            <div className='col-12 col-md-6 col-xl-3'>
                <div className=' d-flex align-items-center gap-3 dashbord_Icon'>
                    <div style={{background:""}}>
                         <BsCart2 style={{fontSize:"30px"}}/>
                    </div>
                    <div>
                        <h6 style={{margin:"0",padding:"0"}}>Total Order</h6>
                        <h5 style={{margin:"0",padding:"0"}}>20</h5>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
                <div className=' d-flex align-items-center gap-3 dashbord_Icon'>
                    <div style={{background:"rgb(247, 124, 192)"}}>
                        <MdWifiProtectedSetup style={{fontSize:"30px"}}/>
                    </div>
                    <div>
                        <h6 style={{margin:"0",padding:"0"}}>Pending Order</h6>
                        <h5 style={{margin:"0",padding:"0"}}>20</h5>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
                <div className=' d-flex align-items-center gap-2 dashbord_Icon'>
                    <div style={{background:"rgb(106, 191, 247)"}}>
                        <CiDeliveryTruck style={{fontSize:"30px"}}/>
                    </div>
                    <div>
                        <h6 style={{margin:"0",padding:"0"}}>Processing Orde</h6>
                        <h5 style={{margin:"0",padding:"0"}}>20</h5>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
                <div className=' d-flex align-items-center gap-3 dashbord_Icon' >
                    <div style={{background:"rgb(128, 225, 141)"}}>
                        <GiCheckMark style={{fontSize:"30px"}}/>
                    </div>
                    <div>
                        <h6 style={{margin:"0",padding:"0"}}>Complete Order</h6>
                        <h5 style={{margin:"0",padding:"0"}}>20</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                <Table columns={columns} data={[]}/>
            </div>
        </div>
    </div>
  )
}

export default Dashbord