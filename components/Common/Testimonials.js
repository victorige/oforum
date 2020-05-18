import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i className='flaticon-left-chevron'></i>",
        "<i className='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: { 
            items: 2,
        },
        1200: {
            items: 3,
        },
        1550: {
            items: 4,
        }
    }
}

class Testimonials extends Component {
    
    _isMounted = false;
    state = {
        display:false
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <React.Fragment>
                <section className="feedback-area ptb-100 bg-color">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Testimonials</span>
                            <h2>Some Lovely Feedback From Our Clients</h2>
                        </div>
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-feedback-item">
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div className="client-info">
                                <img src={require("../../images/client-image/client1.jpg")} alt="image" />
                                <h3>Jason Roy</h3>
                                <span>Manager</span>
                            </div>
                        </div>

                        <div className="single-feedback-item">
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div className="client-info">
                                <img src={require("../../images/client-image/client2.jpg")} alt="image" />
                                <h3>James Anderson</h3>
                                <span>Web Developer</span>
                            </div>
                        </div>

                        <div className="single-feedback-item">
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div className="client-info">
                                <img src={require("../../images/client-image/client3.jpg")} alt="image" />
                                <h3>Sarah Taylor</h3>
                                <span>Designer</span>
                            </div>
                        </div>

                        <div className="single-feedback-item">
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div className="client-info">
                                <img src={require("../../images/client-image/client4.jpg")} alt="image" />
                                <h3>Steven Smith</h3>
                                <span>Manager</span>
                            </div>
                        </div>

                        <div className="single-feedback-item">
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div className="client-info">
                                <img src={require("../../images/client-image/client5.jpg")} alt="image" />
                                <h3>Tom Nessham</h3>
                                <span>EnvyTheme</span>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </section>
            </React.Fragment>
        );
    }
}

export default Testimonials;