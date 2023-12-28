import React from 'react'
import Flickity from 'react-flickity-component'
import "./Slicker.css"
import herobg1 from "../../Assets/Images/faqs.png"
import herobg2 from "../../Assets/Images/Personalinfo.png"
import herobg3 from "../../Assets/Images/contact.jpg"


function Slicker() {

  const flickityOptions = {
    initialIndex: 1,
    pageDots: false,
    wrapAround: false,
    cellAlign: "left",
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    // autoPlay: 1500,
  }

  return (
    <>
      <div className='container'>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <img src={herobg1} className='img-fluid mx-2' alt="" />
        <img src={herobg2} className='img-fluid mx-2' alt="" />
        <img src={herobg3} className='img-fluid mx-2' alt="" />
      </Flickity>
      </div>
    </>
  )
}

export default Slicker
