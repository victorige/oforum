import React, { Component } from 'react';
import Navbar from '../../components/Layout/Navbar';
import PageHeader from '../../components/Common/PageHeader';
import Footer from '../../components/Layout/Footer';
import Link from 'next/link';
import ErrorPage from 'next/error';
import axios from 'axios';
import Router, { withRouter } from 'next/router';
import jsCookie from 'js-cookie';
import LoadingBar from 'react-top-loading-bar';
import nextCookie from "next-cookies";
import { withAuthSync, logout, noty, jwtencode, Advert } from "../../utils/auth";
import { DefaultSeo } from 'next-seo';

const textToImage = require('text-to-image');

class NewsLogin extends Component {
   

    constructor(props){
        super(props);

        var { share } = this.props.data;

        this.state = {
            title: '',
            seotitle: '',
            content: '',
            excerpt: '',
            seourl: '',
            pageerror: false,
            question: '',
            answer: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            questionSet: false,  
            questionPostion: '',
            questionTotal: 0,
            questionNumber: 0,
            finalMessage: '',
            timeLeftInSecond: 60,
            timeprogress: 100,
            questionClickDelay: false,
            buttonStyle1: 'default-btn grey-btn',
            buttonStyle2: 'default-btn grey-btn',
            buttonStyle3: 'default-btn grey-btn',
            buttonStyle4: 'default-btn grey-btn',
            share: share,
            sponsorimg1: '',
            sponsorimg2: '',
            sponsorimg3: '',
            earned: 0,
            alread: 0,
            readloading: 0,
            messagesmall: '',
            messagelarge: '',
            linkrandom: '',
        };
        
    }

