import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { withAuthSync, logout, noty, jwtencode } from "../utils/auth";
import nextCookie from "next-cookies";
import LoadingBar from 'react-top-loading-bar';
import Router from 'next/router'
import jsCookie from 'js-cookie';
import fetch from "isomorphic-unfetch";
import { DefaultSeo } from 'next-seo';


class Start extends Component {

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
            phone: "",
            accountnumber: "",
            loading: false,
            buttonStyle: 'default-btn grey-btn-disable'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    async componentDidMount() {
        let { complete, phone, accountnumber } = this.props.data;
        let { status } = this.props;


        if(status == 200){   
            if(complete == true){
                Router.push('/dashboard');
            }

            await this.setState({
                phone: phone,
                accountnumber: accountnumber

            })
        }else{   
            return logout();
        } 
        this.buttonStyle()   
    }

    buttonStyle(){
        if(this.state.phone !== "" && this.state.accountnumber !== ""){
            return this.setState({buttonStyle: 'default-btn blue-btn'}); 
        }

        return this.setState({buttonStyle: 'default-btn grey-btn-disable'}); 
      }

      async handleSubmit() {
        
        if(this.state.phone !== "" && this.state.accountnumber !== ""){
        this.LoadingBar.continuousStart()
        this.setState({loading: true});
        this.setState({buttonStyle: 'default-btn grey-btn-disable'});
        try {
            const token = await jsCookie.get("token");

            const response = await axios.put("/api/insert/" + token,
                { complete: true },
                {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    },
                    
                } );

            if(response.status == 200){
                noty('Registration complete','success');
                Router.push('/dashboard');
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
        noty('An error occured, please try again.','error');
                this.setState({loading: false});
                this.buttonStyle();
                this.LoadingBar.complete()
                return
        
      }

    
    render() {
        
        return (
            <React.Fragment>
                <DefaultSeo
                        title={'Start'}
                        description={'Start'}
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
                            <h3>Get Started</h3>
                            <p>Complete your registration.</p>
                        </div>
                        <hr/>
                        <div onClick={() => this.LoadingBar.continuousStart()}>
                            <Link href="/addphone">
                                <h5><FontAwesomeIcon icon={faLongArrowAltRight} /> <b>Add Phone Number</b> <i style={{color: 'green'}}> {this.state.phone == "" ? '': <FontAwesomeIcon icon={faCheckDouble} style={{float: "right"}} />  }  </i></h5>
                            </Link>
                        </div>
                            
                            <hr/>
                            <div onClick={() => this.LoadingBar.continuousStart()}>
                            <Link href="/addbank">
                                <h5><FontAwesomeIcon icon={faLongArrowAltRight} /> <b>Add Bank Account</b> <i style={{color: 'green'}}>{this.state.accountnumber == "" ? '': <FontAwesomeIcon icon={faCheckDouble} style={{float: "right"}} />  }</i></h5>
                            </Link>
                            </div>
                            <hr/>

                            {this.state.loading ?  
                            <button type="submit" value="Submit" className={this.state.buttonStyle}> <img src={require('../images/loading.gif')} alt='image' /> </button> :
                            <button onClick={() => this.handleSubmit()} type="submit" value="Submit" className={this.state.buttonStyle}>Complete <FontAwesomeIcon icon={faLongArrowAltRight} /> </button> }
                           
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default withAuthSync(Start)