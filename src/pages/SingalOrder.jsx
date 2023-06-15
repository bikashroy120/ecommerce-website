import React from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingalOrder } from '../services/profile/profileSlice'

const SingalOrder = () => {
    const parems = useParams()
    const {singalOrder,isLoading,isSuccess} = useSelector((state)=>state.profile)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSingalOrder(parems.id))
    },[parems.id])

    console.log(singalOrder)

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
                    <div className=' d-flex'>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default SingalOrder