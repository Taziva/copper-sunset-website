import React, { Component, useState } from 'react';
import Slider from "react-slick";
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const SliderDefault = () =>  {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']}/></i></button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']}/></i></button>
        );
    }

    const settings = {
        className: "slider-active",
        dots: false,
        slidesToShow: 1,
        speed: 500,
        fade: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="slider-area">
            <Slider {...settings}>
                <div className="single-slider">
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/pexels-vanessa-loring-5965671.jpg'})`}} alt="Photo by Vanessa Loring: https://www.pexels.com/photo/assorted-yellow-fruits-and-vegetables-5965671/">
                        <div className="container">
                            <div className="row ">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85">
                                        <h1 data-animation="fadeInUp" data-delay=".6s">
                                        Supplying Nature's Best, <br /> Worldwide
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay=".8s">
                                        At Copper Sunset, we are passionate about bringing the freshest, highest quality produce to customers all around the globe. We take pride in every step of the journey to ensure that our produce is not only delicious, but also ethically and sustainably sourced.
                                        </p>
                                        <div className="slider-button">
                                            <Link href="/services" as="/services" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    Contact Us
                                                </a>
                                            </Link>
                                            {/* <Link href="/contact" as="/contact" >
                                                <a data-animation="fadeInRight" data-delay="1s" className="btn active">
                                                    Our Services
                                                </a>
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SliderDefault;