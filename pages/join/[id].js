import React, { Component } from 'react';
import jsCookie from 'js-cookie';
import Router, { withRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

class Join extends Component {
   
    constructor(props){
        super(props);

    }

    async componentDidMount(){
        var { id } = this.props.router.query;
        jsCookie.set("referral", id);
        Router.push('/');
    }

    render() {
        var { id } = this.props.router.query;
        return (
            <React.Fragment>
                <DefaultSeo
                        title={id + ' wants you to join Oforum.ng'}
                        description={'Oforum is free to join. Get paid for reading our news.'}
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: 'https://oforum.ng',
                            site_name: process.env.TITLE,
                        }} />

               <b>Loading...</b>
            </React.Fragment>
        );
    }
}

export default withRouter(Join);