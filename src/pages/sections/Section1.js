import React from 'react'
import Slider from "react-slick";

export default function Section1() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };

    return (
        <div style={{border:"1px solid red", height:"500px", overflow : "hidden", textAlign : "center"}}>
           <h1>Popular Template Categories</h1>

        <Slider {...settings}  >
          <div>
            <img src="/images/products/slide1.jpg" />
          </div>
          <div>
          <img src="/images/products/slide2.jpg" />
          </div>
          <div>
          <img src="/images/products/slide3.jpg" />
          </div>
          <div>
          <img src="/images/products/slide4.jpg" />
          </div>
          <div>
          <img src="/images/products/slide5.jpg" />
          </div>
          <div>
          <img src="/images/products/slide6.jpg" />
          </div>
          <div>
          <img src="/images/products/slide7.jpg" />
          </div>
          <div>
          <img src="/images/products/slide8.jpg" />
          </div>
          <div>
          <img src="/images/products/slide9.jpg" />
          </div>
          <div>
          <img src="/images/products/slide10.jpg" />
          </div>
         
        </Slider>
        </div>
    )
}
