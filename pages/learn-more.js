import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import { DefaultSeo } from 'next-seo';

class LearnMore extends Component {
    render() {
        return (
            <React.Fragment>
                 <DefaultSeo
                        title={'Learn More'}
                        description={'Learn More'}
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: process.env.HOST,
                            site_name: process.env.TITLE,
                        }} />
                <Navbar />
                <PageHeader />
                <section className="why-choose-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="why-choose-content">
                                    <span className="sub-title">Registration is free.</span>
                                    <h2>Join Smart Earner on Oforum And Start Earning Real Cash.</h2>
                                    <h2>No Registration Fee</h2>
                                    <p>Earn money online everyday in Nigeria legitimately by becoming a Member on Oforum. You earn money on Oforum by reading on news only. </p>
                                    
                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> About Oforum And How It Works? </h4>
                                        <p>Oforum is an initiative conjoined with Nigeria New Update platform, oforum.ng. A program with a mission of dealing with financial problems in Nigeria among the youths, students, middle class and whoever that wish to take advantage of earning opportunity and making money online legitimately as it creates the channel for participant to earn passive income on daily basis. </p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> You can earn in two ways by becoming a member on Oforum.  </h4>
                                        <p><strong>Oforum Activity Earnings</strong>&nbsp;- With this, participant earns residual income <strong>bonus </strong>by reading news and sharing to Facebook daily. We share our revenue with you daily when you make Oforum community your news and information household / info hub.&nbsp;</p>
                                        <p><strong>Oforum&nbsp;Referral Earnings</strong> - With this, you are automatically an affiliate when you become a member on Oforum. As an affiliate, you earns huge commission of <strong>20%</strong> of every points your referral earns. When you introduce your friends or anyone to participate in Oforum earning opportunity, <strong>if they earn 1000 points you get 200 points</strong>. The more people you refer to become Oforum Member, the more <strong>20%</strong> commission earning. <strong>NOTE</strong>: You have the option to earn by taking part in Oforum activities daily even when you can’t refer anyone (<a href="/terms-and-conditions">terms and condition applied</a>).</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Can you become a Oforum Member?  </h4>
                                        <p>Anyone can become a Oforum Member. It is an equal opportunity open for <strong>Students, Fresh Graduates, Job Seekers, Bloggers, House wives or anyone who wish to earn money online.</strong> Take advantage of your Facebook friends, Twitter, WhatsApp, phone contacts, and stop wasting your precious time online. If you are a student, getting started with Oforum Membership is a great decision as an affiliate because there are lot of students like you on campus who are in need of cash daily. Entry fee is very affordable for anyone. The economy has changed a lot over the past few months with the present government tenure. Employers are hiring less full time employees and more part timers so they don’t have to pay benefits. Becoming an affiliate and getting involved with earning opportunities online is the best option for you. As an affiliate and online business owner, you can alleviate poverty, headache and uncertainty of working for someone else. Keep in mind though that you must have an entrepreneurial spirit and positive mindset. Affiliate and online business are not for everyone. But, if you like the idea of breaking away from financial bondage in this country, working and making money in the comfort of your home or wherever you are, owning your own business and growing your business at your own pace, then becoming Oforum Affiliate is a good starting point and a great choice for you.</p>
                                     </div>

                                     <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Can you become a Oforum Member?  </h4>
                                        <p>Anyone can become a Oforum Member. It is an equal opportunity open for <strong>Students, Fresh Graduates, Job Seekers, Bloggers, House wives or anyone who wish to earn money online.</strong> Take advantage of your Facebook friends, Twitter, WhatsApp, phone contacts, and stop wasting your precious time online. If you are a student, getting started with Oforum Membership is a great decision as an affiliate because there are lot of students like you on campus who are in need of cash daily. Entry fee is very affordable for anyone. The economy has changed a lot over the past few months with the present government tenure. Employers are hiring less full time employees and more part timers so they don’t have to pay benefits. Becoming an affiliate and getting involved with earning opportunities online is the best option for you. As an affiliate and online business owner, you can alleviate poverty, headache and uncertainty of working for someone else. Keep in mind though that you must have an entrepreneurial spirit and positive mindset. Affiliate and online business are not for everyone. But, if you like the idea of breaking away from financial bondage in this country, working and making money in the comfort of your home or wherever you are, owning your own business and growing your business at your own pace, then becoming Oforum Affiliate is a good starting point and a great choice for you.</p>
                                     </div>

                                     <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> How Genuine is This Platform?  </h4>
                                        <p>Now you may ask, is this not another scam? NO. Not at all. Oforum is a financial solution not a quick rich scheme and it's a Double Your Hustle idea.</p>
                                     </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> How Will I Get Paid To My Bank Account And What Is The Minimum Payout?</h4>
                                        <p>Minimum payout is 150 points threshold <a href="/terms-and-conditions">(Terms and condition applied)</a>. You recive your money before the end of each month, No referral Needed.</p>
                                    </div>
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

export default LearnMore;