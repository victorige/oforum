import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="projects-area ptb-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src={require("../../images/projects-image/project1.jpg")} alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Digital Marketing</a>
                                            </Link>
                                        </h3>
                                        <span className="category">Design</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src={require("../../images/projects-image/project2.jpg")} alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Design & Development</a>
                                            </Link>
                                        </h3>
                                        <span className="category">Planing</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src={require("../../images/projects-image/project3.jpg")}alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Strategic Planing</a>
                                            </Link>
                                        </h3>
                                        <span className="category">Marketing</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src={require("../../images/projects-image/project4.jpg")} alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="#">
                                                <a>SEO Consultancy</a>
                                            </Link>
                                        </h3>
                                        <span className="category">Development</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src={require("../../images/projects-image/project5.jpg")} alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Competitor Analysis</a>
                                            </Link>
                                        </h3>
                                        <span className="category">Design</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src={require("../../images/projects-image/project6.jpg")} alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Social Media Marketing</a>
                                            </Link>
                                        </h3>
                                        <span className="category">Development</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectsCard;