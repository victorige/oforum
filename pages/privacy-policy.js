import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import { DefaultSeo } from 'next-seo';

class PrivacyPolicy extends Component {
    render() {
        return (
            <React.Fragment>
                 <DefaultSeo
                        title={'Privacy Policy'}
                        description={'Privacy Policy'}
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
                    <h3>Privacy Policy</h3>
                    <p>To keep Oforum platform running, we use third-party advertising companies to serve ads when you visit our web site.&nbsp;</p>
                    <p>These companies may use information (not including your name, address email address or telephone number) about your visits to this and other Web sites in order to provide advertisements about goods and services of interest to you. If you would like more information about this practice and to know your choices about not having this information used by these companies, click&nbsp;<a href="https://www.google.com/privacy.html">here</a> Oforum uses a tool which collects your requests for pages and passes elements of them to search engines to assist them in indexing this site. We control the configuration of the tool and are responsible for any information sent to the search engines.&nbsp;</p>
                    <p><strong>Who we are?</strong></p>
                    <p>Our website address is: <a href="https://oforum.ng">https://oforum.ng.</a>&nbsp;</p>
                    <p><strong>What personal data we collect and why we collect it</strong></p>
                    <p><strong>Media</strong></p>
                    <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                    <p><strong>Cookies</strong></p>
                    <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
                    <p><strong>Embedded content from other websites</strong></p>
                    <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.</p>
                    <p><strong>Analytics</strong></p>
                    <p>Who we share your data with and How long we retain your data</p>
                    <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognise and approve any follow-up comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
                    <p><strong>What rights you have over your data</strong></p>
                    <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                </div>
            </div>


                <Footer/>
            </React.Fragment>
        );
    }
}

export default PrivacyPolicy;