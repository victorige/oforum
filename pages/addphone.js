import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { withAuthSync, logout, noty, jwtencode } from "../utils/auth";
import jsCookie from 'js-cookie';
import Router from 'next/router';
import nextCookie from "next-cookies";
import fetch from "isomorphic-unfetch";
import PhoneInput from 'react-phone-input-2';
import LoadingBar from 'react-top-loading-bar';
import { DefaultSeo } from 'next-seo';

class AddPhone extends Component {

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
            phone: '',
            phonevalid: '',
            phonebutton: '',
            loading: false,
            buttonStyle: 'default-btn grey-btn-disable',
            buttonStyleSkip: 'default-btn blue-btn'
        };
        
        this.phoneChange = this.phoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async phoneChange(phone, country){
        if(!this.state.loading){
            await this.setState({phone: phone});
            if(phone.length == 13 && country.name == 'Nigeria'){
                this.setState({phonevalid: ''});
                this.setState({phonebutton: 1});
                this.buttonStyle();
            }else{
                this.setState({phonevalid: ''});
                this.setState({phonebutton: 0});
                this.buttonStyle();
            }  
        }    
    }

  

    async handleSubmit(event) {
        event.preventDefault();
        this.LoadingBar.continuousStart()
        this.setState({loading: true});
        this.setState({buttonStyle: 'default-btn grey-btn-disable'});
        try {
            const token = await jsCookie.get("token");

            const response = await axios.put("/api/insert/" + token,
                { phone: this.state.phone },
                {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    },
                    
                } );

            if(response.status == 200){
                noty('Phone Number Added successfully','success');
                Router.push('/start');
                this.LoadingBar.complete()
                return
            }

            this.LoadingBar.complete()
            return logout();
            
              
          } catch (error) {
                if(error.status == 400){
                    noty('An error occured, please try again.','error');
                    this.setState({loading: false});
                    this.buttonStyle();
                    this.LoadingBar.complete()
                    return
                }else if(error.status == 401){
                    this.LoadingBar.complete()
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
        let { complete } = this.props.data;
        let { status } = this.props;

        if(status == 200){   
            if(complete == true){
                Router.push('/dashboard');
            }
        }else{   
            return logout();
        } 
    }

    buttonStyle(){
        if(this.state.phonebutton == 1){
            return this.setState({buttonStyle: 'default-btn blue-btn'}); 
        }

        return this.setState({buttonStyle: 'default-btn grey-btn-disable'}); 
      }



    render() {
        
        return (
            <React.Fragment>
                 <DefaultSeo
                        title={'Add Phone Number'}
                        description={'Add Phone Number'}
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
                        
                            <h3>Add Phone Number</h3>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Your Phone Number</label>
                                <PhoneInput
                                    country={'ng'}
                                    onlyCountries={['ng']}
                                    masks={{ng: '(...) ... ....'}}
                                    onChange={(phone, country) => this.phoneChange(phone, country)}
                                    countryCodeEditable={false}  
                                    autoFormat={true}  
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        autoFocus: true,
                                        
                                      }}
                                />
                            </div>

                            {this.state.loading ?  
                            <button type="submit" value="Submit" className={this.state.buttonStyle}> <img src={require('../images/loading.gif')} alt='image' /> </button> :
                            <button type="submit" value="Submit" className={this.state.buttonStyle}>Add Phone Number <FontAwesomeIcon icon={faLongArrowAltRight} /> </button> }
                           
                        </form>
                        

                        

                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}



export default withAuthSync(AddPhone)