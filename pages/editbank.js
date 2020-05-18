import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { withAuthSync, logout, noty, jwtencode, Advert } from "../utils/auth";
import jsCookie from 'js-cookie';
import Router from 'next/router';
import nextCookie from "next-cookies";
import fetch from "isomorphic-unfetch";
import LoadingBar from 'react-top-loading-bar';
import { DefaultSeo } from 'next-seo';

let Bankslist = require('../utils/banks.json');


class EditBank extends Component {

    static async getInitialProps(ctx) {
        const { token } = nextCookie(ctx);  

        const res = await fetch(process.env.HOST + "/api/userdetails/" + token, {
            method: 'GET',
            headers: {
                securepass: await jwtencode(process.env.SECURE_PASS)
            }
          })
          const json = await res.json();
          const data1 = json.data;



          const res1 = await fetch(process.env.HOST + "/api/banks", {
            method: 'GET',
            headers: {
                securepass: await jwtencode(process.env.SECURE_PASS)
            }
          })

          const json1 = await res1.json();
          const data2 = json1.data;

          return { status: res.status, data: data1 }

    }
    
    constructor(props){
        super(props);
        
        this.state = {
            seourl: '',
            bankname: '',
            banknamevalid: '',
            banknamebutton: '',

            bankcode: '',
            bankcodevalid: '',
            bankcodebutton: '',

            accountnumber: '',
            accountnumbervalid: '',
            accountnumberbutton: '',

            accountname: 'Loading...',
            accountnamevalid: '',
            accountnamebutton: '',
            accountnameshow: false,

            checking: false,

            loading: false,
            buttonStyle: 'default-btn grey-btn-disable',
            buttonStyleSkip: 'default-btn blue-btn'
        };
        
        this.banknameChange = this.banknameChange.bind(this);
        this.accountnumberChange = this.accountnumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async banknameChange(event){
        
        
        if(!this.state.loading){
            await this.setState({bankcode: event.target.value});
            const objArray = Bankslist
            let obj = objArray.find(obj => obj.Code == this.state.bankcode);
            await this.setState({bankname: obj.Name});
            
            this.setState({accountname: 'Loading...'});
            if(this.state.bankcode == "" && this.state.bankname == ""){
                this.setState({banknamevalid: ''});
                this.setState({banknamebutton: 0});
                this.setState({accountnameshow: false});
                this.buttonStyle();
                return
            }else{
                this.setState({banknamevalid: ''});
                this.setState({banknamebutton: 1});
                this.buttonStyle();
                this.checkaccount()
                return
            }
    }

    }


    async accountnumberChange(event){
        if(!this.state.loading){

        await this.setState({accountnumber: event.target.value});
        const accountnumber = this.state.accountnumber;

        this.setState({accountname: 'Loading...'});
        if(accountnumber.length < 10){
            this.setState({banknamevalid: ''});
            this.setState({banknamebutton: 0});
            this.setState({accountnameshow: false});
            this.buttonStyle();
            return
        }else{
            this.setState({banknamevalid: ''});
            this.setState({banknamebutton: 1});
            this.buttonStyle();
            this.checkaccount()
            return
        }
    }

    }

    async checkaccount(){
        
        if(!this.state.checking){
        const accountnumber = this.state.accountnumber;
        if(this.state.bankcode == "" || this.state.bankname == "" || accountnumber.length < 10){
            return
        }
        this.LoadingBar.continuousStart()
        this.setState({accountnameshow: true});
        this.setState({checking: true});
        
        try {
            const response = await axios.post("https://api.ravepay.co/flwv3-pug/getpaidx/api/resolve_account",
                    {   recipientaccount: this.state.accountnumber,
                        destbankcode: this.state.bankcode,
                        PBFPubKey: process.env.FLWPUBK
                    }
                        
            );

            if(response.data.data.data.responsecode == '00'){
                noty( 'ACCOUNT RESOLVED', 'success');
                this.setState({accountname: response.data.data.data.accountname});
                this.setState({checking: false});
                this.buttonStyle();
                this.LoadingBar.complete()
                return
            }else{
                noty( 'Invalid Account', 'warning');
                this.setState({accountnameshow: false});
                this.setState({checking: false});
                this.buttonStyle();
                this.LoadingBar.complete()
                return
            }

            } catch (error) {    
                    noty('An error occured, please try again.','error');
                    this.setState({checking: false});
                    this.setState({accountnameshow: false});
                    this.setState({loading: false});
                    this.buttonStyle();
                    this.LoadingBar.complete()
                    return        
          } 
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.LoadingBar.continuousStart();
        this.setState({loading: true});
        this.setState({buttonStyle: 'default-btn grey-btn-disable'});
        try {
            const token = await jsCookie.get("token");

            const response = await axios.put("/api/insert/" + token,
                {   accountname: this.state.accountname,
                    accountnumber: this.state.accountnumber,
                    bankname: this.state.bankname,
                    bankcode: this.state.bankcode,
                },
                {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    },
                    
                } );

            if(response.status == 200){
                noty('Bank Account Updated successfully','success');
                Router.push('/dashboard');
                this.LoadingBar.complete()
                return
            }

            
            return logout();
            
              
          } catch (error) {
                if(error.status == 400){
                    noty('An error occured, please try again.','error');
                    this.setState({loading: false});
                    this.buttonStyle();
                    this.LoadingBar.complete()
                    return
                }else if(error.status == 401){
                    return logout();
                }

                noty('An error occured, please try again.','error');
                this.setState({loading: false});
                this.buttonStyle();
                this.LoadingBar.complete()
                return
          } 
        
      }





    async componentDidMount() {
        this.setState({seourl: window.location.href})
        let { complete,  bankcode,  accountnumber} = this.props.data;
        let { status } = this.props;

        if(status == 200){   
            if(complete == false){
                Router.push('/start');
            }
            this.setState({
                bankcode: bankcode,
                accountnumber: accountnumber
            })
        }else{   
            return logout();
        }    

    }

    buttonStyle(){
        if(this.state.accountnameshow){
            return this.setState({buttonStyle: 'default-btn blue-btn'}); 
        }

        return this.setState({buttonStyle: 'default-btn grey-btn-disable'}); 
      }



    render() {
        var seourl = this.state.seourl
        
        return (
            <React.Fragment>
                <DefaultSeo
                        title="Edit Bank Account"
                        description="Edit Bank Account"
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
                <PageHeader  />

                

                <div className="container">
                    <div className="form-content">
                        <div className="form-header">
                        <Advert username={this.state.username} allow={false} page={null} /><br/>
                        
                            <h3>Edit Bank Account</h3>
                            <p>Edit your bank account to receive payments.</p>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            
                            <div className="form-group">
                            <label>Select Your Bank</label>
                                <select value={this.state.bankcode} onChange={this.banknameChange} className="form-control" id="banks">
                                    <option disabled value=''>Select your bank</option>
                                    {Bankslist.map(bank => (
                                        <option key={bank.Code} value={bank.Code}>{bank.Name}</option>
                                    ))}
                                </select>

                            </div>

                            <div className="form-group">
                                <label>Your Account Number</label>
                                <input type="text" value={this.state.accountnumber} onChange={this.accountnumberChange} className="form-control" id="accountnumber" placeholder="Enter your account number" maxLength="10" />
                            </div>
                            {this.state.accountnameshow ?
                            <div className="form-group">
                                <label>Your Account Name</label>
                                <input type="text" value={this.state.accountname} className="form-control" id="accountnumber" readOnly />
                            </div> : ''
                            }



                            {this.state.loading ?  
                            <button type="submit" value="Submit" className={this.state.buttonStyle}> <img src={require('../images/loading.gif')} alt='image' /> </button> :
                            <button type="submit" value="Submit" className={this.state.buttonStyle}>Edit Bank Account <FontAwesomeIcon icon={faLongArrowAltRight} /> </button> }
                           
                        </form>
                        <hr/>
                        <Advert username={this.state.username} allow={false} page={null} />
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}



export default withAuthSync(EditBank)