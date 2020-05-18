import React, { Component } from 'react';
import Link from 'next/link';

class ProductsDetailsTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="tab products-details-tab">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <ul className="tabs">
                            <li 
                                onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                                className="current"
                            >
                                <span>
                                    <div className="dot"></div> Description
                                </span>
                            </li>
                            
                            <li 
                                onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab2')}}
                            >
                                <span>
                                    <div className="dot"></div> Additional information
                                </span>
                            </li>

                            <li 
                                onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab3')}}
                            >
                                <span>
                                    <div className="dot"></div> Reviews
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="products-details-tab-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
                                        
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="products-details-tab-content">
                                    <ul className="additional-information">
                                        <li><span>Brand:</span> ThemeForest</li>
                                        <li><span>Color:</span> Brown</li>
                                        <li><span>Size:</span> Large, Medium</li>
                                        <li><span>Weight:</span> 27 kg</li>
                                        <li><span>Dimensions:</span> 16 x 22 x 123 cm</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="products-details-tab-content">
                                    <div className="product-review-form">
                                        <h3>Customer Reviews</h3>

                                        <div className="review-title">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <p>Based on 3 reviews</p>

                                            <Link href="#">
                                                <a className="default-btn">Write a Review <span></span></a>
                                            </Link>
                                        </div>

                                        <div className="review-comments">
                                            <div className="review-item">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <h3>Good</h3>
                                                <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                <Link href="#">
                                                    <a className="review-report-link">Report as Inappropriate</a>
                                                </Link>
                                            </div>

                                            <div className="review-item">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <h3>Good</h3>
                                                <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                <Link href="#">
                                                    <a className="review-report-link">Report as Inappropriate</a>
                                                </Link>
                                            </div>

                                            <div className="review-item">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <h3>Good</h3>
                                                <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                                                <Link href="#">
                                                    <a className="review-report-link">Report as Inappropriate</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="review-form">
                                            <h3>Write a Review</h3>

                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" id="name" name="name" placeholder="Enter your name" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <input type="email" id="email" name="email" placeholder="Enter your email" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="form-group">
                                                            <textarea name="review-body" id="review-body" cols="30" rows="7" placeholder="Write your comments here" className="form-control"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <button type="submit" className="default-btn">
                                                            Submit Review <span></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsDetailsTab;