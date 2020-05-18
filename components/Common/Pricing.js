import React, { Component } from 'react';
import Link from 'next/link';

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="pricing-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Pricing Plan</span>
                            <h2>Choose Your Best Plan</h2>
                            <p>Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-pricing-box">
                                    <div className="pricing-header">
                                        <h3>Basic</h3>
                                    </div>

                                    <div className="price">
                                        <sub>$</sub>
                                        39.99
                                        <sub>/mo</sub>
                                    </div>

                                    <ul className="price-features-list">
                                        <li><i className="flaticon-tick"></i> 1 Projects</li>
                                        <li><i className="flaticon-tick"></i> Email Support</li>
                                        <li><i className="flaticon-tick"></i> Phone Support</li>
                                        <li><i className="flaticon-tick"></i> Article Promotion</li>
                                        <li><i className="flaticon-tick"></i> Editorial Services</li>
                                        <li><i className="flaticon-close"></i> Profile Management</li>
                                        <li><i className="flaticon-close"></i> Selection Support</li>
                                    </ul>

                                    <Link href="#">
                                        <a className="get-started-btn">Get Started</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-pricing-box red">
                                    <div className="pricing-header">
                                        <h3>Starter</h3>
                                    </div>

                                    <div className="price">
                                        <sub>$</sub>
                                        49.99
                                        <sub>/mo</sub>
                                    </div>

                                    <ul className="price-features-list">
                                        <li><i className="flaticon-tick"></i> 2 Projects</li>
                                        <li><i className="flaticon-tick"></i> Email Support</li>
                                        <li><i className="flaticon-tick"></i> Phone Support</li>
                                        <li><i className="flaticon-tick"></i> Article Promotion</li>
                                        <li><i className="flaticon-tick"></i> Editorial Services</li>
                                        <li><i className="flaticon-tick"></i> Profile Management</li>
                                        <li><i className="flaticon-close"></i> Selection Support</li>
                                    </ul>

                                    <Link href="#">
                                        <a className="get-started-btn">Get Started</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="single-pricing-box orange">
                                    <div className="pricing-header">
                                        <h3>Extended</h3>
                                    </div>

                                    <div className="price">
                                        <sub>$</sub>
                                        59.99
                                        <sub>/mo</sub>
                                    </div>

                                    <ul className="price-features-list">
                                        <li><i className="flaticon-tick"></i> 3 Projects</li>
                                        <li><i className="flaticon-tick"></i> Email Support</li>
                                        <li><i className="flaticon-tick"></i> Phone Support</li>
                                        <li><i className="flaticon-tick"></i> Article Promotion</li>
                                        <li><i className="flaticon-tick"></i> Editorial Services</li>
                                        <li><i className="flaticon-tick"></i> Profile Management</li>
                                        <li><i className="flaticon-tick"></i> Selection Support</li>
                                    </ul>

                                    <Link href="#">
                                        <a className="get-started-btn">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Images */}
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
                    <div className="shape-img9">
                        <img src={require("../../images/shape/shape9.png")} alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src={require("../../images/shape/shape10.png")} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Pricing;