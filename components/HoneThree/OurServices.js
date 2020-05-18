import React, { Component } from 'react';

class OurServices extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="overview-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Services</span>
                            <h2>Amazing Business Solution Whatever Your Needs</h2>
                            <p>Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.</p>
                        </div>

                        {/* Our Services One */}
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <span className="sub-title">Digital Marketing</span>
                                    <h2>Creative solutions, creative results</h2>
                                    <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Core Development</h4>
                                        <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Define Your Choices</h4>
                                        <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/about-img1.png")} alt="image" />
                                </div>
                            </div>
                        </div>

                        {/* Our Services Two */}
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/why-choose-img1.png")} alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <span className="sub-title">Design & Development</span>
                                    <h2>Solving problems, building brands</h2>
                                    <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>

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

                        {/* Our Services Three */}
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <span className="sub-title">Social Media Marketing</span>
                                    <h2>We are the next generation of the advertising world</h2>
                                    <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Core Development</h4>
                                        <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Define Your Choices</h4>
                                        <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/features-image/feature-image1.png")} alt="image" />
                                </div>
                            </div>
                        </div>

                        {/* Our Services Four */}
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/features-image/feature-image2.png")} alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <span className="sub-title">SEO Consultancy</span>
                                    <h2>We make smart, good-looking things</h2>
                                    <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>

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
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default OurServices;