    async componentDidMount(){
        this.setState({seourl: window.location.href})
        var { complete, quizhour, quizstatus, quiznum, adnum, adclick, adclicktime, sharecode, read } = this.props.data;
        var dataquizhour = quizhour 
        var dataquizstatus = quizstatus 
        var dataquiznum = quiznum
        var dataadnum = adnum
        var dataadclick = adclick 
        var dataadclicktime = adclicktime
        var datasharecode = sharecode
        var { status, quizhour, daily } = this.props;
        var { id, slug, quiz, sponsor, shareid } = this.props.router.query;
        var readarray = read
        var queryquiz = quiz
        var querysponsor = sponsor
        var queryshareid = shareid

        if(status == 200){   
            if(complete == false){
                Router.push('/start');
                this.LoadingBar.continuousStart()
                return
            }

            try {
                const response = await axios.get(process.env.NEWSURL + "/wp-json/wp/v2/posts/" + id,
                          
                );
    
                if(response.data.slug != slug){
                    this.setState({pageerror: true})   
                    return   
                }
    
                
                this.setState({title: response.data.title.rendered})
                this.setState({content: response.data.content.rendered})
                this.setState({excerpt: response.data.excerpt.rendered})
                this.setState({seotitle: response.data.title.rendered + ' - ' + process.env.TITLE})
                
    
                } catch (error) {   
                    this.setState({pageerror: true})  
                    return    
              } 

              if(dataquizhour !== quizhour){
                try {
                    const token = await jsCookie.get("token");
        
                    const response = await axios.put("/api/insert/" + token,
                        {   quizhour: quizhour,
                            quizstatus: 0,
                            quiznum: 1,
                            adnum: Math.floor(Math.random() * (19 - 11) + 11),
                            adclick: 0,
                            read: []
                        },
                        {
                            headers: {
                                securepass: await jwtencode(process.env.SECURE_PASS)
                            },
                            
                        } );
        
                    if(response.status == 200){
                        this.LoadingBar.continuousStart()
                        return location.reload();
                    }
                    return logout();         
                  } catch (error) {
                        if(error.status == 400){
                            noty('An error occured, please try again.','error');
                            Router.push('/dashboard');
                            this.LoadingBar.continuousStart()
                            return
                        }else if(error.status == 401){
                            return logout();
                        }
                        noty('An error occured, please try again.','error');
                        Router.push('/dashboard');
                        this.LoadingBar.continuousStart()
                        return
                  } 


              }else{
                
                if(dataquizstatus == 1){
                    this.setState({earned: 1})
                    await this.callstate()
                    return
                }else{

                    if(dataadnum == dataquiznum){ 
                        if(dataadclick == 1){
                            var time = new Date(dataadclicktime);
                            var now = new Date();
                            var seconds = ((now.getTime() - time.getTime()) * .001) >> 0;
                            var minutes = seconds / 60;
                            if(minutes < 1){
                                const token = await jsCookie.get("token");
                                await axios.put("/api/insert/" + token,
                                {   quizstatus: 1
                                },
                                {
                                    headers: {
                                        securepass: await jwtencode(process.env.SECURE_PASS)
                                    },
                                    
                                } );
                                Router.push('/dashboard');
                                alert('Your session has been terminated. \n You failed to follow the instructions. \n You are to spend at least 1 minute on our sponsor website. \n Check back for the next session. \n Thank you.')
                                return
                            }
            
                        }
                    }

                    if(dataquiznum == 20){ 
                        if(this.state.share != daily){
                            if(querysponsor){
                                if(queryshareid){
                                if(querysponsor == datasharecode){
                                    const ress = await fetch("https://graph.facebook.com/v3.3/?id=" + process.env.SHAREURL + "/?share="+ queryshareid + "&fields=engagement&access_token="+ process.env.FBACCESSTOKEN)
                            
                                      const jsons = await ress.json()
                                    if(jsons.engagement.share_count <= 0){
                                        alert('You failed to share on Facebook.')
                                        return
                                    }else{
                                        
                                        return this.earnpoint()
            
                                    }
            
                                }
                            }
                            }
                            
                        }else{
                            return this.earnpoint()
                        }
                        
            
                    }


                    if(dataadnum == dataquiznum && dataadclick == 0){ 
                      

                        var randomLink = readarray[Math.floor(Math.random()*readarray.length)];
                        var randomLink = '/' + randomLink.id + '/' + randomLink.slug
                        this.setState({linkrandom: randomLink})
                    }else  if(dataquiznum == 20 && this.state.share != daily){ 
                        if(this.state.share != daily){
                            if(querysponsor){
                                if(queryshareid){
                                if(querysponsor == datasharecode){
                                    const ress = await fetch("https://graph.facebook.com/v3.3/?id=" + process.env.SHAREURL + "/?share="+ queryshareid + "&fields=engagement&access_token="+ process.env.FBACCESSTOKEN)
                            
                                      const jsons = await ress.json()
                                    if(jsons.engagement.share_count <= 0){
                                        alert('You failed to share on Facebook.')
                                        return
                                    }else{
                                        
                                        return this.earnpoint()
            
                                    }
            
                                }
                            }
                            }
                            
                        }else{
                            return this.earnpoint()
                        }
                        
            
                    }else{ 
                        let checkread = readarray.find(obj => obj.id == id);

                        if(checkread !== undefined && checkread.length != 0){
                            await this.setState({questionNumber: dataquiznum})
                            await this.setState({questionTotal: 20})
                            this.setState({alread: 1})
                            await this.callstate()
                            return
                        }

                        await this.setState({questionNumber: dataquiznum})
                        await this.setState({questionTotal: 20})
                        
                        await this.start()
                        setInterval(async() => {await this.start() }, 1000)
                        await this.callstate()

                        
                

                    }


                }

              }

              try{
                const dataUri1 = await textToImage.generate('Visit Our Sponsor.', {
                    fontSize: 32,
                    fontFamily: 'Impact',
                    textAlign: 'center',
                    lineHeight: 40
                  })
                this.setState({sponsorimg1: dataUri1})

                const dataUri2 = await textToImage.generate('Follow the below instructions carefully else this session will be terminated.', {
                    fontSize: 28,
                    fontFamily: "'Overpass', sans-serif",
                    textAlign: 'center',
                    textColor: 'red'
                  })
                this.setState({sponsorimg2: dataUri2})

                const dataUri3 = await textToImage.generate('1. Click one of the images below and spend at least 1 minute on our sponsor website. \n 2. After 1 minute come back to our website to complete your session.', {
                    fontSize: 24,
                    fontFamily: "'Overpass', sans-serif",
                    textAlign: 'left',
                    textColor: 'red'
                  })
                this.setState({sponsorimg3: dataUri3})

                }catch{
                return null
                }

 


        }else{   
    
            return logout();
        } 
        



    }

