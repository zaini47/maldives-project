import React, { useRef } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Faqs from '../Reuseable/Faqs';
import "../Reuseable/Reuseable.css";
import HomeAImg from "../../Assets/Images/home-about-section.png";
import icon1 from "../../Assets/Images/icon-1.png.png";
import icon2 from "../../Assets/Images/icon-2.png.png";
import icon3 from "../../Assets/Images/icon-3.png.png";
import icon4 from "../../Assets/Images/icon-4.png.png";
import icon5 from "../../Assets/Images/icon-5.png";
import Slider from "react-slick";
import blog1 from "../../Assets/Images/blog-1.jpg.png";
import blog2 from "../../Assets/Images/blog-2.jpg.png";
import blog3 from "../../Assets/Images/blog-3.jpg.png";
import room1 from '../../Assets/Images/room1.png'
import room2 from '../../Assets/Images/room2.png'
import room3 from '../../Assets/Images/room3.png'
import room4 from '../../Assets/Images/room4.png'
import room5 from '../../Assets/Images/room5.png'
import room6 from '../../Assets/Images/room6.png'
import Hero from "../Reuseable/Hero";
import Homeimg from "../../Assets/Images/Home.png";
import SearchForm from '../Reuseable/SearchForm';
import Testominal from "../Reuseable/Testominal";
import Video from "../Reuseable/Video";
import Banners from "../Reuseable/Banner";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const roomData = [
    { id: "1", typeroom: "Room View Sea", charges: "400$", size: "30ft", capacity: " Max person 5", bed: " King Beds", services: " Wi-Fi, Television, Bathroom", roomimg: room1 },
    { id: "2", typeroom: "Small Room", charges: "400$", size: "30ft", capacity: " Max person 5", bed: " King Beds", services: " Wi-Fi, Television, Bathroom", roomimg: room2 },
    { id: "3", typeroom: "Premium King ", charges: "400$", size: "30ft", capacity: " Max person 5", bed: " King Beds", services: " Wi-Fi, Television, Bathroom", roomimg: room3 },
    { id: "4", typeroom: "Room Vip King", charges: "400$", size: "30ft", capacity: " Max person 5", bed: " King Beds", services: " Wi-Fi, Television, Bathroom", roomimg: room4 }, { id: "5", typeroom: "Royal Room", charges: "400$", size: "30ft", capacity: " Max person 5", bed: " King Beds", services: " Wi-Fi, Television, Bathroom", roomimg: room5 }, { id: "6", typeroom: "Room View Sea", charges: "400$", size: "30ft", capacity: " Max person 5", bed: " King Beds", services: " Wi-Fi, Television, Bathroom", roomimg: room6 }
  ];

  const blog = [
    { id: "1", blogimg: blog1, head: "Low Cost Advertising", detail: "Acres of Diamonds… you’ve read the famous story or at least had it related to you.A farmer", date: "31st January,2023" },
    { id: "2", blogimg: blog2, head: "Creative Outdoor Ads", detail: "Self-doubt and fear interfere with our ability to achieve or set goals. Self-doubt and fear are", date: "31st January,2023" },
    { id: "3", blogimg: blog3, head: "It Classified How To Utilize Free", detail: "Why do you want to motivate yourself? Actually, just answering that question fully can", date: "31st January, 2023" }
  ];


  const faq = [
    {
      id: "1",
      question: "How Do I Make a Reservation?"
    },
    {
      id: "2",
      question: "What Are Your Check- In and Check - Out Times ?"
    },
    {
      id: "3",
      question: "Can I Cancel or Modify My Reservation ?"
    },
    {
      id: "4",
      question: "What Amenities and Services Do You Offer ?"
    },
    {
      id: "5",
      question: "Do You Offer Special Rates or Packages ? "
    }
  ]

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      }
    ]
  };


  const naviagte = useNavigate()


  return (
    <>
      <div className="header">
        <Navbar />
        <Hero
          hero='hero1'
          title='Welcome To Maldives'
          locat='HOTEL & RESORT'
          image={Homeimg}
          height="100"
        />
        <SearchForm
          CheckBox='CheckBox1'
        />
      </div>
      {/* About us section */}
      <div className='container-fluid'>
        <div className='container '>
          <div className="row py-5">
            <div className="col-sm-12 col-md-6 ">
              <div><p className='fs-16 ff-p text-prim fw-500 m-0'>About Us</p></div>
              <div><p className='fs-42 ff-p fw-500 text-d m-0 text--set'>Welcome to <br />
                Maldives Hotel Luxury</p></div>

              <div>
                <p className='ff-p fw-400 fs-20 text--light pt-5'>
                  With over 340 hotels worldwide, NH Hotel Group offers
                  a wide variety of hotels catering for a perfect stay no
                  matter where your destination.
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
              <img src={HomeAImg} className="img-fluid w-100" alt="" />
            </div>

          </div>

          <div className="row  px-4 pad-sm  py-5 d-flex justify-content-evenly services " >

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

      </div>
      {/* =======================Slider========================= */}
      <div className="container-fluid m-0 py-5 px-0">
        <Slider ref={sliderRef} {...settings}>
          {roomData.map((item) => (
            <div key={item.id} className="d-flex slider">
              <div className="col-sm-12 col-md-6">
                <img src={item.roomimg} alt="" className="img-fluid w-100 h--vh" />
              </div>
              <div className="col-sm-12 col-md-6 bg-img3 slider pt-xl">
                <div className="py-4 p-xl">
                  <p className="fs-58 fw-600 ff-p text-start text-white px-5 pad-e-set">{item.typeroom}</p>
                  <p className="px-5 fs-38 fw-500 text-mid-light  ff-p">
                    {item.charges} <span className="fs-24 fw-500 ff-p text-white">/Day</span>
                  </p>
                </div>

                <div className="px-5 slide-context p-slick-xl">
                  {["Size", "Capacity", "Bed", "Services"].map((label) => (
                    <div key={label} className="d-flex justify-content w--30 p-slick-xl">
                      <div>
                        <p className="text-white fs-18 ff-p fw-500">{label}</p>
                      </div>
                      <div>
                        <p className="text-white fs-18 ff-p fw-500">: {item[label.toLowerCase()]}</p>
                      </div>
                    </div>
                  ))}

                  <button className="buton4 " onClick={() => naviagte("/Rooms/RoomsDetail")}>View details</button>
                </div>
                <div className="vector-photo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="386" height="543" viewBox="0 0 386 543" fill="none">
                    <path opacity="0.06" d="M339.338 11.7724L325.887 20.8156L316.839 7.35805C311.839 -0.0794968 301.766 -2.04815 294.341 2.94372L209.151 60.2176C187.136 75.0183 174.807 98.8224 173.557 123.476C150.254 115.329 123.558 117.763 101.543 132.563L16.3531 189.837C8.92809 194.829 6.94935 204.901 11.9497 212.338L20.9973 225.796L7.54629 234.839C0.121331 239.831 -1.85138 249.911 3.14291 257.34L190.127 535.463C195.122 542.891 205.201 544.869 212.626 539.877L544.418 316.81C551.843 311.819 553.816 301.738 548.821 294.31L361.837 16.1867C356.842 8.75811 346.763 6.7805 339.338 11.7724ZM47.8993 207.709L119.638 159.479C141.886 144.521 172.169 150.463 187.134 172.722L319.833 370.099C324.833 377.537 334.906 379.505 342.331 374.513C349.756 369.522 351.735 359.45 346.735 352.013L214.036 154.635C199.071 132.376 204.998 102.09 227.246 87.1327L298.985 38.9021L467.874 290.11L396.135 338.34C374.381 352.966 361.836 376.72 360.62 401.716C337.014 393.408 310.282 396.06 288.527 410.686L216.789 458.917L47.8993 207.709Z" fill="white" className="img-fluid" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div style={{ textAlign: "center" }} className="buton-grup">
          <button className="button prev" onClick={previous}>
            Previous
          </button>
          <button className="button next" onClick={next}>
            Next <i className="fa-solid fa-arrow-right-long text-white"></i>
          </button>
        </div>
      </div>
      {/* Testominal section */}
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

      <div className="container-fluid">
        <div className="contianer py-5">
          <div className="row">
            <div><p className="fs-36 fw-600 text-d ff-p text-center">Latest Posts From Blog</p></div>
            <div><p className="fs-18 fw-400 ff-p text-center">The French The French Revolution constituted for the conscience of the dominant aristocratic class a fall from</p></div>

            <div className="d-flex justify-content-center latestpost-sm gap-4 align-item-center">
              {
                blog.map(
                  (item) => {
                    return (
                      <div className="col-sm-12 col-md-3" key={item.id}>
                        <div className="card card-bg">
                          <img src={item.blogimg} alt="" className="card-img-top img-fluid" />
                          <div className="card-body">

                            <p className="card-text fs-18 fw-600 text-d ff-p">{item.head}</p>
                            <button className="latest-button ff-p text--light">Travel</button>
                            <button className="latest-button ff-p text--light ms-1">Life Style</button>
                            <p className="card-text fs-14 fw-300 ff-p text--light mt-3">{item.detail}</p>
                            <p className="card-text fs-14 fw-400 ff-p text-d">{item.date}</p>
                          </div>
                        </div>
                      </div>)
                  }
                )
              }
            </div>

          </div>
        </div>
      </div>
      <Video />
      <div className="container">
        <div>
          <p className="fs-52 text-center fs-600 ff-p text-d m-0">
            FAQs
          </p>
        </div>
        <div>
          <p className="fs-20 text-center fs-400 ff-p text--light">Frequently Asked Questions</p>
        </div>
        <div>
          {
            faq.map((item) => {
              return (
                <Faqs
                  item={item.id}
                  question={item.question}
                />
              )
            })
          }
        </div>
      </div>
      <Banners />
      <Footer />
    </>
  );
};

export default Home;
