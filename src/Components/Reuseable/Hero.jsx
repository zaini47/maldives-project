import React from 'react'
import '../Reuseable/Reuseable.css'
function Hero(props) {
console.log('props.image',props.Homeimg)
  return (
    <div>
      <div style={{ backgroundImage: `url(${props.image})`,height:"84vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='hero' >
        <div className="text text-center">
          <p className='fnt-set10 text-white'>{props.title}</p>
          <p className='fnt-set11 text-white'>{props.locat}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
