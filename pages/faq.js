import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import FaqContent from '../components/Faq/FaqContent';
import ContactUs from '../components/Faq/ContactUs';
import Footer from '../components/Layout/Footer';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import { DefaultSeo } from 'next-seo';

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <DefaultSeo
                        title={'Frequently Asked Questions'}
                        description={'Frequently Asked Questions'}
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: process.env.HOST,
                            site_name: process.env.TITLE,
                        }} />
                <Navbar />
                <PageHeader />

                <section className="faq-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">About Our Services</span>
                            <h2>Frequently Asked Questions</h2>
                           
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="faq-accordion">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                What is Oforum? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p className="accordion-content">
                                                A news publication platform that selflessly shares her revenue with active users, validated and eligible members. As BBC is to Britons, so is Oforum to Nigerians. The only difference is that Oforum shares her revenue with Nigerians while BBC do not share her revenue with anyone. 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Is Membership Free?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                            <p className="accordion-content">
                                               Yes, it is free. No fee.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                I Don't Have A Personal Bank Account, Can I Receive My Pay Through A Third Party Account? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p className="accordion-content">It’s up to you, we will send your share earnings to the bank account you provided in your profile or when sending payouts. </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    When Do I Receive My Payment? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p className="accordion-content">Your points will be coverted to real cash begining of each month and then sent to your bank account. </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                How Can I Update and Verify My Bank Account After Registration? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p className="accordion-content">You can provide your bank account details where you want us to pay to when making withdrawal, and you can also update and verify your bank account in your profile menu from your dashboard. </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                How Can I Refer People To Earn Commission? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p className="accordion-content">Once you have registered and get approved, a unique referral link will automatically be generate as your own. From your dashboard menu, click on Refer. From there you will see your referral link, copy it out and start using it to refer your friends and family. </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Is It A Must To Refer People Before I Get Paid? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            
                                            <AccordionItemPanel>
                                                <p className="accordion-content">NO!</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                I Referred Someone And My Account Hasn't Been Earning 20% Referral Commission. Why? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            
                                            <AccordionItemPanel>
                                                <p className="accordion-content">This happens when the person you introduced to Oforum refuses to use your referral link or referral username. </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Can Someone Outside Nigeria Join Oforum? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            
                                            <AccordionItemPanel>
                                                <p className="accordion-content">No, We focus on Nigerian content and our very own local currency here. Foreigners getting involve might be difficult in terms of paying in and out.  </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Must I Bring Referrals Before Oforum Pays Me? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            
                                            <AccordionItemPanel>
                                                <p className="accordion-content">NO!  </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                How Are They Making Money?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            
                                            <AccordionItemPanel>
                                                <p className="accordion-content">Our products contains advertising. We earn money through our custom advertising system and partners.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>






                                    </Accordion>
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

export default Faq;