import React from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingalOrder } from '../services/profile/profileSlice'
import DataTable from 'react-data-table-component'
import Table from '../components/Table'



const SingalOrder = () => {
    const parems = useParams()
    const {singalOrder,isLoading,isSuccess} = useSelector((state)=>state.profile)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSingalOrder(parems.id))
    },[parems.id])

    console.log(singalOrder)

    const columns = [
        {
            name: 'SR.',
            selector: row => <img src={`http://localhost:5000/uploads/${row.feature_image}`} className='' style={{width:"40px", height:"40px",borderRadius:"50%"}} ></img>,
            left:true,
            width: "100px"   
        },
        {
            name: 'PRODUCT NAME',
            selector: row => row.productname,
            width: "400px"    
        },
        {
            name: 'QUANTITY',
            selector: row => row.quantity,
            center:true
        },
        {
            name: 'ITEM PRICE',
            selector: row => row.amount_item,
            center:true
        },
        {
            name: 'AMOUNT',
            selector: row => row.total_price,
            right:true
        },
    ];

  return (
    <>
        <Container class1="checkout-wrapper py-5 home-wrapper-2">
            <div className='invoice_box'>
                <div className='invoice_box_first_div'>
                    <div className='invioce_head'>
                        <div>
                            <h3>INVOICE</h3>
                            <p>Status : <span style={{color:"red"}}>Pending</span></p>
                        </div>
                        <div>
                            <h3>BD Dhop</h3>
                            <p>Bambali, Sédhiou, Senegal</p>
                        </div>
                    </div>
                    <div className=' d-flex justify-content-between pt-3'>
                        <div>
                            <h5>Date</h5>
                            <p>{singalOrder?.createdAt?.slice(0,10)}</p>
                        </div>
                        <div className=''>
                            <h5>INVOICE NO.</h5>
                            <p>#10142</p>
                        </div>
                        <div>
                            <h5>INVOICE TO.</h5>
                            <p>dfdf Bikash</p>
                        </div>
                    </div>
                </div>


                <div className=' py-5 px-3'>
                    <div className=' border-1 border-2 border-black'>
                    <Table columns={columns} data={singalOrder.products} />
                    </div>
                </div>

            </div>
        </Container>
    </>
  )
}

export default SingalOrder