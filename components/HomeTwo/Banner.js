import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="hero-banner banner-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-banner-content">
                                        <span className="sub-title">Welcome to Taiker</span>
                                        <h1>Creative & Strategic Digital Marketing Agency</h1>
                                        <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>

                                        <div className="btn-box">
                                            <Link href="/contact">
                                                <a className="default-btn">Get Started <span></span></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-banner-image">
                                        <ReactWOW delay='0.6s' animation='fadeInDown'>
                                            <img src={require("../../images/banner-image/main.png")} alt="main" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/banner-shape1.png")} alt="banner-shape1" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                            <img src={require("../../images/banner-image/banner-shape2.png")} alt="carpet" />
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img1">
                    <ReactWOW delay='.9s' animation='fadeInUp'>
                        <img src={require("../../images/shape/shape1.png")} alt="image" />
                    </ReactWOW>
                </div>
                <div className="shape-img2">
                    <img src={require("../../images/shape/shape2.svg")} alt="image" />
                </div>
                <div className="shape-img3">
                    <img src={require("../../images/shape/shape3.svg")} alt="image" />
                </div>
                <div className="shape-img4">
                    <img src={require("../../images/shape/shape4.png")} alt="image" />
                </div>
                <div className="shape-img5">
                    <img src={require("../../images/shape/shape5.png")} alt="image" />
                </div>
                <div className="shape-img6">
                    <img src={require("../../images/shape/shape6.png")} alt="image" />
                </div>
                <div className="shape-img7">
                    <img src={require("../../images/shape/shape7.png")} alt="image" />
                </div>
                <div className="shape-img8">
                    <img src={require("../../images/shape/shape8.png")} alt="image" />
                </div>
                <div className="shape-img9">
                    <img src={require("../../images/shape/shape9.png")} alt="image" />
                </div>
                <div className="shape-img10">
                    <img src={require("../../images/shape/shape10.png")} alt="image" />
                </div>
            </div>
        );
    }
}

export default Banner;