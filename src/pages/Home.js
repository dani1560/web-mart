import React from 'react'
import Collection from "./collection/index";
import Cart from "./cart/index";
import { Grid } from '@material-ui/core';
import Slider from "react-slick";
import Section1 from './sections/Section1';


export default function Home() {

    const settings = {
      
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        // slidesToShow: 1,
        // slidesToScroll: 1
      };

    return (
        <div>
            {/* <>hello</> */}
        <Grid container style={{border:"1px solid #22a679", borderRadius: "20px", overflow:"hidden"}} >
                {/* <Grid item md={1}>
                    </Grid> */}
                <Grid item md={2} style={{backgroundColor: "#22a679"}}>
                <Slider {...settings}>
                    <div>
                        <img src="/images/products/sd1.jpg"  alt="imag1" width="100%" height="100%"/>
                    </div>
                    <div>
                        <img src="/images/products/sd2.jpg"  alt="imag2" width="100%" height="100%" />
                    </div>
                    
                </Slider>
                    </Grid>
                <Grid item md={8} >
                    <img src="/images/products/bgf.jpg" style={{width: "100%", height: "100%"}} />
                </Grid>
                <Grid item md={2} style={{backgroundColor: "#22a679"}}>
                <Slider {...settings}>
                    <div>
                        <img src="/images/products/sd3.jpg"  alt="imag1" width="100%" height="100%"/>
                    </div>
                    <div>
                        <img src="/images/products/sd4.jpg"  alt="imag2" width="100%" height="100%" />
                    </div>
                    
                </Slider>
                    </Grid>
                {/* <Grid item md={1}>
                    </Grid> */}
                {/* <Grid item md={4}>
                
                </Grid> */}
                
        </Grid>
            <Grid container>
                <Grid item md={2}>

                </Grid>
                <Grid item md={8}>
                    <Section1 />
                    <Collection />
                    <Cart />
                </Grid>
                <Grid item md={2}>

                </Grid>
            </Grid>
           
        </div>

    )
}
