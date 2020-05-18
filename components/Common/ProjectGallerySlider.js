import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        },
        1700: {
            items: 4,
        }
    }
}

class ProjectGallerySlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <React.Fragment>
                <section className="projects-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Projects Gallery</span>
                            <h2>We’ve Done Lot’s Of Work, Let’s Check Some From Here</h2>
                        </div>
                    </div>

                    <div className="container-fluid">
                        {this.state.display ? <OwlCarousel 
                            className="projects-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-projects-box">
                                <img src={require("../../images/projects-image/project1.jpg")} alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
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

                            <div className="single-projects-box">
                                <img src={require("../../images/projects-image/project2.jpg")} alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
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

                            <div className="single-projects-box">
                                <img src={require("../../images/projects-image/project3.jpg")} alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
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

                            <div className="single-projects-box">
                                <img src={require("../../images/projects-image/project4.jpg")} alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
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

                            <div className="single-projects-box">
                                <img src={require("../../images/projects-image/project5.jpg")} alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
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

                            <div className="single-projects-box">
                                <img src={require("../../images/projects-image/project6.jpg")} alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
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
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ProjectGallerySlider;