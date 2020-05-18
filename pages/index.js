import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Banner from '../components/HomeFour/Banner';
import Footer from '../components/Layout/Footer';
import BlogCard from '../components/Blog/BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import axios from 'axios';
import jsCookie from 'js-cookie';
import LoadingBar from 'react-top-loading-bar';
import Router, { withRouter } from 'next/router'
import { noty, Advert } from "../utils/auth";
import { DefaultSeo } from 'next-seo';


class Index extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            newslist: [],
            totalpages: 0,
            prev: 0,
            next: 0,
        };
        
    }


    async componentDidMount(){
        var { page } = this.props.router.query;
        if(!page){
            var page = 1
        }
                
        try {

            if(!jsCookie.get("token")){
                var date = new Date()
                var hours = date.setMinutes(date.getMinutes());
                var datte = new Date(hours)
                var datte = new Date(datte.getTime() - (datte.getTimezoneOffset() * 60000 ))
                var datte = datte.toISOString()
                var response = await axios.get(process.env.NEWSURL + "/wp-json/wp/v2/posts?status=publish&per_page=50&page=" + page + "&before=" + datte);
            }else{

                var date = new Date()
                var hours = date.setMinutes(date.getMinutes()-120);
                var datte = new Date(hours)
                var datte = new Date(datte.getTime() - (datte.getTimezoneOffset() * 60000 ))
                var datte = datte.toISOString()
                var response = await axios.get(process.env.NEWSURL + "/wp-json/wp/v2/posts?status=publish&per_page=50&page=" + page + "&before=" + datte );

                
            }
            

           
            this.setState({
                newslist: response.data,
                totalpages: response.headers["x-wp-totalpages"],
                prev: Number(page) - 1,
                next: Number(page) + 1,
            })


            return

            } catch (error) {   
                noty('An error occured, please try again.','error');
                return        
          } 
    }


    render() {
        let { page } = this.props.router.query;

        const left = ()=>{
          
            if(page != 1 && page != undefined && page != null){
                return(
                <div onClick={() => this.LoadingBar.continuousStart()} style={{float: 'left'}}>
                
                    <a href={'?page=' + this.state.prev} className="prev page-numbers">
                        <i className="fas fa-angle-double-left"></i>
                    </a>
                
                </div>)
              
            }

           

          }

          const intro = ()=>{
            if(!jsCookie.get("token")){
                if(page == 1 || page == undefined || page == null){
                
                return(
                    <Banner/>)
              
            }
            else{
                return(<div><PageHeader />
                   
                   </div> )
            }
        }else{
            return (
                <center>   
                    <PageHeader />  
                    <br/>         
                <div onClick={() => this.LoadingBar.continuousStart()}  className="btn-box">
                
                <Link href="/dashboard">
                    <a className="default-btn pink-btn">
                        My Dashboard <span></span>
                    </a>
                </Link>
                 
            </div>
            </center>
           
            )
   
        }

          }

          
          const right = ()=>{
            if(page != this.state.totalpages && this.state.totalpages){
                return(
               <center><div onClick={() => this.LoadingBar.continuousStart()} style={{float: 'right'}}>
                   
                    <a href={'?page=' +  this.state.next} className="next page-numbers">
                        <i className="fas fa-angle-double-right"></i>
                    </a>
                
            </div></center> )
            } 

            


          }

        return (
            <React.Fragment>
                <DefaultSeo
                        title={'Oforum'}
                        description={'Earn Money Online In Nigeria Reading News On Oforum. Registration is Free.'}
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            title: 'Oforum',
                            description: 'Earn Money Online In Nigeria Reading News On Oforum. Registration is Free.',
                            url: process.env.HOST,
                            site_name: process.env.TITLE,
                            images: [
                                { url: process.env.HOST + '/oforum222.png' }
                              ]
                        }} />
                <LoadingBar
                    height={3}
                    color='#f11946'
                    onRef={ref => (this.LoadingBar = ref)}
                />
                
                <Navbar />
                {intro()}
                <br/>
                <Advert username={null} allow={false} page={null} />
                
                <section className="blog-area blog-ptb-100">
                
                
                    <div className="container">
                    
                   
               
                    <div className="section-title">
                            <span className="sub-title">News Update</span>
                            
                        </div>
                    
                        <div className="row">
                       
                        <div  className="col-lg-12 col-md-12">
                       
                               <div className="single-blog-post">

                               <div className="post-content">
                                        <b>
                                            <Link href={'/learn-more'}>
                                                <a><FontAwesomeIcon icon={faLongArrowAltRight} /> Oforum is free to join. Get paid for reading our news. Learn More >>> </a>
                                            </Link>
                                        </b>
                                           
                                    </div>
                                    </div>

                        {Array.isArray(this.state.newslist) && this.state.newslist.map(news => (
                            
                            <div key={news.id} className="single-blog-post">
                                    <div className="post-content">
                                        <b >
                                            <Link href={'/'+ news.id +'/' + news.slug}>
                                                <a> <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: news.title.rendered
                                                        }}></div></a>
                                            </Link>
                                        </b>
                                           
                                    </div>
                                    </div>
                               
                        ))}
                         </div>
                            




                            {/* Pagination  */}
                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                 
                                {left()}
                                {right()}
                                
                                    
                                    
                                </div>
                            </div>
                            {/* End Pagination  */}
                        </div>
                   </div>
                </section>




                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(Index);