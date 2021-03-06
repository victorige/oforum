import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';
import axios from 'axios';
import { login, noty, jwtencode } from '../utils/auth';
import jsCookie from 'js-cookie';
import LoadingBar from 'react-top-loading-bar';
import { DefaultSeo } from 'next-seo';

const publicIp = require('public-ip');

class Login extends Component {

    constructor(props){
        super(props);
       
        this.state = {
            username: '',
            password: '',
            usernamevalid: '',
            passwordvalid: '',
            loading: false,
            usernamebutton: '',
            passwordbutton: '',
            supercookie: '',
            buttonStyle: 'default-btn grey-btn-disable'
        };


        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
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
            return
        }else if(username.length > 15){
            this.setState({usernamevalid: 'Username cannot be greater than 15 characters'});
            this.setState({usernamebutton: 0});
            this.buttonStyle();
            return
        }else if(!isValid){
            this.setState({usernamevalid: 'Only letters and numbers are allowed'});
            this.setState({usernamebutton: 0});
            this.buttonStyle();
            return
        }else{
            this.setState({usernamevalid: ''});
            this.setState({usernamebutton: 1});
            this.buttonStyle();
            return
        }
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
            return
        }else if(password.length > 20){
            this.setState({passwordvalid: 'Password cannot be greater than 20 characters'});
            this.setState({passwordbutton: 0});
            this.buttonStyle();
            return
        }else{
            this.setState({passwordvalid: ''});
            this.setState({passwordbutton: 1});
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

        



        try {
            const response = await axios.post("/api/login", {
                username: this.state.username,
                password: this.state.password,
                join: new Date(),
                ip: await publicIp.v4(),
                }, {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    } 
                });

                if(response.data.match == 0){
                    noty('Username or Password is incorrect','warning');
                    this.setState({loading: false});
                    this.setState({buttonStyle: 'default-btn blue-btn'});
                    this.LoadingBar.complete()
                    return
                }else if(response.data.match == 1){

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


                    
                    const token = response.data.token;
                    const superid = jsCookie.get("superid");

                    try {
                        const response = await axios.get("/api/token/" + superid,{
                            headers: {
                                'securepass': await jwtencode(process.env.SECURE_PASS)
                            }
                        } );
    
                        if(response.data.login == 1){
    
                            var time = new Date(response.data.time);
                            var now = new Date();
                            var seconds = ((now.getTime() - time.getTime()) * .001) >> 0;
                            var minutes = seconds / 60;
                            var hours = minutes / 60;
                       
                            if (hours < 24){
                                login(token)
                                this.LoadingBar.complete()
                                return 
                            }
    
                            var ec = new evercookie(); 
                            ec.set("superid", token); 
    
                            login(token)
                            this.LoadingBar.complete()
                            return
     
                            
                        }else if(response.data.login == 0){
                            var ec = new evercookie(); 
                            ec.set("superid", token); 
    
                            login(token)
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
        if(this.state.usernamebutton == 1 && this.state.passwordbutton == 1 && this.state.supercookie == 1){
            return this.setState({buttonStyle: 'default-btn blue-btn'}); 
        }

        return this.setState({buttonStyle: 'default-btn grey-btn-disable'}); 
      }

    render() {
        return (
            <React.Fragment>
                <DefaultSeo
                        title={'Login'}
                        description={'Login'}
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
                            <h3>Login</h3>
                            <p>If you have an account with us, please log in.</p>
                        </div>
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <b style={{color: 'red'}}>{this.state.usernamevalid}</b><br/>
                                <label>Your Username</label>
                                <input type="text" autoComplete="username" value={this.state.username} onChange={this.usernameChange} className="form-control" id="username" placeholder="Enter your username" />
                            </div>

                            <div className="form-group">
                            <b style={{color: 'red'}}>{this.state.passwordvalid}</b><br/>
                                <label>Password</label>
                                <input type="password" autoComplete="new-password" value={this.state.password} onChange={this.passwordChange} className="form-control" id="password" placeholder="Enter your password" />
                            </div>
    
                            <div className="row">
                        
                                <div className="col-12 text-right">
                                    <Link href="/reset-password">
                                        <a onClick={() => this.LoadingBar.continuousStart()} className="form-link right">Forgot password?</a>
                                    </Link>
                                </div>
                            </div>
                            <br/>
    
                            <button type="submit" value="Submit" className={this.state.buttonStyle}> {this.state.loading ? <img src={require('../images/loading.gif')} alt='image' /> : "Login"} </button> 
                        </form>

                        <div className="form-footer">
                            <p>
                                Don’t have an account? 
                                <Link href="/register">
                                    <a onClick={() => this.LoadingBar.continuousStart()} className="form-link">Register</a>
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

export default Login;