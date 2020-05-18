import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import Footer from '../components/Layout/Footer';
import { DefaultSeo } from 'next-seo';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <DefaultSeo
                        title={'Contact Us'}
                        description={'Contact Us'}
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: process.env.HOST,
                            site_name: process.env.TITLE,
                        }} />
                <Navbar />

                <PageHeader />
                
                <section className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <h3>Email Here</h3>
                                <p>
                                    mail@oforum.ng
                                </p>
                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-phone-call"></i>
                                </div>
                                <h3>Location Here</h3>
                                <p>Lagos, Nigeria</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;