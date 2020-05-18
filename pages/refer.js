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

class Refer extends Component {

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
            refer: '',
            username: '',
            seourl: ''
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
                const response = await axios.get("/api/checkrefer/" + username,
                        { headers: { securepass: await jwtencode(process.env.SECURE_PASS) }, });
        
                    if(response.status == 200){
                        await this.setState({
                            refer: response.data.count,
                            username: username
                        })
                    }
                }catch{
                    noty('An error occured, please try again.','error');
                    Router.push('/dashboard');
                    this.LoadingBar.continuousStart()
                    return
                }

                document.getElementById("copy-text").onclick = function() {
                    this.select();
                    document.execCommand('copy');
                    alert('copied');
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
                        title="Refer &amp; Earn"
                        description="Earn 20% of the points your referral earn"
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: process.env.HOST,
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
                            <h3>Earn 20% of the points your referral earn</h3>
                        </div>
                        <hr/>
                        
                        <h5>Your Referral ID is: {this.state.username}</h5>
                        <small>Your referral link is :</small><br/>
                        <input className={"form-control"} id={"copy-text"} type={"text"} value={process.env.HOST+ '/'+'join'+'/'+ this.state.username} readOnly></input><br/>
                        <h5>Total Referral(s): {this.state.refer}</h5>
                        <br/>
                        <Advert username={this.state.username} allow={false} page={null} />
                    </div>
                    
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default withAuthSync(Refer)