    async ssrt() {

    }
    async callstate() {
        var { next_session } = this.props
        
        if(this.state.earned == 1){
            this.setState({
                messagesmall: 'You have earned for this session.',
                messagelarge: 'Next session starts by ' + next_session
            })
        }else{
            if(this.state.alread == 1){
                this.setState({
                    messagesmall: 'Read another news..',
                    messagelarge: 'You have read this news.'
                })

            }else{
                this.setState({
                    messagesmall: 'News ' + this.state.questionNumber + ' of ' + this.state.questionTotal,
                    messagelarge: 'Read for ' + this.state.timeLeftInSecond + ' second(s)'
                })

            }

        }
    }

    async process() {
        var { id, slug } = this.props.router.query;
        var { quiznum } = this.props.data;
        var dataquiznum = quiznum

        try {
            const token = await jsCookie.get("token");
            await axios.put("/api/news/" + token,
                { id: id, slug : slug },
                {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    },
                    
                } );


                try {
                    const token = await jsCookie.get("token");
        
                    const response = await axios.put("/api/insert/" + token,
                        {   
                            quiznum: dataquiznum + 1,
                           
                        },
                        {
                            headers: {
                                securepass: await jwtencode(process.env.SECURE_PASS)
                            },
                            
                        } );
        
                    if(response.status == 200){
                        this.setState({
                            messagelarge: 'Done.'
                        })
                        noty('You have read it.','success');
                        return
                    }else{
                        
                        return logout();   
                    }
                          
                  } catch (error) {
                            noty('An error occured, please try again.','error');
                            this.setState({
                                messagelarge: 'error... try again..'
                            })
                            return
                       
                  } 
    
             
          } catch (error) {
            noty('An error occured, please try again.','error');
            this.setState({
                messagelarge: 'error... try again..'
            })
            return
          } 
    
        

    }

    async earnpoint() {
        var { username } = this.props.data;
        var datausername = username
        var { daily } = this.props
    
        try {
            const response = await axios.post("/api/balance",
             {
                id: datausername
                },
                {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    },
                    
                } );
    
            if(response.status == 200){
                noty('You have earned 5 points for this session.','success');
                this.setState({share: daily})
                return
            }
            return logout();         
          } catch (error) {
                
                noty('An error occured, please try again.','error');
                Router.push('/dashboard');
                this.LoadingBar.continuousStart()
                return
          } 
    }
    
    async share(){

        var { id, slug } = this.props.router.query;
    
        try {
            const unique = Date.now()
            const token = await jsCookie.get("token");
    
            const response = await axios.put("/api/insert/" + token,
                {   sharecode: unique
                },
                {
                    headers: {
                        securepass: await jwtencode(process.env.SECURE_PASS)
                    },
                    
                } );
    
            if(response.status == 200){
                return window.location = "https://www.facebook.com/dialog/share?app_id="+ process.env.FBAPPID +"&display=popup&href=" + process.env.SHAREURL + "?share="+ unique + "&redirect_uri=" + process.env.HOST + '/' + id + '/' + slug + "?sponsor=" + unique + "%26shareid%3D" + unique
            }else{
                return logout(); 
            }        
          } catch (error) {
                if(error.status == 400){
                    noty('An error occured, please try again.','error');
                    Router.push('/dashboard');
                    this.LoadingBar.continuousStart()
                    return
                }else if(error.status == 401){
                    return logout();
                }
                noty('An error occured, please try again.','error');
                Router.push('/dashboard');
                this.LoadingBar.continuousStart()
                return
          } 
    
    }

    render() {
        
        var { quiznum, adnum, adclick,username } = this.props.data;
        var datausername = username
        var dataquiznum = quiznum
        var dataadnum = adnum
        var dataadclick = adclick 
        var { daily } = this.props;
        var { quiz } = this.props.router.query;
        var queryquiz = quiz

        var seotitle = this.state.seotitle
        var seodes = this.state.excerpt
        var seourl = this.state.seourl
      

        if (this.state.pageerror) {
            return <ErrorPage statusCode="404" />
          }

          if(dataquiznum == 20 && this.state.share != daily){ 
            if(daily == this.state.share){
                return (
                    <React.Fragment>
                       <DefaultSeo
                        title={seotitle}
                        description={seodes}
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
                            <Advert username={datausername} allow={false} page={null} /><hr/>
                        <div className="form-header">
                            <h3>You have earned 5 points for this session.</h3>
                            <br/><br/>
                            <div onClick={() => this.LoadingBar.continuousStart()}>
                            <Link href="/dashboard">
                                <button className={'default-btn blue-btn'}> Return to Dashbaord </button>
                            </Link>
                            </div> 
                            <hr/>
                        <Advert username={datausername} allow={false} page={null} /><br/>
                        <Advert username={datausername} allow={false} page={null} /><br/>
                        <Advert username={datausername} allow={false} page={null} /><br/>
                        <Advert username={datausername} allow={false} page={null} /><br/>
                            </div> 
                            </div>
                        </div>
        
                        <Footer />
                    </React.Fragment>
                );
            }
            return (
                <React.Fragment>
                    <DefaultSeo
                        title={seotitle}
                        description={seodes}
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
                        <Advert username={datausername} allow={false} page={null} /><hr/>
                        <div className="form-header">
                        <h4>Share us with your friends on Facebook.</h4> <h5> Click the Share button.</h5>
                        <div className="clearfix"></div>
                        <br/><br/><br/>
                        <button onClick={() => this.share()} className={'default-btn blue-btn'}> Share on Facebook </button> 
                           
                        </div>
                        <hr/>
                        <Advert username={datausername} allow={false} page={null} /><br/>
                        <Advert username={datausername} allow={false} page={null} /><br/>
                        <Advert username={datausername} allow={false} page={null} /><br/>
                        <Advert username={datausername} allow={false} page={null} /><br/>
                        </div>
                    </div>
    
                    <Footer />
                </React.Fragment>
            );
        }

        if(dataadnum == dataquiznum && dataadclick == 0){ 
            return (
                <React.Fragment>
                    <DefaultSeo
                    title={seotitle}
                    description={seodes}
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
                           <center><img src={this.state.sponsorimg1} /></center>
                           <hr/>
                           <center><img src={this.state.sponsorimg2} /></center>
                           <center><img src={this.state.sponsorimg3} /></center>
                            <hr/>
                            <Advert username={datausername} allow={true} page={dataquiznum} /><br/>
                            <Advert username={datausername} allow={true} page={dataquiznum} /><br/>
                            <Advert username={datausername} allow={true} page={dataquiznum} /><br/>
                            <Advert username={datausername} allow={true} page={dataquiznum} /><br/>
                            <Advert username={datausername} allow={true} page={dataquiznum} /><br/>
                            <Link href={this.state.linkrandom}>
                                <button className={'default-btn blue-btn'}> I don't see an image. </button>
                            </Link>
                           
                        </div>
                    </div>
    
                    <Footer />
                </React.Fragment>
            );
        }
        
        


        return (
            <React.Fragment>
                <DefaultSeo
                title={seotitle}
                description={seodes}
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
                <div className="blog-area blog-ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="blog-details-desc">
                                <Advert username={datausername} allow={false} page={null} /><hr/>
                                    <div className="article-content">
                                        

                                        <h3>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: this.state.title
                                            }}></div>
                                            </h3>

                                            <p><div
                                            dangerouslySetInnerHTML={{
                                                __html: this.state.content
                                            }}></div> </p>    
                                    
                                    </div>
                                    <hr/>
                                    <Advert username={datausername} allow={false} page={null} />
                                    <hr/>
                                    <Advert username={datausername} allow={false} page={null} />
                                    <hr/>
                                    <Advert username={datausername} allow={false} page={null} />
                                    <hr/>
                                    <Advert username={datausername} allow={false} page={null} />
                              

                                    <div className="infobar-footer">
                                            <small>{this.state.messagesmall}</small>
                                            <h3>{this.state.messagelarge}</h3>
                                            </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            
                <Footer />
            </React.Fragment>
        );
    }

    start = async () => {
            
            
            if(this.state.timeLeftInSecond > -1){
            await this.setState({
                timeLeftInSecond: this.state.timeLeftInSecond - 1,
                timeprogress: (this.state.timeLeftInSecond * 100) / 60
              });
            }

            if(this.state.timeLeftInSecond > 0){
                await this.callstate()
            }

            if(this.state.timeLeftInSecond == 0){
                this.setState({
                    messagelarge: 'Please wait...'
                })
               await this.process()  
                  
            }

    
    }



}

export default withAuthSync(withRouter(NewsLogin));