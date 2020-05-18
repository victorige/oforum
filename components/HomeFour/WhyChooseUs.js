import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="why-choose-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-content">
                                    <span className="sub-title">Why Choose Us</span>
                                    <h2>The Key To Your Motivation And Success</h2>
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

                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-image">
                                    <img src={require("../../images/why-choose-img1.png")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WhyChooseUs;