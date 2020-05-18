import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class Banner extends Component {
    render() {
        return (
            <div className="hero-banner banner-bg2">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-main-banner-content">
                                        <span className="sub-title">Your brand, promoted</span>
                                        <h1>Creative solutions to improve your business!</h1>
                                        <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>

                                        <form>
                                            <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" />
                                            <button type="submit">Get Started</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-main-banner-image">
                                        <ReactWOW delay='0.6s' animation='fadeInDown'>
                                            <img src={require("../../images/banner-image/man.png")} alt="man" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/code.png")} alt="code" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                            <img src={require("../../images/banner-image/carpet.png")} alt="carpet" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='zoomIn'>
                                            <img src={require("../../images/banner-image/bin.png")} alt="bin" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='bounceIn'>
                                            <img src={require("../../images/banner-image/book.png")} alt="book" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='fadeInDown'>
                                            <img src={require("../../images/banner-image/desktop.png")} alt="desktop" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='zoomIn'>
                                            <img src={require("../../images/banner-image/dot.png")} alt="dot" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/flower-top-big.png")} alt="flower-top-big" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='0.6s' animation='rotateIn'>
                                            <img src={require("../../images/banner-image/flower-top.png")} alt="flower-top" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='0.6s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/keyboard.png")} alt="keyboard" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='0.6s' animation='zoomIn'>
                                            <img src={require("../../images/banner-image/pen.png")} alt="pen" />
                                        </ReactWOW>

                                        <ReactWOW delay='0.6s' animation='zoomIn'>
                                            <img src={require("../../images/banner-image/table.png")} alt="table" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                            <img src={require("../../images/banner-image/tea-cup.png")} alt="tea-cup" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='0.6s' animation='rollIn'>
                                            <img src={require("../../images/banner-image/headphone.png")} alt="headphone" />
                                        </ReactWOW>
                                        
                                        {/* Main Images */}
                                        <ReactWOW delay='0.6s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/main-pic.png")} alt="main-pic" />
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