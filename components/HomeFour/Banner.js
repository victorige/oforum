import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="main-banner">
                    <div className="container">
                        <div className="main-banner-content">
                            <span className="sub-title">Welcome to Oforum.ng</span>
                            <h1>Get Paid For Reading Our News. No Registration Fee. It Is Free :).</h1>

                            <div className="btn-box">
                                <b style={{paddingRight: '50px'}}>
                                <Link href="/login">
                                    <a className="default-btn pink-btn">
                                        Login <span></span>
                                    </a>
                                </Link>
                                </b>

                                <b style={{paddingLeft: '50px'}}>
                                <Link href="/register">
                                    <a className="default-btn pink-btn">
                                        Register <span></span>
                                    </a>
                                </Link>
                                </b>
                            </div>

                            <div className="btn-box">
                                
                                <Link href="/learn-more">
                                    <a className="default-btn pink-btn">
                                        Learn more <span></span>
                                    </a>
                                </Link>
                                
                            </div>

                            
                        </div>

                        <div className="main-banner-image">
                            <img src={require("../../images/banner-image/banner-image1.png")} alt="image" />
                        </div>
                    </div>

                    {/* Animation shape Images */}
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
            </React.Fragment>
        );
    }
}

export default Banner;