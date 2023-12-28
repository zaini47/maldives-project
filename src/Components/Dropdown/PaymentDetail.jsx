import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Reuseable/Hero'
import paymentbg from "../../Assets/Images/payment-details-bg.png"
import Footer from '../Footer/Footer'
import "../../Components/Reuseable/Reuseable.css"
import Button from '../Reuseable/Button'
import "./Payment.css"
import { useNavigate } from 'react-router-dom'

function PaymentDetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const userdetails = [
        { roomtype: "Royal King Room", price: "$40", persons: "5", per_person: "$18.94" }
    ]

    // const faq=[{
    //     id:"1", questions:""
    // }]
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Hero
                image={paymentbg}
                title='Payment Details'
                locat='Booking / Pay'
                height="80vh"
            />

            <div className="container-fluid">
                <div className="container py-4">
                    <div className="row py-4">
                        <div className='py-3 '>
                            <p className='pay-title'>Confirm & Pay</p>
                        </div>
                        <div className="col-sm-12 col-md-8 pe-4">
                            <div className='d-flex justify-content-between align-items-center border-tb py-3'>
                                <div>
                                    <p className='fs-34 ff-p text-d fw-500 m-0'>Pay with</p>
                                </div>
                                <div className='d-flex gap-3 align-items-center'>
                                    <div><p className='fs-18 fw-500 text--light m-0'>Paypal</p></div>
                                    <div>
                                        <Button
                                            batn="pay-btn"
                                            name="Credit Card"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='py-4'>
                                <p className='fs-21 text-d fw-500 ff-p m-0'>Credit Card</p>
                            </div>

                            <div className=' d-flex flex-column gap-42'>
                                <div className=''>
                                    <p className='fs-16 text-d fw-500 ff-p'>CARD NUMBER</p>
                                    <div className='d-flex justify-content-center align-items-center row border-round margin-6'>
                                        <div className='border-r col-3 px-4'>
                                            <p className='fs-18 fw-50 text--light ff-p m-0'>
                                                999999999999
                                            </p>
                                        </div>
                                        <div className='col-8'>
                                            <input
                                                type="text" className="payment w-100 py-16" />
                                        </div>
                                        <div className='col-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                                <path d="M8 16.4998L13.3333 21.8332L24 11.1665" stroke="#1CC3B2" stroke-width="2.66667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div><p className='fs-16 text-d fw-500 ff-p'>CARD HOLDER</p></div>
                                    <div className='w-100 mx-1'>
                                        <input
                                            type='text'
                                            className='border-round w-100 py-16'
                                            placeholder='PHAM TRAN LAN CAM NGOC'
                                        />
                                    </div>

                                </div>

                                <div className='d-flex justify-content-center gap-4  margin-6 mx-2'>
                                    <div className='col-6'>
                                        <div>
                                            <p className='fs-16 text-d fw-500 ff-p'>EXPIRATION DATE</p>
                                        </div>
                                        <div>
                                            <input type="text" className='border-round text--light py-16' placeholder='MM / YY' />
                                        </div>
                                    </div>


                                    <div className='col-6'>
                                        <div>
                                            <p className='fs-16 text-d fw-500 ff-p'>CVC</p>
                                        </div>
                                        <div>
                                            <input type="text" className='border-round text--light py-16' />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center gap-2'>
                                    <div>
                                        <input type="checkbox" id="checkactive" className="custom-checkbox" />
                                    </div>
                                    <div><p className='fs-21 text-d fw-500 ff-p text-center mb-2'>Save Card</p></div>
                                </div>
                                <div>
                                    <Button
                                        name="Confirm and pay"
                                        batn="confirmbtn fs-21 ff-p fw-500"
                                        lists="text-white"
                                        click={() => navigate("/ThankYouForBooking")}
                                    />
                                </div>
                            </div>
                        </div>





                        <div className="col-sm-12 col-md-4 ">
                            <div>
                                <p className='fs-32 fw-500 text-d ff-p'>Price details</p>
                            </div>
                            <div className='row'>
                                <div className="col-8">
                                    <p className='fs-18 fw-400 ff-p text-d'>{userdetails[0].roomtype}</p>
                                </div>
                                <div className='col-4'>
                                    <p className='fs-18 fw-500 text-d ff-p text-end '>{userdetails[0].price}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-8">
                                    <p className='fs-18 fw-400 ff-p text-d'>for {userdetails[0].persons} person</p>
                                </div>
                                <div className='col-4'>
                                    <p className='fs-18 fw-500 ff-p text-d text-end '>
                                        {userdetails[0].per_person}
                                    </p>
                                </div>
                            </div>
                            <div className='row bg--light round d-flex align-item-center'>
                                <div className="col-8">
                                    <p className='fs-18 fw-400 ff-p text-d m-0 py-2'>
                                        Total <span className='fs-18 fw-400 ff-p text--light'>(USD)</span>
                                    </p>
                                </div>
                                <div className='col-4'>
                                    <p className='fs-18 ff-p fw-500 text-d m-0 py-2 text-end' >
                                        $68.94
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className='fs-32 ff-p text-d fw-500 py-3'>Payment Details Proofs</p>
                            </div>

                            <div className='row'>
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button accordion-btn collapsed fs-23 fw-400 text-d ff-p" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Why provide payment proof?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                            <button class="accordion-button  accordion-btn collapsed fs-23 fw-400 text-d ff-p" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                What counts as proof?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingThree">
                                            <button class="accordion-button  accordion-btn collapsed fs-23 fw-400 text-d ff-p" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                How to protect sensitive data?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingFour">
                                            <button class="accordion-button  accordion-btn collapsed fs-23 fw-400 text-d ff-p" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                What if I can't provide proof?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                        </div>
                                    </div>
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

export default PaymentDetail
