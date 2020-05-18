import React, { Component } from 'react';
import Link from 'next/link';
import { Advert } from "../../utils/auth";
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';
import Script from 'react-load-script'

class Footer extends Component {
    componentDidMount () {
        const analytics = Analytics({
            app: 'Oforum',
            plugins: [
              googleAnalytics({
                trackingId: 'UA-153152778-1'
              })
            ]
          })
          analytics.page()

    }
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <Script
                    url={process.env.HOST+"/adblock.js"}
                    />
                <section className="footer-area">
                    <div className="container">
                       <Advert username={null} allow={false} page={null} />
                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        <i className="flaticon-copyright"></i> Copyright {currentYear} <a href="https://oforum.ng/" target="_blank">Oforum</a>. 
                                        All rights reserved
                                    </p>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                    <li>
                                            <Link href={'/about'}>
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/privacy-policy'}>
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/copyright'}>
                                                <a>Copyright</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/disclaimer'}>
                                                <a>Disclaimer</a>
                                            </Link>
                                        </li>
                                        <li>
                                        <Link href={'/terms-and-conditions'}>
                                             <a>Terms &amp; Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>FAQ</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                
            </React.Fragment>
        );
    }
}

export default Footer;