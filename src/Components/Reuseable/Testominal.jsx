import React from 'react'
import Slider from 'react-slick';
import Test from '../../Assets/Images/textimonals.png';
import star from '../../Assets/Images/stars.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Testominal() {
    const testimonialData = [
        {
            id: 1,
            image: Test,
            title: 'Testimonials',
            subTitle: 'Our Guests Love Us',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi laboriosam fugit suscipit aspernatur, minima minus voluptatum, id ab atque similique ex earum. Magni.',
            rating: 5,
            author: 'Robert Brown',
            company: 'CEO Deercreative',
        },
        {
            id: 2,
            image: Test,
            title: 'Testimonials',
            subTitle: 'Our Guests Love Us',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi laboriosam fugit suscipit aspernatur, minima minus voluptatum, id ab atque similique ex earum. Magni.',
            rating: 5,
            author: 'Robert Brown',
            company: 'CEO Deercreative',
        },
        {
            id: 3,
            image: Test,
            title: 'Testimonials',
            subTitle: 'Our Guests Love Us',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi laboriosam fugit suscipit aspernatur, minima minus voluptatum, id ab atque similique ex earum. Magni.',
            rating: 5,
            author: 'Robert Brown',
            company: 'CEO Deercreative',
        },
        {
            id: 4,
            image: Test,
            title: 'Testimonials',
            subTitle: 'Our Guests Love Us',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi laboriosam fugit suscipit aspernatur, minima minus voluptatum, id ab atque similique ex earum. Magni.',
            rating: 5,
            author: 'Robert Brown',
            company: 'CEO Deercreative',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <Slider {...settings}>
                        {testimonialData.map((testimonial) => (
                            <div key={testimonial.id} className="row py-5 d-flex">
                                <div className="col-sm-12 col-md-6">
                                    <img src={testimonial.image} alt="" className="img-fluid" />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="py-3 test-pad-y">
                                        <p className="text-prim fs-16 ff-p fw-500 ls">{testimonial.title}</p>
                                    </div>
                                    <div>
                                        <p className="fs-42 fw-500 ff-p text-d">{testimonial.subTitle}</p>
                                    </div>
                                    <div className="py-3 test-pad-y">
                                        <p className="fs-18 fw-400 text--light ff-p text-justify">{testimonial.content}</p>
                                    </div>
                                    <div className="py-3 test-pad-y">
                                        <img src={star} alt="" />
                                    </div>
                                    <div>
                                        <p className="ff-p fs-16 fw-500 text-d">{testimonial.author} <span className="fs-14 fw-400 text-prim">- {testimonial.company}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testominal
