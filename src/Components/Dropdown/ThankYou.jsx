import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./Payment.css"
import thanks from "../../Assets/Images/thanks-img.png"
import Button from '../Reuseable/Button'
import { useNavigate } from 'react-router-dom'

const ThankYou = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate = useNavigate();
    return (
        <>
            <Navbar
                class="dark nav-light"
                lists="text-white"
                logow=" text-white"
            />


            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-sm-12 col-md-12 col-lg-5">
                            <img src={thanks} className='img-fluid w-sm w-md' alt="" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div>
                                <p className='fs-24 ff-inter fw-600 text-d'>BOOKING SUCCESSFUL</p>
                            </div>
                            <div>
                                <p className='fs-62 ff-inter text-d fw-600'>Thank you for your Booking!</p>
                            </div>

                            <div className='d-flex gap-2'>
                                <div><p className='fs-36 fw-400 ff-inter text-d'>Room number is:</p></div>
                                <div><p className='fs-36 fw-500 ff-inter text-prim'>#123456</p></div>
                            </div>

                            <div>
                                <p className='fs-24 fw-400 ff-inter text--light'>You can cancel your booking any time before reaching.</p>
                            </div>

                            <div className='d-flex gap-3'>
                                <div>
                                    <Button
                                        name="Back"
                                        batn="thanks-back fs-24 ff-inter fw-500"
                                        click={() => navigate("/PaymentDetail")}
                                    />
                                </div>
                                <div>
                                    <Button
                                        name="Continue booking"
                                        batn="thanks-forward fs-24 ff-inter fw-500 text-d"

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ThankYou
