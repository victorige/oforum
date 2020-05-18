import React, { Component } from 'react';

class SubscribeBoxed extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="subscribe-area ptb-100 pt-0 bg-F4F7FC">
                    <div className="container">
                        <div className="subscribe-inner-area">
                            <div className="subscribe-content">
                                <span className="sub-title">Get Started Instantly!</span>
                                <h2>Get on only new update from this newsletter</h2>

                                <form className="newsletter-form">
                                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" />
                                    <button type="submit">Subscribe</button>
                                </form>
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
                </section>
            </React.Fragment>
        );
    }
}

export default SubscribeBoxed;