import React, { Component } from 'react';

class AboutArea extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../../images/about-img1.png")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">About Us</span>
                                    <h2>We Are Digital Explorers</h2>
                                    <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> Recommender systems</span></li>
                                        <li><span><i className="fas fa-check"></i> Demand prediction</span></li>
                                        <li><span><i className="fas fa-check"></i> Omnichannel analytics</span></li>
                                        <li><span><i className="fas fa-check"></i> Lead generation</span></li>
                                        <li><span><i className="fas fa-check"></i> Dedicated Developers</span></li>
                                        <li><span><i className="fas fa-check"></i> 24/7 Support</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="about-inner-area">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our History</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Activate Listening</li>
                                            <li><i className="flaticon-tick"></i> Brilliant minds</li>
                                            <li><i className="flaticon-tick"></i> Better. Best. Wow!</li>
                                            <li><i className="flaticon-tick"></i> Branding it better!</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Mission</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Creating. Results.</li>
                                            <li><i className="flaticon-tick"></i> Expect more</li>
                                            <li><i className="flaticon-tick"></i> Good thinking</li>
                                            <li><i className="flaticon-tick"></i> In real we trust</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                    <div className="about-text">
                                        <h3>Who we are</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Stay real. Always.</li>
                                            <li><i className="flaticon-tick"></i> We have you covered</li>
                                            <li><i className="flaticon-tick"></i> We turn heads</li>
                                            <li><i className="flaticon-tick"></i> Your brand, promoted</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Images */}
                    <div className="shape-img3">
                        <img src={require("../../images/shape/shape3.svg")} alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src={require("../../images/shape/shape2.svg")} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default AboutArea;