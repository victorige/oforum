import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import { noty, jwtencode } from '../utils/auth';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
import { DefaultSeo } from 'next-seo';



class ResetPassword extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            username: '',
            password: '',
            cpassword: '',
            email: '',
            referral: '',
            usernamevalid: '',
            passwordvalid: '',
            cpasswordvalid: '',
            emailvalid: '',
            referralvalid: '',
            loading: false,
            usernamebutton: '',
            passwordbutton: '',
            cpasswordbutton: '',
            emailbutton: '',
            referralbutton: '',
            checkbox: '',
            checkboxvalid: '',
            checkboxbutton: '',
            supercookie: '',
            buttonStyle: 'default-btn grey-btn-disable'
        };


        this.emailChange = this.emailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    async componentDidMount() {
 
              
    }

    token(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    async emailChange(event){
        if(!this.state.loading){
        await this.setState({email: event.target.value});
        const email = this.state.email;
        const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
        const isValid = regex.test(email);
        
        if(!isValid){
            this.setState({emailvalid: 'Enter a valid email address'});
            this.setState({emailbutton: 0});
            this.buttonStyle();
        }else{
                try {
                    const response = await axios.get("/api/checkemail/" + email, {
                        headers: {
                            securepass: await jwtencode(process.env.SECURE_PASS)
                        } 
                    });
                    
                    if(response.data.taken == 1){
                        this.setState({emailvalid: ''});
                        this.setState({emailbutton: 1});
                        this.buttonStyle();
                        return
                        
                    }else if(response.data.taken == 0){
                        this.setState({emailvalid: 'Email does not exist.'});
                        this.setState({emailbutton: 0});
                        this.buttonStyle();
                        return
                        
                    }
                    
                  } catch (error) {
                        this.setState({emailvalid: ''});
                        noty('An error occured, please try again.','error');
                        this.setState({emailbutton: 0});
                        this.buttonStyle();
                        return
                   
                  }
                }
            }
        }

        async handleSubmit(event) {
            event.preventDefault();
            this.LoadingBar.continuousStart()
            this.setState({loading: true});
            this.setState({buttonStyle: 'default-btn grey-btn-disable'});
    
            const tokenn = await this.token(20)
    
            try {
                const response = await axios.put("/api/reset/" + this.state.email,
                { reset: tokenn },
                {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    },
                    
                } );
    
                const tlink = process.env.HOST + '/reset/' + tokenn
                if(response.status == 200){

                    try{
                        var elasticemail = require('elasticemail');
                        var client = elasticemail.createClient({
                        username: process.env.ELASTIC_API_KEY,
                        apiKey: process.env.ELASTIC_API_KEY
                        });
                        


                        var msg = {
                        from: 'mail@oforum.ng',
                        from_name: 'Oforum NG',
                        to: this.state.email,
                        subject: 'Reset Your Oforum Password',
                        body_html: "<div> Hello, use the below link to reset your password. <p> <center><a href='"+ tlink +"'>"+ tlink +"</a></center> </p> </div>"
                        };

                        await client.mailer.send(msg)
                        noty('Sent: Check your E-mail Inbox/Spam Box','success');
                        this.setState({loading: false});
                        this.buttonStyle();
                        Router.push('/');
                        this.LoadingBar.complete()
                        return

                    }catch(error){
                        noty('An error occured, please try again.','error');
                        this.setState({loading: false});
                        this.buttonStyle();
                        this.LoadingBar.complete()

                    }

                    
                  
                }



                             
              } catch (error) {
                    noty('An error occured, please try again.','error');
                    this.setState({loading: false});
                    this.buttonStyle();
                    this.LoadingBar.complete()
                    return
              } 
            
          }
    

          buttonStyle(){
            if(this.state.emailbutton == 1 ){
                return this.setState({buttonStyle: 'default-btn blue-btn'}); 
            }
    
            return this.setState({buttonStyle: 'default-btn grey-btn-disable'}); 
          }
    

    render() {
        return (
            <React.Fragment>
                <DefaultSeo
                        title={'Reset Password'}
                        description={'Reset Password'}
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
                        <div className="form-header">
                            <h3>Reset password</h3>
                            <p>Reset your Oforum password.</p>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                                <b style={{color: 'red'}}>{this.state.emailvalid}</b><br/>
                                <label>Your Email</label>
                                <input type="email" autoComplete="email" value={this.state.email} onChange={this.emailChange} className="form-control" id="email" placeholder="Enter your email here" required />
                            </div>

                            <button type="submit" value="Submit" className={this.state.buttonStyle}> {this.state.loading ? <img src={require('../images/loading.gif')} alt='image' /> : "Reset"} </button>
                        </form>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default ResetPassword;