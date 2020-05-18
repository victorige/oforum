import React, { Component } from 'react';
import Navbar from '../../components/Layout/Navbar';
import PageHeader from '../../components/Common/PageHeader';
import Footer from '../../components/Layout/Footer';
import Link from 'next/link';
import ErrorPage from 'next/error';
import axios from 'axios';
import Router, { withRouter } from 'next/router';
import jsCookie from 'js-cookie';
import nextCookie from "next-cookies";
import { withAuthSync, logout, noty, jwtencode, Advert } from "../../utils/auth";
import NewsLogin from './NewsLogin';
import NewsNotLogin from './NewsNotLogin';
import fetch from "isomorphic-unfetch";

class BlogDetails extends Component {
    static async getInitialProps(ctx) {
        const { token } = nextCookie(ctx);    
        const res = await fetch(process.env.HOST + "/api/userdetails/" + token, {
            headers: {
                securepass: await jwtencode(process.env.SECURE_PASS)
            }
          })

          const json = await res.json()

          return { status: res.status, data: json.data, quizhour: json.quizhour, daily: json.daily, next_session: json.next_session }

    }

  
  

    render() {
        if (this.props.status == 200) {
            return <NewsLogin status={this.props.status} data={this.props.data} quizhour={this.props.quizhour} daily={this.props.daily} next_session={this.props.next_session} />
          }
        return <NewsNotLogin />
    }
}

export default withRouter(BlogDetails);