import React from 'react';
import '../Reuseable/Reuseable.css';
import { Link } from 'react-router-dom';

function Video() {
  return (
    <>
      <div className="container-fluid py-5 px-0">
        <div className="video-container">
          <div className="video-content">
            <p className='fnt-set14 m-0'>Watch Our Luxurious Hotel</p>
            <h2 className='fnt-set13 text-white'>Take A Tour</h2>
            <Link to='https://youtu.be/qwr_BIa1nrM?si=uV8bqjroxLb_Fcef' target='_blank' className='text-white'>
              <button className="play-button text-white">
                <i className="fa-solid fa-play"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
