import React, { Component } from 'react';

class FeaturedServices extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="featured-services-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Services</span>
                            <h2>Our Featured Services</h2>
                            <p>Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon">
                                        <i className="flaticon-analytics"></i>
                                    </div>

                                    <h3>Marketing Analysis</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                    <a href="/service-details" className="default-btn">Read More <span></span></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon color-facd60">
                                        <i className="flaticon-mail"></i>
                                    </div>

                                    <h3>Email Marketing</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                    <a href="/service-details" className="default-btn">Read More <span></span></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <i className="flaticon-research"></i>
                                    </div>

                                    <h3>Website Optimization</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                    <a href="/service-details" className="default-btn">Read More <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default FeaturedServices;