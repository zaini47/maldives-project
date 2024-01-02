import React from 'react';
import '../Reuseable/Reuseable.css'
import recent1 from '../../Assets/Images/recent1.png'
import recent2 from '../../Assets/Images/recent2.png'
import recent3 from '../../Assets/Images/recent3.png'
import recent4 from '../../Assets/Images/recent4.png'
import insta1 from '../../Assets/Images/insta1.png'
import insta2 from '../../Assets/Images/insta2.png'
import insta3 from '../../Assets/Images/insta3.png'
import insta4 from '../../Assets/Images/insta4.png'
import insta5 from '../../Assets/Images/insta5.png'
import insta6 from '../../Assets/Images/insta6.png'
import insta7 from '../../Assets/Images/insta7.png'
import insta8 from '../../Assets/Images/insta8.png'
import insta9 from '../../Assets/Images/insta9.png'
import mobileImg from '../../Assets/Images/newpost.png'
function Recent() {

  const recent = [
    { id: "1", img: recent1, date: "Jan 02, 2023 / Event", title: "Proven Techniques Help You Herbal Human Body" },
    { id: "2", img: recent2, date: "Jan 02, 2023 / Event", title: "Cooking On A George Foreman Grill" },
    { id: "3", img: recent3, date: "Jan 02, 2023 / Event", title: "Selecting The Right Hotel In Maldives" },
    { id: "3", img: recent4, date: "Jan 02, 2023 / Event", title: "Comment Importance Of Human Life" },
  ]
  const Instagram = [
    { id: "1", img: insta1, },
    { id: "2", img: insta2, },
    { id: "3", img: insta3, },
    { id: "4", img: insta4, },
    { id: "5", img: insta5, },
    { id: "6", img: insta6, },
    { id: "7", img: insta7, },
    { id: "8", img: insta8, },
    { id: "9", img: insta9, },
  ]

  return (
    <>
      <p className='fs-32 ff-p text-d border-bottom'>Recent News</p>

      <div className="row">
        <div>
          {
            recent.map((item) => {
              return (
                <>
                  <div className='d-flex gap-3'>
                    <div className="col-6 m-0 p-0 py-3">
                      <img src={item.img} alt="" className='img-fluid w-100 rounded-3' />
                    </div>
                    <div className="col-6 m-0 p-0 py-3">
                      <p className='fs-15 ff-p'>{item.date}</p>
                      <p className='fs-20 ff-p'>{item.title}</p>
                    </div>
                  </div>
                </>

              )
            })
          }
        </div>





        <p className='fs-32 ff-p text-d border-bottom pt-5 mt-1'>Tags</p>
        <p className='fs-24 ff-p text--light pb-3'>Bed,  Hotel,  Travel,  Restaurant,  Sport, Trip,  Music,  Holiday,  Tourist,  Foody, Resorts.</p>
        <div className='row p-0 m-0'>
          <p className='fs-32 ff-p text-d border-bottom pt-5 mt-1'>Instagram</p>
          <div className="d-flex justify-content-center gap-3 container align-items-center m-0 p-0 row">
            {Instagram.map((item) => {
              return (
                <>
                  <div className="col-sm-6 col-md-3 set-lg-w m-0 p-0" key={item.id}>
                    <img src={item.img} alt="" className='w-100 rounded-3' />
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <div className='pt-5 mt-5'>
          <img src={mobileImg} alt="" className='img-fluid w-sm w-md rounded-3' />
        </div>
      </div >
    </>
  )
}

export default Recent;
