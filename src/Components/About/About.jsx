import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Reuseable/Hero';
import '../About/About.css'
import HomeAImg from "../../Assets/Images/home-about-section.png";
import Video from '../Reuseable/Video';
import Footer from '../Footer/Footer';
import Aboutimg from "../../Assets/Images/bg-about.png"
import Testominal from '../Reuseable/Testominal';
import Banners from "../Reuseable/Banner";
import { Link } from 'react-router-dom';

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
                    <div className="row f-m-column pt-5">
                        <div className="col-sm-12 col-md-12 col-lg-6 ">
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
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <img src={HomeAImg} className='img-fluid w-md' alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <Video />
            {/* Testominal section  */}
            <Testominal />
            <div className="container-fluid">
                <div className="row d-flex justify-content-center py-5">
                    <div className="col-sm-12 col-md-3 m-0 p-0 o-h">
                        <div className="view1">
                            <div className="overlay-text">
                                <p className=" fs-16 ff-w py-1 m-0">
                                    Entertaiment
                                </p>
                                <p className="py-1 m-0 fs-20 ff-w">Painting Rooms</p>
                                <div className="view-btn">
                                    <Link to="/Rooms" className="exp-btn">Explore Now<i className="fa-solid fa-arrow-right ms-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 m-0 p-0 o-h">
                        <div className="view2">
                            <div className="overlay-text">
                                <p className=" fs-16 ff-w py-1 m-0">
                                    Entertaiment
                                </p>
                                <p className="py-1 m-0 fs-20 ff-w">Painting Rooms</p>
                                <div className="view-btn">
                                    <Link to="/Rooms" className="exp-btn">Explore Now<i className="fa-solid fa-arrow-right ms-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 m-0 p-0 o-h">
                        <div className="view3">
                            <div className="overlay-text">
                                <p className=" fs-16 ff-w py-1 m-0">
                                    Entertaiment
                                </p>
                                <p className="py-1 m-0 fs-20 ff-w">Painting Rooms</p>
                                <div className="view-btn">
                                    <Link to="/Rooms" className="exp-btn">Explore Now<i className="fa-solid fa-arrow-right ms-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 m-0 p-0 o-h">
                        <div className="view4">
                            <div className="overlay-text">
                                <p className=" fs-16 ff-w py-1 m-0">
                                    Entertaiment
                                </p>
                                <p className="py-1 m-0 fs-20 ff-w">Painting Rooms</p>
                                <div className="view-btn">
                                    <Link to="/Rooms" className="exp-btn">Explore Now<i className="fa-solid fa-arrow-right ms-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Banners />
            <Footer />
        </>
    )
}

export default About
