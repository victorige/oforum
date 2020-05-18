import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import { DefaultSeo } from 'next-seo';

class Disclaimer extends Component {
    render() {
        return (
            <React.Fragment>
                 <DefaultSeo
                        title={'Disclaimer'}
                        description={'Disclaimer'}
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: process.env.HOST,
                            site_name: process.env.TITLE,
                        }} />
                <Navbar />
                <PageHeader />

                <div className="main-content ptb-80">
                <div className="container">
                    <h3>Disclaimer</h3>
                    <p>While we make every effort to ensure that we accurately represent all the products and services reviewed on Oforum and their potential for income, it should be noted that earnings and income statements made by Oforum and its advertisers / sponsors are estimates only of what we think you can possibly earn. There is no guarantee that you will make these levels of income and you accept the risk that the earnings and income statements differ by individual.</p>
                    <p>As with any business, your results may vary, and will be based on your individual capacity, business experience, expertise, and level of desire. There are no guarantees concerning the level of success you may experience. The testimonials and examples used are exceptional results, which do not apply to the average purchaser, and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual’s success depends on his or her background, dedication, desire and motivation.&nbsp;</p>
                    <p>There is no assurance that examples of past earnings can be duplicated in the future. We cannot guarantee your future results and/or success. There are some unknown risks in business and on the internet that we cannot foresee which could reduce results you experience. We are not responsible for your actions.&nbsp;</p>
                    <p>The use of our information, products and services should be based on your own due diligence and you agree that Oforum and the advertisers / sponsors of this website are not liable for any success or failure of your business that is directly or indirectly related to the purchase and use of our information, products and services reviewed or advertised on this website.</p>
                </div>
            </div>


                <Footer/>
            </React.Fragment>
        );
    }
}

export default Disclaimer;