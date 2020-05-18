import React, { Component } from 'react';
import Link from 'next/link';

class OurTeam extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="team-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Team</span>
                            <h2>Meet Our Awesome Team Member</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team1.jpg")} alt="team" />
                                        
                                        <div className="social">
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="content">
                                        <h3>John Smith</h3>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team2.jpg")} alt="team" />
                                        
                                        <div className="social">
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <h3>Lucy Eva</h3>
                                        <span>Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team3.jpg")} alt="team" />

                                        <div className="social">
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <h3>Steven Smith</h3>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation shape image */}
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

export default OurTeam;