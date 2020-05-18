import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { withAuthSync, logout, noty, jwtencode } from "../utils/auth";
import nextCookie from "next-cookies";
import LoadingBar from 'react-top-loading-bar';
import Router from 'next/router'
import jsCookie from 'js-cookie';
import fetch from "isomorphic-unfetch";
import { DefaultSeo } from 'next-seo';


class Dashboard extends Component {

    static async getInitialProps(ctx) {
        const { token } = nextCookie(ctx);    
        const res = await fetch(process.env.HOST + "/api/userdetails/" + token, {
            headers: {
                securepass: await jwtencode(process.env.SECURE_PASS)
            }
          })

          const json = await res.json()

          return { status: res.status, data: json.data, quizhour: json.quizhour, current_session: json.current_session, next_session: json.next_session}

    }

    constructor(props){
        super(props);
       
        this.state = {
            balance: 'loading...',
            payout: 'loading...',
            ratep: 0,
            rate1: 0,
            rate2: 0,
            readstatus: 0,
            loading: false,
            nextmonth: '',
            seourl: '',
            buttonStyle: 'default-btn grey-btn-disable'
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
            await this.conversion()
            setInterval(async() => {await this.conversion() }, 3000)

        }else{   
            return logout();
        } 
        
        try{
        const response = await axios.get("/api/balance/" + username,
                { headers: { securepass: await jwtencode(process.env.SECURE_PASS) }, });

            if(response.status == 200){
                await this.setState({
                    ratep: response.data.balance,
                    balance: parseInt(response.data.balance).toLocaleString() + '.00 points',
                    payout: '\u20A6' + parseInt(response.data.payout).toLocaleString() + '.00'
                })
            }else{
                await this.setState({
                    balance: 'error',
                    payout: 'error'
                })
            }
        }catch{
            await this.setState({
                balance: 'error',
                payout: 'error'
            })
        }

            var actualDate = new Date();
            var newDate = new Date(actualDate.getFullYear(), actualDate.getMonth()+1, actualDate.getDate());
            var nextMonth = new Date(newDate.setDate(1));
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var dateFinal = months[nextMonth.getMonth()]+' '+ nextMonth.getDate()+ 'st, '+nextMonth.getFullYear()
            await this.setState({
                nextmonth: dateFinal
            })


    }

   

    async conversion(){
        var points = Math.floor(Math.random() * (5 - 1) + 1);
        var balance = this.state.ratep * points

        this.setState({
            rate1: points,
            rate2: balance
        })
    }
    
    render() {
        
        var seourl = this.state.seourl
        var { quiznum, quizhour, quizstatus } = this.props.data;
        var dataquiznum = quiznum
        var dataquizhour = quizhour 
        var dataquizstatus = quizstatus 
        var { quizhour, current_session, next_session } = this.props;
        
        return (
            <React.Fragment>
                <DefaultSeo
                        title={'Dashboard'}
                        description={'Dashboard'}
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
                            <h3>Dashboard</h3>
                        </div>
                        <hr/>
                        <h5>Current Balance</h5>
                        <h4>{this.state.balance}</h4>
                        <b><h6 style={{ color: 'red'}}>{'\u2248 \u20A6' + this.state.rate2}</h6></b>

                        <b><small>{'\u2235'}Conversion Rate: 1 points = {'\u20A6' + this.state.rate1}</small></b>
                        <br/><br/>
                        
                        <small>Your current balance will be ready for payout on {this.state.nextmonth}.</small><br/>
                        <small style={{color: 'red'}}>Note: You need to have at least 150 points in your current balance.</small>
                        <br/><br/>
                        
                        <p>
                        <span style={{display: 'block', width: '100%', textAlign: 'center', margin: '-10px 0', overflow: 'hidden' }}>
                       <svg data-v-fb57d9a6={""} width={"303"} height={"12"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}><path data-v-fb57d9a6={""} d={"M1.5 6c10-6.667 20-6.667 30 0s20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0"} stroke={"#A3C4E2"} strokeWidth={"2"}></path></svg>
                        <svg data-v-fb57d9a6={""} width={"303"} height={"12"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}><path data-v-fb57d9a6={""} d={"M1.5 6c10-6.667 20-6.667 30 0s20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0"} stroke={"#A3C4E2"} strokeWidth={"2"}></path></svg>
                       <br/>
                        <span>
                           <p> Current Session: {current_session} - {next_session}<br/>
                            Next Session Starts: {next_session}</p>
                        </span>
                       
                        <span onClick={() => this.LoadingBar.continuousStart()}>
                        <p> 
                            <Link href="/">
                                <a>{quizhour != dataquizhour ? 'Start reading news for the session to earn 5 points.' : ''}</a>
                            </Link>
                            

                            <Link href="/">
                                <a>{dataquiznum < 20 && quizhour == dataquizhour  ? 'Complete reading the news for the session to earn your 5 points.' : ''}</a>
                            </Link></p>
                            </span>
                        {dataquiznum >= 20 && quizhour == dataquizhour ? 'You have earned 5 points. Check back for the next session.' : ''}

                        <svg data-v-fb57d9a6={""} width={"303"} height={"12"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}><path data-v-fb57d9a6={""} d={"M1.5 6c10-6.667 20-6.667 30 0s20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0"} stroke={"#A3C4E2"} strokeWidth={"2"}></path></svg>
                        <svg data-v-fb57d9a6={""} width={"303"} height={"12"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}><path data-v-fb57d9a6={""} d={"M1.5 6c10-6.667 20-6.667 30 0s20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0 20-6.667 30 0 20 6.667 30 0"} stroke={"#A3C4E2"} strokeWidth={"2"}></path></svg>
                        </span>
                        </p><br/>


                        <div onClick={() => this.LoadingBar.continuousStart()}>
                            <Link href="/refer">
                            <a> <h5><FontAwesomeIcon icon={faLongArrowAltRight} /> <b>Refer &amp; Earn</b></h5></a>
                            </Link>
                        </div>
                            
                            <hr/>
                            <div onClick={() => this.LoadingBar.continuousStart()}>
                            <Link href="/payout">
                            <a><h5><FontAwesomeIcon icon={faLongArrowAltRight} /> <b>Payout History</b></h5></a>
                            </Link>
                        </div>
                            
                            <hr/>
                            <div onClick={() => this.LoadingBar.continuousStart()}>
                            <Link href="/editbank">
                            <a><h5><FontAwesomeIcon icon={faLongArrowAltRight} /> <b>Edit Bank Account</b> </h5></a>
                            </Link>
                            </div>
                            <hr/>
                            <div onClick={() => this.LoadingBar.continuousStart()}>
                            <Link href="/reset-password">
                            <a><h5><FontAwesomeIcon icon={faLongArrowAltRight} /> <b>Reset Password</b> </h5></a>
                            </Link>
                            </div>
                            <hr/>
                            <div onClick={() => {
                                this.LoadingBar.continuousStart()
                                logout()
                            }}>
                            
                            <a><h5><FontAwesomeIcon icon={faLongArrowAltRight} /> <b>Logout</b> </h5></a>
                            
                            </div>
                            <hr/>
                        
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default withAuthSync(Dashboard)