import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import TermsAndConditionsContent from '../components/TermsAndConditions/TermsAndConditionsContent';
import Footer from '../components/Layout/Footer';
import { DefaultSeo } from 'next-seo';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                 <DefaultSeo
                        title={'About Us'}
                        description={'About Oforum NG'}
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
                    <h3>About Us</h3>
                    <p>Oforum brings you News update for different Nigerian Sources in one channel.</p>

                    <p>This platform is programmed and designed to deliver the latest News headlines ASAP.</p>

                    <p>Oforum is an online News aggregation and contributors that focus on delivering, curated, relevant and latest news items that we believe are of interest to majority from top reliable sources, focusing to Nigerians based locally and Diaspora on Issues, politics, entertainment, education and many more. </p>

                    <p>Oforum uses robots to source news items by publishers, bloggers and contributors from various sources including top Nigerian Newspapers like NAIJ, The Guardian, Vanguard newspapers, Channelstv and other top online news portal, blogs and other numerous sources.</p>

                    <p>Oforum also have a corporate social responsibility efforts that cover revenue sharing for its member to earn residual income online on daily basis.</p>
                </div>
            </div>


                <Footer/>
            </React.Fragment>
        );
    }
}

export default About;