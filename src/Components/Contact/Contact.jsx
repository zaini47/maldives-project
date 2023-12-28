import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Reuseable/Hero';
import Contactimg from '../../Assets/Images/contact.jpg'
import Footer from '../Footer/Footer';
import '../Contact/Contact.css';
import InputFeilds from '../Reuseable/InputFeilds'
import Button from '../Reuseable/Button';
import Banners from "../Reuseable/Banner";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        title='Contact Us'
        locat='Home / Contact Us'
        image={Contactimg}
      />
      <div className="container main">
          <div className="row pe-5">
            <div className="col-sm-12 col-md-3 text-center">
              <div className="contact-ico">
                <i class="fa-solid fa-phone"></i>
                <p className="fs-34 p-0 m-0">Phone</p>
                <p className="fsc-16 mb-3">+1 (909) 280-0809</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <div className="contact-ico">
                <i class="fa-solid fa-location-dot"></i>
                <p className="fs-34 p-0 m-0">Address</p>
                <p className="fsc-16 mb-3">Iris Watson, 283 Fusce Rd,NY</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <div className="contact-ico">
                <i class="fa-solid fa-clock"></i>
                <p className="fs-34 p-0 m-0">Open Time</p>
                <p className="fsc-16 mb-3">10:00 am to 23:00 pm</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <div className="contact-ico">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                <p className="fs-34 p-0 m-0"> Email</p>
                <p className="fsc-16 mb-3">supportvirtuenetz@gmail.com</p>
              </div>
            </div>
          </div>

        <div className="row">
          <div className="col-12 m-auto mt-3 px-5">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8159115.022256393!2d67.935536132185!3d3.1098147421631923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2s!4v1702831617997!5m2!1sen!2s"
              width="100%"
              height="400px"
              style={{ borderRadius: '4px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <p className='fs-26'>CONTACT US</p>
          <p className='fs-52'>Leave Message</p>
          <div className="col-sm-12 col-md-6">
            <InputFeilds
              placeholder="Your Name"
              inputStyle="contactinput1"
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <InputFeilds
            type="email"
              placeholder="Your Email"
              inputStyle="contactinput1"
            />
          </div>
          <div className="col-sm-12">
            <textarea
              placeholder="Your Message"
              className="contactinput2"
            />
          </div>
          <div className="col-sm-12 d-flex justify-content-center align-items-center my-5">
          <Button
          name="Send Message"
          batn="contactBtn"
          />
          </div>
        </div>

      </div >
      <Banners/>
      <Footer />
    </>
  )
}

export default Contact;
