import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import { useLocation, Link } from 'react-router-dom'
import Hero from '../Reuseable/Hero';
import Recent from '../Reuseable/Recent';
import Footer from '../Footer/Footer';
import client1 from "../../Assets/Images/client1.png";
import client2 from "../../Assets/Images/client2.png";
import client3 from "../../Assets/Images/client3.png";
import starico from "../../Assets/Images/rates.jpg";
import InputFeilds from '../Reuseable/InputFeilds'
import Button from '../Reuseable/Button';
import '../Blog/blog.css'
import Banners from "../Reuseable/Banner";          


function Blogdetail() {
    const { state } = useLocation();
    const items = state;
    console.log(items)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const rates = [
        { id: "1", clientimg: client1, title: "Brandon Kelley", detail: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.", date: "27 August,2022", },
        { id: "2", clientimg: client2, title: "Brandon Kelley", detail: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.", date: "27 August,2022", },
        { id: "3", clientimg: client3, title: "Brandon Kelley", detail: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.", date: "27 August,2022", }
    ];
    return (
        
        <>
            <Navbar />
            <Hero
                image={items.items.blogimg}
                title="Cdc Issues Health"
                locat={`${items.items.date}/Days`}
                height="85vh"
            />

            <div className="container-fluid">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 row d-flex   px-5" >
                            <p>{items.items.Ldescrip[1]}</p>
                            <p>{items.items.Ldescrip[2]}</p>
                            <p>{items.items.Ldescrip[3]}</p>
                            <p> {items.items.Ldescrip[4]}</p>
                            <p>{items.items.Ldescrip[6]}</p>
                            <p className='border-bottom'>{items.items.Ldescrip[4]}</p>
                            <div className="row justify-content-between">
                                <div className="col-8 p-0 m-0"><p className='fs-22 ff-p'>Bed, Travel, Hotel</p></div>
                                <div className="col-4 d-flex justify-content-end p-0 m-0 gap-3">
                                    <div className="social-ico"><Link to='https://www.facebook.com/' target='_blank'><i class="fa-brands fa-facebook-f"></i></Link></div>
                                    <div className="social-ico"><Link to='https://twitter.com/' target='_blank'><i class="fa-brands fa-twitter"></i></Link></div>
                                    <div className="social-ico"><Link to='https://www.instagram.com/' target='_blank'><i class="fa-brands fa-instagram"></i></Link></div>
                                    <div className="social-ico"><Link to='https://www.linkedin.com/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></Link></div>
                                </div>
                            </div>
                            <p className='fs-32 ff-p'>03 Comments</p>
                            <div className='border-bottom'>
                                {rates.map((item) => (
                                    <>
                                        <div className="row my-2">

                                            <div className="col-md-3 text-center set-border">
                                                <img src={item.clientimg} className="clientimg img-fluid w-100" alt="client" />
                                            </div>
                                            <div className="col-md-9 mb-4 p-4">
                                                <p>{item.date}</p>
                                                <div className="row-set">
                                                    <div className="title"><p>{item.title}</p></div>
                                                    <div className="icons">
                                                        <img src={starico} alt="" />
                                                    </div>
                                                </div>
                                                <p>{item.detail}</p>
                                            </div>
                                        </div>
                                    </>

                                ))}
                            </div>
                            <div className="container">
                                <div className="row text-start">
                                    <p className='fs-52'>Leave Message</p>
                                    <div className="col-sm-12 col-md-6">
                                        <InputFeilds
                                            placeholder="Your Name"
                                            inputStyle="bloginput1"
                                        />
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <InputFeilds
                                            type="email"
                                            placeholder="Your Email"
                                            inputStyle="bloginput1"
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <textarea
                                            placeholder="Your Message"
                                            className="contactinput2"
                                        />
                                    </div>
                                    <div className="col-sm-12 d-flex justify-content-start align-items-center my-5">
                                        <Button
                                            name="Post Message"
                                            batn="contactBtn"
                                        />
                                    </div>
                                </div>

                            </div >
                        </div>
                        <div className='col-sm-12 col-md-4 '>
                            <Recent />
                        </div>
                    </div>
                </div>
            </div>
            <Banners/>
            <Footer />
        </>
    )
}

export default Blogdetail
