import React, { Component } from 'react';
import Link from 'next/link';

class PageHeader extends Component {
    render() {
        
        let { pageTitle, breadcrumbTextOne, breadcrumbTextTwo, breadcrumbUrl } = this.props;

        return (
            <React.Fragment>
                <div className="page-title-area page-title-bg2">
                    

                    {/* Animation Shape Image */}
                    <div className="shape-img2">
                        <img src={require("../../images/shape/shape2.svg")} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={require("../../images/shape/shape3.svg")} alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src={require("../../images/shape/shape4.png")} alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src={require("../../images/shape/shape5.png")} alt="image" />
                    </div>
                    <div className="shape-img7">
                        <img src={require("../../images/shape/shape7.png")} alt="image" />
                    </div>
                    <div className="shape-img8">
                        <img src={require("../../images/shape/shape8.png")} alt="image" />
                    </div>
                    <div className="shape-img9">
                        <img src={require("../../images/shape/shape9.png")} alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src={require("../../images/shape/shape10.png")} alt="image" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PageHeader;