import React from 'react';
import { Link } from "react-router-dom"
import '../Footer/Footer.css'
import Logo from '../Reuseable/Logo';
// import Button from '../Reuseable/Button';

function Footer() {
  return (
    <>
      <div className="container-fluid hotel-secondary text-white pt-5">
        <div className="container">
          <footer className="py-2">
            <div className="row row_ft_style">
              <div className="col-sm-12 col-md-5 col-lg-3 mb-3 p-0">
                <Logo />
                <ul className="nav flex-column">
                  <li className="set nav-item mb-2"><Link to="/" className="nav-link p-0"><h4>+1 (909) 280-0809</h4></Link></li>
                  <li className="set nav-item mb-2"><Link to="/" className="nav-link p-0"><p className='fnt-set12 animatee' >supportvirtuenetz@gmail.com</p></Link></li>
                  <li className="set nav-item mb-2"><Link to="/" className="nav-link p-0"><p className='fnt-set12 animatee' >856 Cordia Extension Apt. 356, Lake
                    Deangeloburgh, South Africa</p></Link></li>
                </ul>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 mb-3 p-0 mt-3">
                <h5 className='fs-22 pb-5 pad-b-sm'>Our Blog</h5>
                <ul className="nav flex-column py-0">
                  <li className="set nav-item mb-2"><Link to="/" className="nav-link p-0">Freelance Design Tricks How</Link></li>
                  <li className="set nav-item mb-2"><p className='fnt-set12 animatee' ><i class="fa-regular fa-clock"></i> Jan 02, 2019</p></li>
                  <li className="set nav-item mb-2"><Link to="/" className="nav-link p-0">Free Advertising For Your Online</Link></li>
                  <li className="set nav-item mb-2"><p className='fnt-set12 animatee' ><i class="fa-regular fa-clock"></i> Jan 02, 2019</p></li>
                </ul>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-1 mb-3 p-0 mt-3">
                <h5 className='fs-22 pb-5 pad-b-sm m-0'>Links</h5>
                <ul className="nav flex-column py-0">
                  <li className="set nav-item"><Link to="/About" className="nav-link p-0"><p className='fnt-set12 m-0 py-1 animate ' > 
                  <i class="fa-solid fa-caret-right me-1"></i>About Us</p></Link></li>
                  <li className="set nav-item"><Link to="/Rooms" className="nav-link p-0"><p className='fnt-set12 m-0 py-1 animate ' >
                  <i class="fa-solid fa-caret-right me-1"></i>Our Room</p></Link></li>
                  <li className="set nav-item"><Link to="/Blogs" className="nav-link p-0"><p className='fnt-set12 m-0 py-1 animate ' >
                  <i class="fa-solid fa-caret-right me-1"></i>Blogs</p></Link></li>
                  <li className="set nav-item"><Link to="/Faqs" className="nav-link p-0"><p className='fnt-set12 m-0 py-1 animate ' >
                  <i class="fa-solid fa-caret-right  me-1"></i>FAQs</p></Link></li>
                </ul>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4  mb-3 p-0 mt-3">
                <h5 className='fs-22 pb-5 pad-b-sm m-0'>Subscribe Newsletter</h5>
                <p className='fnt-set12 pe-5 animatee' >Subscribe our newsletter gor get notification
                  about new updates.</p>
                <form className='f-input '>
                  <input className='insideInput' placeholder='Enter your email...' />
                  <button className='ft-btn' type='submit'><Link to='/' className='text-white' ><i class="fa-solid fa-paper-plane"></i></Link> </button>
                </form>
              </div>
            </div>
            <hr className='border--top'/>
            <div className="d-flex flex-sm-column flex-md-row justify-content-between pt-2 ">
              <div className="col-sm-12 col-md-10 col-lg-9">
              <p className='fnt-set12' >Copyright ©2023 All rights reserved | This is made with  <span className='animate'> <i class="fa-regular fa-heart"></i> by VirtueNetz</span> </p>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 d-flex">
                <div className="social-ico pe-3"><Link to='https://www.facebook.com/' target='_blank'><i class="fa-brands fa-facebook-f"></i></Link></div>
                <div className="social-ico pe-3"><Link to='https://twitter.com/' target='_blank'><i class="fa-brands fa-twitter"></i></Link></div>
                <div className="social-ico pe-3"><Link to='https://www.instagram.com/' target='_blank'><i class="fa-brands fa-instagram"></i></Link></div>
                <div className="social-ico pe-3"><Link to='https://www.linkedin.com/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></Link></div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Footer;
