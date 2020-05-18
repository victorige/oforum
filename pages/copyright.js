import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import { DefaultSeo } from 'next-seo';

class Copyright extends Component {
    render() {
        return (
            <React.Fragment>
                 <DefaultSeo
                        title={'Copyright'}
                        description={'Copyright'}
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: process.env.HOST,
                            site_name: process.env.TITLE,
                        }} />
                <Navbar />
                <PageHeader />

                <div className="main-content ptb-80">
                <div className="container">
                    <h3>Copyright</h3>
                    <p>We try not to infringe on any right-of-usage by reviewing the Terms of Service of most of our sources and contents posted on this platform, but because Terms of Service could change at any time and we do not guarantee to keep track of all our sources’ Terms of Service.&nbsp;</p>
                    <p>We implore any source or individual contents that feels we encroached on its copyright to give us notice of de-linking or removing contents via our Support Page, we promise to remove the content from database and&nbsp; within 48 hours of confirming the request originated from the news source.</p>
                    
                </div>
            </div>


                <Footer/>
            </React.Fragment>
        );
    }
}

export default Copyright;