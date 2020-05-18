import React, { Component } from 'react';
import Link from 'next/link';

class WhatWeDo extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="services-area ptb-100 bg-F4F7FC">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">What We Do</span>
                            <h2>Provide Awesome Service With Our Tools</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-digital-marketing"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet elit sed, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-00aeff">
                                        <i className="flaticon-research"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Design & Development</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet elit sed, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-f78acb">
                                        <i className="flaticon-analytics"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Strategic Planing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet elit sed, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-cdf1d8">
                                        <i className="flaticon-analysis"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>SEO Consultancy</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet elit sed, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-c679e3">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Competitor Analysis</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet elit sed, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-eb6b3d">
                                        <i className="flaticon-seo"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Social Media Marketing</a>
                                        </Link>
                                    </h3>

                                    <p>Lorem ipsum dolor sit amet elit sed, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WhatWeDo;