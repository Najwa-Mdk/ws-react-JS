import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slides.css'
import pic1 from './pic1.jpg'
import pic2 from './pic2.png'
import pic3 from './pic3.jpg'

const Slides = () => {
    return (
        <div>
            <Carousel className='Slide'>
                <Carousel.Item>
                <a href="https://www.pathe.tn/tunis/movie/le-chat-pott-2--puss-in-boots-the-last-wish"> 
                    <img className="picture"
                        src={pic1}
                        alt="LE CHAT POTTÉ 2"/>
                        </a>
                </Carousel.Item>
                <Carousel.Item>
                <a href="https://www.pathe.tn/tunis/movie/enzo-le-croco--lyle-lyle-crocodile"> 
                    <img className="picture"
                        src={pic2}
                        alt="ENZO LE CROCO"/>
                        </a>
                </Carousel.Item>
                <Carousel.Item>
                <a href="https://www.pathe.tn/tiktok.com/@pathe.tunisie">
                    <img className="picture"
                        src={pic3}
                        alt="TIKTOK"/>
                        </a>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slides
