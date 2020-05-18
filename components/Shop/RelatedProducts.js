import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { addToCart } from '../../store/actions/cartActions';
import { toast } from 'react-toastify';

class RelatedProducts extends Component {
    handleAddToCart = (id) => {
        this.props.addToCart(id); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    render() {
        return (
            <div className="related-products">
                <div className="container">
                    <div className="section-title">
                        <h2>Related Products</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-product-box">
                                <div className="product-image">
                                    <Link href="/single-product">
                                        <a>
                                            <img src={require("../../images/shop/item1.jpg")} alt="image" />
                                            <img src={require("../../images/shop/item1-hover.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="add-to-cart-btn"
                                            onClick={(e) => {
                                                e.preventDefault(); this.handleAddToCart(1)
                                            }}
                                        >
                                            Add To Cart <i className="flaticon-shopping-cart"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/single-product">
                                            <a>Novel Bunch</a>
                                        </Link>
                                    </h3>

                                    <div className="price">
                                        <span className="new">$455.50</span>
                                        <span className="old">$460.50</span>
                                    </div>

                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-product-box">
                                <div className="product-image">
                                    <Link href="/single-product">
                                        <a>
                                            <img src={require("../../images/shop/item2.jpg")} alt="image" />
                                            <img src={require("../../images/shop/item2-hover.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="add-to-cart-btn"
                                            onClick={(e) => {
                                                e.preventDefault(); this.handleAddToCart(2)
                                            }}
                                        >
                                            Add To Cart <i className="flaticon-shopping-cart"></i>
                                        </a>
                                    </Link>

                                    <div className="sale-btn">Sale!</div>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/single-product">
                                            <a>Book Chicks</a>
                                        </Link>
                                    </h3>

                                    <div className="price">
                                        <span className="new">$541.50</span>
                                        <span className="old">$652.50</span>
                                    </div>

                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-product-box">
                                <div className="product-image">
                                    <Link href="/single-product">
                                        <a>
                                            <img src={require("../../images/shop/item3.jpg")} alt="image" />
                                            <img src={require("../../images/shop/item3-hover.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a 
                                            className="add-to-cart-btn"
                                            onClick={(e) => {
                                                e.preventDefault(); this.handleAddToCart(3)
                                            }}
                                        >
                                            Add To Cart <i className="flaticon-shopping-cart"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/single-product">
                                            <a>Book Divas</a>
                                        </Link>
                                    </h3>

                                    <div className="price">
                                        <span className="new">$140.50</span>
                                        <span className="old">$150.50</span>
                                    </div>

                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
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

const mapDispatchToProps= (dispatch)=>{
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(RelatedProducts)