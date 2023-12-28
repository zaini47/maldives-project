import React from 'react';
import Button from '../Reuseable/Button';
import BannerImg from '../../Assets/Images/pseudo.png'
import Ban1 from '../../Assets/Images/Link → p1.png.png'
import Ban2 from '../../Assets/Images/Link → p2.png.png'
import Ban3 from '../../Assets/Images/Link → p3.png.png'
import Ban4 from '../../Assets/Images/Link → p4.png.png'
import Ban5 from '../../Assets/Images/Link → p5.png.png'
import '../Footer/Footer.css'

function Banner() {
  return (
    <>
         <div className="container-fluid  text-white py-4">
        <div className="container">
          <div className="banner">
            <div className="imag">
              <img src={BannerImg} alt="Banner" />
            </div>
            <div className="text">
              <div className="tx-1">
                <h2 className='fnt-set15'>Contact us now!</h2>
                <h6 className='fnt-set16'>Contact +1 (909) 280-0809 to book directly or for advice</h6>
              </div>
              <div className="bottn">
                <Button
                  name='Contact Now'
                  batn='btn4'
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-evenly py-5">
          <div class="slider1 p-4">
            <div class="slide-track1">
              <div className="pics slide1">
                <img src={Ban1} alt="" className='img-fluid' />
              </div>
              <div className="pics slide1">
                <img src={Ban2} alt="" className='img-fluid' />
              </div>
              <div className="pics slide1">
                <img src={Ban3} alt="" className='img-fluid' />
              </div>
              <div className="pics slide1">
                <img src={Ban4} alt="" className='img-fluid' />
              </div>
              <div className="pics slide1">
                <img src={Ban5} alt="" className='img-fluid' />
              </div>
              <div className="pics slide1">
                <img src={Ban1} alt="" className='img-fluid' />
              </div>
              <div className="pics slide1">
                <img src={Ban2} alt="" className='img-fluid' />
              </div>
              <div className="pics slide1">
                <img src={Ban3} alt="" className='img-fluid' />
              </div>
              <div className="pics slide1">
                <img src={Ban4} alt="" className='img-fluid' />
              </div>
              <div className="pics slide1">
                <img src={Ban5} alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner;
