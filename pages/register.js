import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';
import axios from 'axios';
import { register, noty, jwtencode } from '../utils/auth';
import jsCookie from 'js-cookie';
import LoadingBar from 'react-top-loading-bar';
import { DefaultSeo } from 'next-seo';

const publicIp = require('public-ip');



class Register extends Component {

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


        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.cpasswordChange = this.cpasswordChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.referralChange = this.referralChange.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        
        const scripts = [
            {src: process.env.HOST + '/evercookie.js'},
            {src: process.env.HOST + '/swfobject-2.2.min.js'},
            {src: process.env.HOST + '/jquery-1.4.2.min.js'}   
        ]
 
        await scripts.map(item => { 
            this.script = document.createElement("script")
            this.script.src = item.src
            this.script.async = true 
            document.body.appendChild(this.script)
         })
         this.script.onload = () => this.handleScriptLoad();

         if(jsCookie.get("referral") !== undefined){
            await this.setState({referral: jsCookie.get("referral")});
        }
        
    this.callreferral();
         


      
    }

    async usernameChange(event){
        if(!this.state.loading ){
        await this.setState({username: event.target.value});
        const username = this.state.username;
        const regex = /^[0-9a-zA-Z]+$/g;
        const isValid = regex.test(username);
        
        if(username.length < 4){
            this.setState({usernamevalid: 'Username cannot be less than 4 characters'});
            this.setState({usernamebutton: 0});
            this.buttonStyle();
        }else if(username.length > 15){
            this.setState({usernamevalid: 'Username cannot be greater than 15 characters'});
            this.setState({usernamebutton: 0});
            this.buttonStyle();
        }else if(!isValid){
            this.setState({usernamevalid: 'Only letters and numbers are allowed'});
            this.setState({usernamebutton: 0});
            this.buttonStyle();
        }else{
            try {
                const response = await axios.get("/api/checkuser/" + username, {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    } 
                });
                
                if(response.data.taken == 1){
                    this.setState({usernamevalid: 'Username taken. Try Something else!!'});
                    this.setState({usernamebutton: 0});
                    this.buttonStyle();
                    return
                }else if(response.data.taken == 0){
                    this.setState({usernamevalid: ''});
                    this.setState({usernamebutton: 1});
                    this.buttonStyle();
                    return
                }
                
              } catch (error) {
                    this.setState({usernamevalid: ''});
                    noty('An error occured, please try again.','error');
                    this.setState({usernamebutton: 0});
                    this.buttonStyle();
                    return
               
              }
            
        }
    }
        
    }

    async referralChange(event){
        if(!this.state.loading ){
        await this.setState({referral: event.target.value});
        await this.callreferral();
    }
        
    }

    async passwordChange(event){
        if(!this.state.loading){
        await this.setState({password: event.target.value});

        
        const password = this.state.password;
        
        if(password.length < 6){
            this.setState({passwordvalid: 'Password cannot be less than 6 characters'});
            this.setState({passwordbutton: 0});
            this.buttonStyle();
        }else if(password.length > 20){
            this.setState({passwordvalid: 'Password cannot be greater than 20 characters'});
            this.setState({passwordbutton: 0});
            this.buttonStyle();
        }else{
            this.setState({passwordvalid: ''});
            this.setState({passwordbutton: 1});
            this.buttonStyle();
        }

        if(this.state.cpassword !== ""){
            if(password !== this.state.cpassword){
                this.setState({cpasswordvalid: 'Password does not match'});
                this.setState({cpasswordbutton: 0});
                this.buttonStyle();
            }else{
                this.setState({cpasswordvalid: ''});
                this.setState({cpasswordbutton: 1});
                this.buttonStyle();
            }
        }


    }

    }

    async cpasswordChange(event){
        if(!this.state.loading){
        await this.setState({cpassword: event.target.value});
        const cpassword = this.state.cpassword;
        
        if(cpassword !== this.state.password){
            this.setState({cpasswordvalid: 'Password does not match'});
            this.setState({cpasswordbutton: 0});
            this.buttonStyle();
        }else{
            this.setState({cpasswordvalid: ''});
            this.setState({cpasswordbutton: 1});
            this.buttonStyle();
        }
    }

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
                        this.setState({emailvalid: 'Email taken. Try Something else!!'});
                        this.setState({emailbutton: 0});
                        this.buttonStyle();
                        return
                    }else if(response.data.taken == 0){
                        this.setState({emailvalid: ''});
                        this.setState({emailbutton: 1});
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

        async callreferral(){
            const referral = this.state.referral;
            if(referral == ""){
                this.setState({referralvalid: ''});
                this.setState({referralbutton: 1});
                this.buttonStyle();
                return
            }else{
                try {
                    const response = await axios.get("/api/checkuser/" + referral, {
                        headers: {
                            securepass: await jwtencode(process.env.SECURE_PASS)
                        } 
                    });
                    
                    if(response.data.taken == 0){
                        this.setState({referralvalid: 'Referral does not exist'});
                        this.setState({referralbutton: 0});
                        this.buttonStyle();
                        return
                    }else if(response.data.taken == 1){
                        this.setState({referralvalid: ''});
                        this.setState({referralbutton: 1});
                        this.buttonStyle();
                        return
                    }
                    
                  } catch (error) {
                        this.setState({referralvalid: ''});
                        noty('An error occured, please try again.','error');
                        this.setState({referralbutton: 0});
                        this.buttonStyle();
                        return
                   
                  }
                
            }
        }
  
        async checkboxChange(event){
            if(!this.state.loading){
            await this.setState({checkbox: event.target.value});
            const checkbox = this.state.checkbox;

            if(checkbox == "on"){
                this.setState({checkboxvalid: ''});
                this.setState({checkboxbutton: 1});
                this.buttonStyle();
                return
            }else{
                this.setState({checkboxvalid: ''});
                this.setState({checkboxbutton: 0});
                this.buttonStyle();
                return
            }
            
          
            }

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

    async handleSubmit(event) {
        event.preventDefault();
        this.LoadingBar.continuousStart()
        this.setState({loading: true});
        this.setState({buttonStyle: 'default-btn grey-btn-disable'});

        var ClientJs = require('clientjs')
        var client = new ClientJS();
        var fingerprint = await client.getFingerprint();
        try {
            const response = await axios.post("/api/fingerprint", {
                username: this.state.username,
                fingerprint: fingerprint
                }, {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    } 
                });

                if(response.data.allow == 0){
                    noty('Multipe account is not allowed, try again after 24 hours','warning');
                    this.setState({loading: false});
                    this.buttonStyle();
                    this.LoadingBar.complete()
                    return
                }

                }catch{
                    noty('An error occured, please try again.','error');
                        this.setState({loading: false});
                        this.buttonStyle();
                        this.LoadingBar.complete()
                        return

            }


        try {
            const response = await axios.post("/api/register", {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                confirmemail: 0,
                active: 1,
                phone: "",
                accountname: "",
                accountnumber: "",
                bankname: "",
                bankcode: "",
                referral: this.state.referral,
                ip: await publicIp.v4(),
                token: await this.token(15)+this.state.username+this.token(15),
                balance: 0,
                payout: 0,
                balancemonth: 0,
                payoutstatus: 0,
                quizstatus: 0,
                quizhour: 0,
                quiznum: 0,
                adnum: 0,
                adclick: 0,
                share: 0,
                sharecode: '',
                read: []
                }, {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    } 
                });

            if(response.status == 200){
                const token = response.data.token;

                const superid = jsCookie.get("superid");

                try {
                    const response = await axios.get("/api/token/" + superid,{
                        headers: {
                            securepass: await jwtencode(process.env.SECURE_PASS)
                        }
                    } );

                    if(response.data.login == 1){

                        var time = new Date(response.data.time);
                            var now = new Date();
                            var seconds = ((now.getTime() - time.getTime()) * .001) >> 0;
                            var minutes = seconds / 60;
                            var hours = minutes / 60;
                        
                        if (hours < 24){
                            register(token)
                            this.LoadingBar.complete()
                            return 
                        }

                        var ec = new evercookie(); 
                        ec.set("superid", token); 

                        register(token)
                        this.LoadingBar.complete()
                        return
 
                        
                    }else if(response.data.login == 0){
                        var ec = new evercookie(); 
                        ec.set("superid", token); 

                        register(token)
                        this.LoadingBar.complete()
                        return
                       
                    }else{
                        noty('An error occured, please try again.','error');
                        this.setState({loading: false});
                        this.buttonStyle();
                        this.LoadingBar.complete()
                        return
                    }

                } catch (error){
                        noty('An error occured, please try again.','error');
                        this.setState({loading: false});
                        this.buttonStyle();
                        this.LoadingBar.complete()
                        return

                }


            }
            
                noty('An error occured, please try again.','error');
                this.setState({loading: false});
                this.buttonStyle();
                this.LoadingBar.complete()
                return
                      
              
          } catch (error) {
                noty('An error occured, please try again.','error');
                this.setState({loading: false});
                this.buttonStyle();
                this.LoadingBar.complete()
                return
          } 
        
      }


      handleScriptLoad() {
       this.setState({supercookie: 1})
       const ec = new evercookie(); 
       ec.get("superid")
     
   }
    

      buttonStyle(){
        if(this.state.usernamebutton == 1 && this.state.passwordbutton && this.state.referralbutton && this.state.cpasswordbutton == 1 && this.state.emailbutton == 1 && this.state.checkboxbutton == 1 && this.state.supercookie == 1){
            return this.setState({buttonStyle: 'default-btn blue-btn'}); 
        }

        return this.setState({buttonStyle: 'default-btn grey-btn-disable'}); 
      }

    render() {

        


        
        return (
            <React.Fragment>
                <DefaultSeo
                        title={'Register'}
                        description={'Register'}
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
                            <h3>Create an Account</h3>
             
                        </div>

                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <b style={{color: 'red'}}>{this.state.usernamevalid}</b><br/>
                                <label>Your Username</label>
                                <input type="text" autoComplete="username" value={this.state.username} onChange={this.usernameChange} className="form-control" id="username" placeholder="Enter your username" required/>
                            </div>

                            <div className="form-group">
                                <b style={{color: 'red'}}>{this.state.passwordvalid}</b><br/>
                                <label>Password</label>
                                <input type="password" autoComplete="new-password" value={this.state.password} onChange={this.passwordChange} className="form-control" id="password" placeholder="Enter your password" required/>
                            </div>

                            <div className="form-group">
                                <b style={{color: 'red'}}>{this.state.cpasswordvalid}</b><br/>
                                <label>Confirm Password</label>
                                <input type="password" autoComplete="new-password" value={this.state.cpassword} onChange={this.cpasswordChange} className="form-control" id="cpassword" placeholder="Confirm your password" required/>
                            </div>

                            <div className="form-group">
                                <b style={{color: 'red'}}>{this.state.emailvalid}</b><br/>
                                <label>Your Email</label>
                                <input type="email" autoComplete="email" value={this.state.email} onChange={this.emailChange} className="form-control" id="email" placeholder="Enter your email here"required />
                            </div>

                            <div className="form-group">
                                <b style={{color: 'red'}}>{this.state.referralvalid}</b><br/>
                                <label>Your Referral</label>
                                <input type="text" value={this.state.referral} onChange={this.referralChange} className="form-control" id="referral" placeholder="Enter referral" />
                            </div>


                            <div className="row">
                                <div className="col-12">
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={this.state.checkbox} onChange={this.checkboxChange}  required/>
                                            <label className="form-check-label" htmlFor="exampleCheck1">I have read and agree to the website terms and conditions</label>
                                        </div>
                                </div>
                            </div>

                            <button type="submit" value="Submit" className={this.state.buttonStyle}> {this.state.loading ? <img src={require('../images/loading.gif')} alt='image' /> : "Register"} </button> 

                            
                                
                        </form>

                        <div className="form-footer">
                            <p>
                                Do you have an account? 
                                <Link href="/login">
                                    <a onClick={() => this.LoadingBar.continuousStart()} className="form-link">Login</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />

              
            </React.Fragment>
        );
    }
}

export default Register;