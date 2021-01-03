import React from 'react';
import Slider from "react-slick";
import Img1 from '../../resources/images/pp1.jpg';
import Img2 from '../../resources/images/pp2.jpg';
import Img3 from '../../resources/images/pp3.jpg';
import Img4 from '../../resources/images/pp4.jpg';
import Img5 from '../../resources/images/pp5.jpg';

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300
    }
    return (
        <div
        className="carrousel_wrapper"
        style={{
            height: `${window.innerHeight}px`,
            overflow: 'hidden'
        }}
        >
            <Slider {...settings}>

                <div>
                    <div className="carrousel_image"
                    style={{
                        background: `url(${Img1})`,
                        height: `${window.innerHeight}px`
                    }}
                    ></div>
                </div>
                <div>
                <div className="carrousel_image"
                    style={{
                        background: `url(${Img2})`,
                        height: `${window.innerHeight}px`
                    }}
                    ></div>
                </div>
                <div>
                <div className="carrousel_image"
                    style={{
                        background: `url(${Img3})`,
                        height: `${window.innerHeight}px`
                    }}
                    ></div>
                </div>
                <div>
                <div className="carrousel_image"
                    style={{
                        background: `url(${Img4})`,
                        height: `${window.innerHeight}px`
                    }}
                    ></div>
                </div>
                <div>
                <div className="carrousel_image"
                    style={{
                        background: `url(${Img5})`,
                        height: `${window.innerHeight}px`
                    }}
                    ></div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carrousel;