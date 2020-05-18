import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import TermsAndConditionsContent from '../components/TermsAndConditions/TermsAndConditionsContent';
import Footer from '../components/Layout/Footer';
import { DefaultSeo } from 'next-seo';

class TermsAndConditions extends Component {
    render() {
        return (
            <React.Fragment>
            <DefaultSeo
                   title={'Terms And Conditions'}
                   description={'Terms And Conditions'}
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
               <h3>Terms And Conditions</h3>
               <p><strong>Introduction</strong></p>
               <p>The following Terms and Conditions control your membership on Oforum. You agree that you have read and understand this Agreement (“Agreement”) and that your membership on Oforum (the “Program”) shall be subject to the following Terms and Conditions between you (the “Member”) and Oforum. These Terms and Conditions may be modified at any time by Oforum Administrative.&nbsp;</p>
               <p>Please review them from time to time since your ongoing use is subject to the terms and conditions as modified. Your continued participation in Oforum after such modification shall be deemed to be your acceptance of any such modification. If you do not agree to these Terms and Conditions, please do not register to become a member of Oforum.&nbsp;</p>
               <p><strong>Terms of Participation</strong>&nbsp;</p>
               <p>Member must be 18 years of age or older to participate. Members must provide Oforum with accurate, complete and updated registration information, including an accurate name, mailing address and email address.&nbsp;</p>
               <p>To the full extent allowed by applicable law, Oforum at its sole discretion and for any or no reason may refuse to accept applications for membership.&nbsp;</p>
               <p>Members may not&nbsp;</p>
               <p><strong>(i)</strong> activate or use more than one Member account;&nbsp;</p>
               <p><strong>(ii)</strong> select or use an Email Address, Phone Number or Social Media Account of another person;&nbsp;</p>
               <p><strong>(iii)</strong> use a name subject to rights of another person without authorisation from that person;&nbsp;</p>
               <p><strong>(iv)</strong> use a false or misleading name (Except for privacy), mailing address, or email address, phone number or social media account to activate or use a Member account.&nbsp;</p>
               <p>By signing up as a Oforum member, member is opting-in to receive other special offer emails and SMS notifications from Oforum. If you do not wish to receive these emails or SMS notifications, you may cancel your account anytime .&nbsp;</p>
               <p>Oforum reserves the right to track Member’s activity by both IP Address as well as individual browser activity.&nbsp;</p>
               <p>Member agrees not to abuse his or her membership privileges by acting in a manner inconsistent with this Agreement.&nbsp;</p>
               <p>Member agrees not to attempt to earn through other than legitimate channels authorized by Oforum.&nbsp;</p>
               <p>Member agrees not to participate in any fraudulent behavior of any kind.&nbsp;</p>
               <p><strong>Spamming</strong> is strictly prohibited. Any spamming done to advertise Oforum will result in immediate termination of your account and a forfeiture of your account earning balance. Incidents will be dealt with on a case by case basis.&nbsp;</p>
               <p><strong>Refund Policy For Old Oforum:</strong> As we are offering non-tangible virtual digital goods (Oforum Membership) which is registration / entry fee , <strong>we do not generally issue refunds after the successful registration of membership or purchasing of our registration e-pin / coupon code</strong>. Please note that by purchasing the Oforum Membership, you agree to the terms of the Refund Policy. <strong>NO REFUND</strong>&nbsp;</p>
               <p><strong>Withdrawal, Payout or Cash Out:</strong>&nbsp;</p>
               <p>Oforum's&nbsp; payout is available only if you&nbsp; have between 150 points or more points before the end of the month.</p>
               <p><strong>Payment</strong></p>
               <p>Your payout will be sent to your bank account before the end of each months.</p>
               <p>Member’s discontinued participation in the Oforum Membership System or failure to notify Oforum of any address (mailing or email) changes may result in the termination of Member’s membership and forfeiture of Member’s unredeemed Earnings.&nbsp;</p>
               <p>Member shall comply with all laws, rules, and regulations that are applicable to member. Member acknowledges that Member may only participate in Oforum Membership System if and to the extent that such participation is permitted by such laws, rules, and regulations.&nbsp;</p>
               <p><strong>If member objects to any of the Terms and Conditions of this Agreement, or any subsequent modifications to this agreement, or becomes dissatisfied with the Program, Member’s only recourse is to immediately discontinue participation in Oforum Membership System and properly terminate his or her membership.</strong>&nbsp;</p>
               <p><strong>Disclaimers</strong></p>
               <p>MEMBER EXPRESSLY AGREES THAT USE OF THE SERVICE IS AT MEMBER’S SOLE RISK. THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, Oforum EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED BY LAW, CUSTOM OR OTHERWISE, INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. Oforum Membership System MAKES NO WARRANTY REGARDING ANY GOODS OR SERVICES PURCHASED OR OBTAINED THROUGH THE PROGRAM OR ANY TRANSACTIONS ENTERED INTO THROUGH THE PROGRAM.&nbsp;</p>
               <p>TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, NEITHER Oforum Membership System NOR ANY OF ITS MEMBERS, SUBSIDIARIES, PUBLISHERS, SERVICE PROVIDERS, LICENSORS, OFFICERS, DIRECTORS OR EMPLOYEES SHALL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATING TO THIS AGREEMENT, RESULTING FROM THE USE OR THE INABILITY TO USE THE SERVICE OR FOR THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES OR RESULTING FROM ANY GOODS OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH THE PROGRAM OR RESULTING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF USER’S TRANSMISSIONS OR DATA, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, USE, DATA OR OTHER INTANGIBLE, EVEN IF SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.&nbsp;</p>
               <p>To prevent unauthorized access, maintain data accuracy, and ensure the correct use of information, Oforum uses appropriate industry standard procedures to safeguard the confidentiality of Member’s personal information, such as SSL, firewall, encryption, token authentication, application proxies, monitoring technology, and adaptive analysis of the Website’s traffic to track abuse of the Oforum Website and its data. However, no data transmitted over the Internet can be 100% secure. As a result, while Oforum strives to protect its Members personal information, Oforum cannot guarantee the security of any information that Members transmit to or from the participating advertisers/merchants and Member does so at his/her own risk.&nbsp;</p>
               <p>This Agreement constitutes the entire Agreement between Member and Oforum in connection with general membership in the Oforum and supersedes all prior agreements between the parties regarding the subject matter contained herein. If any provision of this AGREEMENT is found invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the other provisions of this AGREEMENT will remain in force. No failure of either party to exercise or enforce any of its rights under this AGREEMENT will act as a waiver of such rights.</p>
           </div>
       </div>


           <Footer/>
       </React.Fragment>
        );
    }
}

export default TermsAndConditions;