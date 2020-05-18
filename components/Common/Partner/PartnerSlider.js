import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 3,
        },
        768: {
            items: 4,
        },
        1200: {
            items: 5,
        }
    } 
}

class PartnerSlider extends Component {

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
                <div className="partner-area ptb-100 pt-0">
                    <div className="container">
                   
                        {this.state.display ? <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img1.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img1.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img2.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img2.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img3.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img3.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img4.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img4.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img5.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img5.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img6.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img6.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img7.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img7.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img8.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img8.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img9.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img9.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../../images/partner-image/partner-img10.png")} alt="image" />
                                        <img src={require("../../../images/partner-image/partner-img10.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PartnerSlider;