import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/mint.css";
import 'react-phone-input-2/lib/style.css';

import { DefaultSeo } from 'next-seo';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';



import App from 'next/app'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
      return {
          pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
  }

  // Preloader
  state = {
      loading: true
  };


  componentDidMount() {   
      this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
      
  }
  componentWillUnmount() {
      if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
      }
  }

  
  render () {
      const { Component, pageProps } = this.props
     
      return (
          <React.Fragment>
                  
        
                  <Component {...pageProps} />
             
              
              {/* Preloader */}
              <Loader loading={this.state.loading} />

              {/* Go Top Button */}
              <GoTop scrollStepInPx="50" delayInMs="16.66" />
          </React.Fragment>
      );
  }
}



  export default MyApp