import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

//styles
import './Testimonial.css';

export const Testimonial = () => {

    const settings = {
        arrows: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "10px",
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1
                }
            }
        ]
      };


    return (
        <div className="testimonial-container">
            <div className="testimonial-banner">
                <h1 className="testimonial-title">Testimonials</h1>
            <Slider {...settings}>
                <div className="testimonial-card">
                    <div className="testimonial-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="testimonial-card-content">
                        <p>Stephen is an outstanding developer and an excellent professional who loves what he does. We are very happy to have worked with him and still have him on our team.</p>
                        <h3>- Ishowleck</h3>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="testimonial-card-content">
                        <p>Working with Stephen was a remarkable experience for our team at STECHAD LTD. We were so impressed with the work he did and were very glad to let him know what an excellent professional he is.</p>
                        <h3>- Adaora Dagogo</h3>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="testimonial-card-content">
                        <p>I have been working with Stephen for over a year now and he has been a pleasure to work with. He is a great developer and has a great team spirit. He is always willing to help and is always willing to learn new things. I would highly recommend him to anyone looking for a developer.</p>
                        <h3>- Patrick Okafor</h3>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="testimonial-card-content">
                        <p>He really impressed us with his work. We couldn't complain about his output. Absolute prefessional!</p>
                        <h3>- Tsaint</h3>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="testimonial-card-content">
                        <p>His dedication to our project and professional recommendations where we needed him to was what made him a standout person for us. We absolutely recommend him</p>
                        <h3>- Readaholic LTD</h3>
                    </div>
                </div>
            </Slider>
            </div>
        </div>
    )
}