import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Hero from '../Reuseable/Hero';
import icon1 from "../../Assets/Images/icon-1.png.png";
import icon2 from "../../Assets/Images/icon-2.png.png";
import icon3 from "../../Assets/Images/icon-3.png.png";
import icon4 from "../../Assets/Images/icon-4.png.png";
import icon5 from "../../Assets/Images/icon-5.png";
import client1 from "../../Assets/Images/client1.png";
import client2 from "../../Assets/Images/client2.png";
import client3 from "../../Assets/Images/client3.png";
import '../Room/Room.css';
import '../Reuseable/Reuseable.css';
import RoomHBg from "../../Assets/Images/room-hero-img.png"
import SearchForm from '../Reuseable/SearchForm';
import starico from "../../Assets/Images/rates.jpg";
import Banners from "../Reuseable/Banner";
import Button from '../Reuseable/Button';
import Slicker from "../Reuseable/Slicker"

function RoomsDetails() {
  const { state } = useLocation();
  const items = state;


  const rates = [
    { id: "1", clientimg: client1, title: "Brandon Kelley", detail: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.", date: "27 August,2022", },
    { id: "2", clientimg: client2, title: "Brandon Kelley", detail: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.", date: "27 August,2022", },
    { id: "3", clientimg: client3, title: "Brandon Kelley", detail: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.", date: "27 August,2022", }
  ];


  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar />
      <Hero
        image={RoomHBg}
        title={items.items.typeroom}
        locat={`${items.items.charges}/Days`}
        hero='hero3'
      />
      <div className="container py-4">
        <SearchForm />
      </div>

      <div className='py-4'>
        <Slicker />
      </div>

      <div className='container'>
        <div className="container px-5">
          <div className="row  justify-content-center align-items-center ">
            <div className="col-sm-12 col-md-3 roomInfo p-4 start-round">
              <p className='m-0 fs-18 ff-p text--light fw-400'>Size:</p>
              <p className='m-0 fs-20 ff-p text-d fw-500'>{items.items.size}</p>
            </div>
            <div className="col-sm-12 col-md-3 roomInfo px-3 py-4">
              <p className='m-0 fs-18 ff-p text--light fw-400'>Capacity:</p>
              <p className='m-0 fs-20 ff-p text-d fw-500'>{items.items.capacity}</p>
            </div>
            <div className="col-sm-12 col-md-3 roomInfo p-4">
              <p className='m-0 fs-18 ff-p text--light fw-400'>Bed:</p>
              <p className='m-0 fs-20 ff-p text-d fw-500'>{items.items.bed}</p>
            </div>
            <div className="col-sm-12 col-md-3 roomInfo px-5 py-4 end-round">
              <p className='m-0 fs-18 ff-p text--light fw-400'>Services:</p>
              <p className='elipses m-0 fs-20 ff-p text-d fw-500'>{items.items.services}</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5">
        <div className="container py-4">
          <div className="row">
            <p className='fs-20 fw-400 ff-p text-d'>{items.items.Ldescrip[0]}</p>
            <ul className='fs-20 fw-400 ff-p text-d ps-4 ms-2 py-3'>
              <li>{items.items.Ldescrip[1]}</li>
              <li>{items.items.Ldescrip[2]}</li>
              <li>{items.items.Ldescrip[3]}</li>
              <li>{items.items.Ldescrip[4]}</li>
              <li>{items.items.Ldescrip[5]}</li>
              <li>{items.items.Ldescrip[6]}</li>
            </ul>

            <div>
              <p className='fs-20 fw-400 ff-p text-d'>{items.items.Ldescrip[7]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row px-4 py-4 d-flex justify-content-evenly services " >

          <div className="col-sm-12 col-md-12 col-lg-2 text-center card py-4 px-4 justify-content-center align-items-center">
            <div><img src={icon1} alt="" className='img-fluid' /></div>
            <p className='fs-20 fw-500 ff-p text-d py-2 m-0'>Transportion</p>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-2 text-center card py-4 px-4 justify-content-center align-items-center">
            <div><img src={icon2} alt="" className='img-fluid' /></div>
            <p className='fs-20 fw-500 ff-p text-d py-2 m-0'>
              Reiseservice
            </p>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-2 text-center card py-4 px-4 d-flex align-items-center flex-column">
            <div><img src={icon3} alt="" className='img-fluid' /></div>
            <p className='fs-20 fw-500 ff-p text-d py-2 m-0'>Spa Relaxation</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-2 text-center card py-4 px-4 justify-content-center align-items-center">
            <div><img src={icon4} alt="" className='img-fluid' /></div>
            <p className='fs-20 fw-500 ff-p text-d py-2 m-0'>Restaurant</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-2 text-center card py-4 px-4 justify-content-center align-items-center">
              <div><img src={icon5} alt="" className='img-fluid' /></div>
              <p className='fs-20 fw-500 ff-p text-d py-2 m-0'>Bar & Drink</p>
            </div>
        </div>
      </div>

      <div className='text-center py-4'>
        <Button
          name="Book Now"
          batn="booking fs-21 ff-p fw-500 px-4"
          icons="fa-solid fa-chevron-right ps-2"
          click={() => navigate("/PaymentDetail")}
        />
      </div>

      <div className="container">
        <p className='text-center fs-48 ff-work py-5'>Room Reviews</p>
        <div className='border-bottom'>
          {rates.map((item) => (
            <>
              <div className="row my-2">
                <div className=" col-md-3 text-center set-border">
                  <img src={item.clientimg} className="clientimg img-fluid  width rounded-190" alt="client" />
                </div>
                <div className="col-md-9 mb-4 p-4">
                  <p className='fs-16 fw-400 text--light ff-work'>{item.date}</p>
                  <div className="row-set">
                    <div className="title"><p className='fs-26 text-d fw-500 ff-work'>{item.title}</p></div>
                    <div className="icons">
                      <img src={starico} alt="" />
                    </div>
                  </div>
                  <p className='fs-20 ff-work text--light fw-400'>{item.detail}</p>
                </div>
              </div>
            </>
          ))}
        </div>

      </div>
      <Banners />
      <Footer />
    </>
  )
}

export default RoomsDetails
