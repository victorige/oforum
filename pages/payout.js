import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { withAuthSync, logout, noty, jwtencode, Advert } from "../utils/auth";
import nextCookie from "next-cookies";
import LoadingBar from 'react-top-loading-bar';
import Router from 'next/router'
import jsCookie from 'js-cookie';
import fetch from "isomorphic-unfetch";
import { DefaultSeo } from 'next-seo';

class Payout extends Component {

    static async getInitialProps(ctx) {
        const { token } = nextCookie(ctx);    
        const res = await fetch(process.env.HOST + "/api/userdetails/" + token, {
            headers: {
                securepass: await jwtencode(process.env.SECURE_PASS)
            }
          })

          const json = await res.json()

          return { status: res.status, data: json.data }

    }

    constructor(props){
        super(props);
       
        this.state = {
            payouts: [],
            username: '',
            seourl: '',
        };
    }
    
    
    async componentDidMount() { 
        this.setState({seourl: window.location.href})
        let { complete, username } = this.props.data;
        let { status } = this.props;

        if(status == 200){   
            if(complete == false){
                Router.push('/start');
            }

            try{
                const response = await axios.get("/api/listpayout/" + username,
                        { headers: { securepass: await jwtencode(process.env.SECURE_PASS) }, });
        
                    if(response.status == 200){
                        await this.setState({
                            payouts: response.data.payouts,
                            username: username
                        })
                    }
                }catch{
                    noty('An error occured, please try again.','error');
                    Router.push('/dashboard');
                    this.LoadingBar.continuousStart()
                    return
                }

        }else{   
            return logout();
        } 
        
       

    
        


    }


    
    render() {
        var seourl = this.state.seourl
        return (
            <React.Fragment>
                 <DefaultSeo
                        title="Payouts"
                        description="Payouts History"
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: seourl,
                            site_name: process.env.TITLE,
                        }} />
                <LoadingBar
                    height={3}
                    color='#f11946'
                    onRef={ref => (this.LoadingBar = ref)}
                />
                <Navbar />
                <PageHeader />
               

                <div className="container">
                
                    <div className="form-content">
                    <Advert username={this.state.username} allow={false} page={null} /><br/>
                        <div className="form-header">
                            <h3>Payouts</h3>
                        </div>
                        <hr/>
                        <h5>We will send all your pending payout to your bank account before the end of this month.</h5>
                        <hr/>
                        
                       
                       
                        {this.state.payouts.length == 0 ? 'No payouts exist' : '' }

                        {Array.isArray(this.state.payouts) && this.state.payouts.map(payouts => (
                   
                            <div key={payouts._id} className="col-lg-12 col-md-12">
                                <div className="single-pricing-box">
                                    <div className="pricing-header">
                                        <h3>{'\u20A6' + payouts.amount + '.00'}</h3>
                                    </div>

                
                                    <ul className="price-features-list">
                                        <li>Bank: {payouts.account_bank}</li>
                                        <li>Account Number: {payouts.account_number}</li>
                                        <li>Account Name: {payouts.account_name}</li>
                                        <li>Fee: {'\u20A6' + + payouts.fee + '.00'} </li>
                                        
                                    </ul>
                                        <div className="get-started-btn">
                                            {payouts.status == 3 ? 'Successful' : 'Pending' }
                                        </div>
                                    
                                </div>
                            </div>

                    ))}
                   
               
           















                        <br/>
                        <hr/>
                        <Advert username={this.state.username} allow={false} page={null} />
                    </div>
                    
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default withAuthSync(Payout)