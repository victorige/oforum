"use strict";

import React, { Component, useEffect } from "react";
import jsCookie from 'js-cookie';
import Router from 'next/router';
import axios from 'axios';
import Noty from 'noty';
import nextCookies from 'next-cookies';
import AdSense from 'react-adsense';


var jwt = require('jsonwebtoken');


  export const auth = async ctx => {
    const { token } = nextCookies(ctx);

    if (!token) {
      if (typeof window === "undefined") {
        ctx.res.writeHead(302, { Location: "/login" });
        ctx.res.end();
        return
      } else {
        noty('Login or Register','warning');
        Router.push('/login');
        return
      }
    }
  
    try {
        const response = await axios.get("/api/token/" + token,{
            headers: {
                securepass: await jwtencode(process.env.SECURE_PASS)
            }
        } );

        if(response.status == 400){    
            noty('An error occured, please try again.','error');
            Router.push('/login');
            return   
        }else if(response.data.login == 1){     
            return token
            
        }else if(response.data.login == 0){
            noty('Login or Register','warning');
            Router.push('/login');
            return 
           
        }else{
            noty('An error occured, please try again.','error');
            Router.push('/login');
            return
        }
        
      } catch (error) {
        noty('An error occured, please try again.','error');
        Router.push('/login');
        return
      }

      
  };

  export const jwtencode = async(value) => {

    try{
      const encode = await jwt.sign(
        { 
            value: value
        }, process.env.APIKEY, { expiresIn: '3s'  })
        return encode
      }catch{
        return null
      }
  }

  export const txt2img = async(value) => {
    const textToImage = require('text-to-image');

    try{
      const dataUri = await textToImage.generate(value)
      return dataUri
    }catch{
      return null
    }
    
  }

  export const jwtdecode = async (value) => {
    try{
      const decode = await jwt.verify(value, process.env.APIKEY)
      return decode.value
    }catch{
      return null
    }
  }

  
  export const detectPrivateMode = () => {
    
    
  }

  export const login = token => {

    jsCookie.set("token", token);

    noty('Login was successful','success');
    Router.push('/dashboard');
  }

  export const register = token => {

    jsCookie.set("token", token);

    noty('Registration was successful','success');
    Router.push('/start');
  }

  export const logout = () => {
    jsCookie.remove("token");
    
        localStorage.setItem("logout", Date.now());
        noty('Login or Register','warning');
        Router.push("/login");
    
    
  };


  export function redirectOnError() {
    noty('Login or Register','warning');
    Router.push('/login');
  }


  export function noty(text,type) {
    new Noty({
        theme: 'mint',
        text: text,
        type: type,
        progressBar: true,
        timeout: 5000,
        animation: {
            open : 'animated fadeInRight',
            close: 'animated fadeOutRight'
        }     
    }).show();  
}


export class HandleScriptLoad extends Component {
  
  
      async componentDidMount(){

        const scripts = [
            {src: process.env.HOST + '/evercookie.js'},
            {src: process.env.HOST + '/swfobject-2.2.min.js'},
            {src: process.env.HOST + '/jquery-1.4.2.min.js'} ,
        ]

        await scripts.map(item => { 
            this.script = document.createElement("script")
            this.script.src = item.src
            this.script.async = true 
            document.body.appendChild(this.script)
        })
        this.script.onload = () => {
          var ec = new evercookie(); 
      
          ec.get("superid", function(value) { 
            const supertoken = jsCookie.get("token");

            if(supertoken !== value){
              jsCookie.remove("token");
              localStorage.setItem("logout", Date.now());
              noty('Multipe account is not allowed, try again after 24 hours','warning');
              Router.push("/login");
            }

          }); 



        }
       
        try {
          const response = await axios.get("http://ip-api.com/json");
          if(response.data.country !== 'Nigeria'){
            noty('Only Nigerians are authorised.','warning');  
            logout()
            return 
          }   
        } catch (error) {
          return
        } 

        
                          
    }

        render() {
          return (<div/>)
        }
}

export class Advert extends Component {
  
  async clicked(){
    var { username, page } = this.props;
    
    try {
      

      await axios.post("/api/clicked/" + username,
          {   page: page },
          {
              headers: {
                  securepass: await jwtencode(process.env.SECURE_PASS)
              },
              
          } );

          return
    } catch (error) {
      return
    }             
  }

    render() {
      var { allow } = this.props;
      if(allow){
        return (
          <React.Fragment>
            <center>
              <div>
              <AdSense.Google
                  client='ca-pub-9587885399192232'
                  slot='9752656738'
                />
              </div>
              </center>
          </React.Fragment>
          )
      }

      return (
        <React.Fragment>
          <center>
            <div style={{ pointerEvents: 'none' }}>
              <AdSense.Google
                    client='ca-pub-9587885399192232'
                    slot='9752656738'
                  />
            </div>
          </center>
        </React.Fragment>
        )

      
    }
}

export const withAuthSync = WrappedComponent => {

  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === "logout") {
          noty('Login or Register','warning');
          Router.push('/login');
          return
      }
    };
    
    useEffect(() => {

      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
        
      };
    }, []);

    
    return(<React.Fragment>
      <HandleScriptLoad/>
      <script src={process.env.HOST + '/evercookie.js'}></script>
      <script src={process.env.HOST + '/swfobject-2.2.min.js'}></script>
      <script src={process.env.HOST + '/jquery-1.4.2.min.js'}></script>
      
      <WrappedComponent {...props} />
      

      </React.Fragment>)
   
  };

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, token };
  };

  return Wrapper;
};