import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Reuseable/Hero';
import '../About/About.css'
import HomeAImg from "../../Assets/Images/home-about-section.png";
import Video from '../Reuseable/Video';
import Footer from '../Footer/Footer';
import view1 from "../../Assets/Images/1.jpg";
import view2 from "../../Assets/Images/2.png";
import view3 from "../../Assets/Images/3.jpg";
import view4 from "../../Assets/Images/4.jpg";
import Aboutimg from "../../Assets/Images/bg-about.png"
import Testominal from '../Reuseable/Testominal';
import Banners from "../Reuseable/Banner";

function About() {
    return (
        <>
            <Navbar />
            <Hero
                hero='hero4'
                title='About Us'
                locat='HOTEL / About'
                image={Aboutimg}
            />
            <div className='container-fluid'>
                <div className='container '>
                    <div className="row pt-5">
                        <div className="col-sm-12 col-md-6 ">
                            <div><p className='fs-42 ff-p fw-500 text-d'>20 Years Of Experience</p></div>

                            <div>
                                <p className='ff-p fw-400 fs-20 text--light set1'>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste. Lorem Ipsum available.
                                </p>
                            </div>

                            <div>
                                <p className='ff-p fs-16 fw-400 text--light'>
                                    Manager: <span className='text-prim'>
                                        Farhan Magsi
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p className='ff-c fs-22 fw-400 text--light'>
                                    Farhan Magsi
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img src={HomeAImg} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <Video />
            {/* Testominal section  */}
            <Testominal />
            <div className="container-fluid">
                <div className="textt">
                    <p className='fnt-set18 text-center'>Our Top <br /> Services & Entertainment </p>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center py-5">
                        <div className="col-sm-12 col-md-3 m-0 p-0 o-h">
                            <img src={view1} alt="" className="img-fluid " />
                        </div>
                        <div className="col-sm-12 col-md-3 m-0 p-0 o-h">
                            <img src={view2} alt="" className="img-fluid " />
                        </div>
                        <div className="col-sm-12 col-md-3 m-0 p-0 o-h">
                            <img src={view3} alt="" className="img-fluid " />
                        </div>
                        <div className="col-sm-12 col-md-3 m-0 p-0 o-h">
                            <img src={view4} alt="" className="img-fluid " />
                        </div>
                    </div>

                </div>
            </div>
            <Banners/>
            <Footer />
        </>
    )
}

export default About
