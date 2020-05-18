import React, { Component } from 'react';
import Link from 'next/link';

class OurFeaturesTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <React.Fragment>
                <section className="features-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Features</span>
                            <h2>We always try to understand customers expectation</h2>
                        </div>

                        <div className="tab features-list-tab">
                            {/* tabs Nav */}
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => this.openTabSection(e, 'tab1')}
                                >
                                    <Link href="#">
                                        <a className="bg-fa7070" onClick={(e) => e.preventDefault()}>
                                            <i className="flaticon-achievement"></i>
                                            <span>User Experience</span>
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                    <Link href="#">
                                        <a className="bg-00aeff" onClick={(e) => e.preventDefault()}>
                                            <i className="flaticon-architecture"></i>
                                            <span>Product Design</span>
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                    <Link href="#">
                                        <a className="bg-c679e3" onClick={(e) => e.preventDefault()}>
                                            <i className="flaticon-digital-marketing"></i>
                                            <span>Digital Marketing</span>
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                    <Link href="#">
                                        <a className="bg-eb6b3d" onClick={(e) => e.preventDefault()}>
                                            <i className="flaticon-analytics"></i>
                                            <span>Branding</span>
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab5')}>
                                    <Link href="#">
                                        <a onClick={(e) => e.preventDefault()}>
                                            <i className="flaticon-data"></i>
                                            <span>Development</span>
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={(e) => this.openTabSection(e, 'tab6')}>
                                    <Link href="#">
                                        <a className="bg-f78acb" onClick={(e) => e.preventDefault()}>
                                            <i className="flaticon-research"></i>
                                            <span>Marketing</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                            {/* Tab Content */}
                            <div className="tab_content">
                                {/* Tabs Item 01 */}
                                <div id="tab1" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-content">
                                            <div className="content">
                                                <span className="sub-title">Define Your Choices</span>
                                                <h2>User Experience</h2>
                                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="overview-image">
                                            <div className="image">
                                                <img src={require("../../images/features-image/feature-image1.png")} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs Item 02 */}
                                <div id="tab2" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-image">
                                            <div className="image">
                                                <img src={require("../../images/features-image/feature-image2.png")} alt="image" />
                                            </div>
                                        </div>

                                        <div className="overview-content">
                                            <div className="content">
                                                <span className="sub-title">Define Your Choices</span>
                                                <h2>Product Design</h2>
                                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs Item 03 */}
                                <div id="tab3" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-content">
                                            <div className="content">
                                                <span className="sub-title">Define Your Choices</span>
                                                <h2>Digital Marketing</h2>
                                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="overview-image">
                                            <div className="image">
                                                <img src={require("../../images/features-image/feature-image2.png")} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tabs Item 04 */}
                                <div id="tab4" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-image">
                                            <div className="image">
                                                <img src={require("../../images/features-image/feature-image4.png")} alt="image" />
                                            </div>
                                        </div>
                                        
                                        <div className="overview-content">
                                            <div className="content">
                                                <span className="sub-title">Define Your Choices</span>
                                                <h2>Branding</h2>
                                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tabs Item 05 */}
                                <div id="tab5" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-content">
                                            <div className="content">
                                                <span className="sub-title">Define Your Choices</span>
                                                <h2>Development</h2>
                                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="overview-image">
                                            <div className="image">
                                                <img src={require("../../images/features-image/feature-image5.png")} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tabs Item 06*/}
                                <div id="tab6" className="tabs_item">
                                    <div className="features-overview">
                                        <div className="overview-image">
                                            <div className="image">
                                                <img src={require("../../images/features-image/feature-image6.png")} alt="image" />
                                            </div>
                                        </div>

                                        <div className="overview-content">
                                            <div className="content">
                                                <span className="sub-title">Define Your Choices</span>
                                                <h2>Marketing</h2>
                                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                                <ul className="features-list">
                                                    <li><span><i className="flaticon-tick"></i> Open Source</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Optimal Choice</span></li>
                                                    <li><span><i className="flaticon-tick"></i> High Security</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Great Advices</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Creative Layout</span></li>
                                                    <li><span><i className="flaticon-tick"></i> Super Responsive</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Image */}
                    <div className="shape-img7">
                        <img src={require("../../images/shape/shape7.png")} alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src={require("../../images/shape/shape2.svg")} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={require("../../images/shape/shape3.svg")} alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src={require("../../images/shape/shape4.png")} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default OurFeaturesTab;