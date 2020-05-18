import React, { Component } from 'react';
import Navbar from '../../components/Layout/Navbar';
import PageHeader from '../../components/Common/PageHeader';
import Footer from '../../components/Layout/Footer';
import Link from 'next/link';
import ErrorPage from 'next/error';
import axios from 'axios';
import Router, { withRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import { withAuthSync, logout, noty, jwtencode, Advert } from "../../utils/auth";
import { DefaultSeo } from 'next-seo';

class Reset extends Component {
   
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


        this.passwordChange = this.passwordChange.bind(this);
        this.cpasswordChange = this.cpasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async componentDidMount(){
        var { id } = this.props.router.query;

        if(!id){
            noty('Invalid Link.','error');
                this.setState({loading: false});
                this.buttonStyle();
                Router.push('/');
                this.LoadingBar.complete()
            return
        }

        try {
            const response = await axios.get("/api/checkreset/" + id, {
                headers: {
                    securepass: await jwtencode(process.env.SECURE_PASS)
                } 
            });
            
            if(response.data.taken == 0){
                noty('Invalid Link.','error');
                this.setState({loading: false});
                this.buttonStyle();
                Router.push('/');
                this.LoadingBar.complete()
            return
            }
            
          } catch (error) {
            noty('An error occured, please try again.','error');
            this.setState({loading: false});
            this.buttonStyle();
            Router.push('/');
            this.LoadingBar.complete()
            return
           
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

        var { id } = this.props.router.query;

        try {
            const response = await axios.put("/api/newpassword/" + id,
            { 
                reset: '',
                token: await this.token(30),
                password: this.state.password
            },
            {
                headers: {
                    securepass: await jwtencode(process.env.SECURE_PASS)
                },
                
            } );

           
            if(response.status == 200){

                noty('Password Reset Successful','success');
                    this.setState({loading: false});
                    this.buttonStyle();
                    Router.push('/login');
                    this.LoadingBar.complete()
                    return

                
              
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
        if(this.state.cpasswordbutton == 1){
            return this.setState({buttonStyle: 'default-btn blue-btn'}); 
        }

        return this.setState({buttonStyle: 'default-btn grey-btn-disable'}); 
      }



    render() {
        return (
            <React.Fragment>
                <DefaultSeo
                        title={'Enter New Password'}
                        description={'Enter New Password'}
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
                            <p>Enter new password.</p>
                        </div>

                        <form onSubmit={this.handleSubmit}>

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



                            <button type="submit" value="Submit" className={this.state.buttonStyle}> {this.state.loading ? <img src={require('../../images/loading.gif')} alt='image' /> : "Reset"} </button>
                        </form>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(Reset);