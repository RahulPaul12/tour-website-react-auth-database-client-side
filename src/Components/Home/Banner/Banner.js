import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../image/Banner/images.jpg'
import banner1 from '../../../image/Banner/index.jpg'
import banner2 from '../../../image/Banner/nature-sea-hills-hill-rocks-hd-wallpaper-preview.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{
                        width:'900px',
                        height:'450px'
                    }}
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1  style={{
                            color:'White'
                        }}>Your Journey Begains</h1>
                        <p>A journey with us. Explore the World</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{
                        width:'900px',
                        height:'450px'
                    }}
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1 
                        style={{
                            color:'white'
                        }}>What We Offer</h1>
                        <p>A Happy Journey with Nature And Explore new things.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{
                        width:'900px',
                        height:'450px'
                    }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1 
                        style={{
                            color:'white'
                        }}>Are you Ready to go?</h1>
                        <p>Stay with us for Explore the world with Enjoy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;