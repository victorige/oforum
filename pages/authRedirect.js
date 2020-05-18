import Cookies from 'js-cookie';
import Router from 'next/router';
import axios from 'axios';
import Noty from 'noty';


export async function login() {
    
    function noty(text,type) {
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

    if(!Cookies.get('token')){
        noty('Login or Register','warning');
        Router.push('/login');
        return false;  
    }

    try {
        const response = await axios.get("/api/token/" + Cookies.get('token') );
        if(response.status == 400){    
            noty('An error occured, please try again.','error');
            Router.push('/login');
            return false;  
        }else if(response.data.login == 1){
            
            return true; 
            
        }else if(response.data.login == 0){
            noty('Login or Register','warning');
            Router.push('/login');
            return false;  
           
        }else{
            noty('An error occured, please try again.','error');
            Router.push('/login');
            return false; 
        }
        
      } catch (error) {
        noty('An error occured, please try again.','error');
        Router.push('/login');
        return false;  
      }
  }