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

class NewsNotLogin extends Component {
   
    constructor(props){
        super(props);

        

        this.state = {
            title: '',
            seotitle: '',
            content: '',
            excerpt: '',
            seourl: '',
            pageerror: false,
            
        };
        
    }

    async componentDidMount(){
        this.setState({seourl: window.location.href})
        var { id, slug } = this.props.router.query;
        
        try {
            const response = await axios.get(process.env.NEWSURL + "/wp-json/wp/v2/posts/" + id,
                      
            );

            

            if(response.data.slug != slug){
                this.setState({pageerror: true})   
                return   
            }

             
            this.setState({title: response.data.title.rendered})
            this.setState({seotitle: response.data.title.rendered + ' - ' + process.env.TITLE})
            this.setState({content: response.data.content.rendered})
            this.setState({excerpt: response.data.excerpt.rendered})
            

            } catch (error) {   
                this.setState({pageerror: true})      
          } 
    }

    render() {
        var seotitle = this.state.seotitle
        var seodes = this.state.excerpt
        var seourl = this.state.seourl

        if (this.state.pageerror) {
            return <ErrorPage statusCode="404" />
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
                            <div className="col-lg-8 col-md-12">
                                <div className="blog-details-desc">
                                <Advert username={null} allow={false} page={null} /><br/><hr/>
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
                                    <Advert username={null} allow={false} page={null} /><br/>
                                    <Advert username={null} allow={false} page={null} /><br/>

                                        </div>
                            </div>




                            <div className="col-lg-4 col-md-12">
                            <aside className="widget-area" id="secondary">
                            <Advert username={null} allow={false} page={null} /><br/>
                            <Advert username={null} allow={false} page={null} /><br/>
                             </aside>
                             <Link onClick={() => this.LoadingBar.continuousStart()} href="/login">
                             <div className="infobar-footer">
                                            <small>Login or Register</small>
                                            <h3>Login to Earn</h3>
                                            </div>
                            </Link>
   
                            </div>
                        </div>
                    </div>
                </div>
            
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(NewsNotLogin);