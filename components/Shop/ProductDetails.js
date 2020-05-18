import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { addToCart, addQuantityWithNumber } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import Router from 'next/router'
import RelatedProducts from './RelatedProducts';
import ProductsDetailsTab from './ProductsDetailsTab';

class ProductDetails extends Component {
    state = {
        qty: 1,
        max: 10,
        min: 1
    }

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(2, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
        Router.push('/cart')
    }

    handleAddToCart = (id) => {
        // this.props.addToCart(id);
        this.props.addQuantityWithNumber(id, this.state.qty);  

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <section className="product-details-area ptb-100">
                <ToastContainer />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="product-details-image">
                                <img src={require("../../images/shop/item2.jpg")}  alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="product-details-desc">
                                <h3>Book Chicks</h3>

                                <div className="price">
                                    <span className="new-price">$541.00</span>
                                    <span className="old-price">$652.00</span>
                                </div>

                                <div className="product-review">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>

                                    <Link href="#">
                                        <a className="rating-count">3 reviews</a>
                                    </Link>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                                <div className="product-add-to-cart">
                                    <div className="input-counter">
                                        <span 
                                            className="minus-btn"
                                            onClick={this.DecreaseItem}
                                        >
                                            <i className="fas fa-minus"></i>
                                        </span>
                                        <input 
                                            type="text" 
                                            value={this.state.qty}
                                            min={this.state.min}
                                            max={this.state.max}
                                            onChange={e => this.setState({ qty: e.target.value })}
                                        />
                                        <span 
                                            className="plus-btn"
                                            onClick={this.IncrementItem}
                                        >
                                            <i className="fas fa-plus"></i>
                                        </span>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="default-btn"
                                        onClick={(e) => {
                                            e.preventDefault(); this.handleAddToCart(2)
                                        }}
                                    >
                                        <i className="fas fa-cart-plus"></i> 
                                        Add to Cart 
                                        <span></span>
                                    </button>
                                </div>

                                <div className="buy-checkbox-btn">
                                    <div className="item">
                                        <input className="inp-cbx" id="cbx" type="checkbox" />
                                        <label className="cbx" htmlFor="cbx">
                                            <span>
                                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg>
                                            </span>
                                            <span>I agree with the terms and conditions</span>
                                        </label>
                                    </div>

                                    <div className="item">
                                        <Link href="#">
                                            <a 
                                                className="btn btn-light"
                                                onClick={e => {
                                                    e.preventDefault(); this.handleAddToCartFromView()
                                                }}
                                            >Buy it now!</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="custom-payment-options">
                                    <span>Guaranteed safe checkout:</span>

                                    <div className="payment-methods">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/payment/payment1.svg")} alt="Image" />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/payment/payment2.svg")} alt="image" />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/payment/payment3.svg")} alt="image" />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/payment/payment4.svg")} alt="image" />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/payment/payment5.svg")} alt="image" />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/payment/payment6.svg")} alt="image" />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/payment/payment7.svg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            {/* Products Details Tab */}
                           <ProductsDetailsTab />
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <RelatedProducts />
            </section>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))},
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductDetails)