import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../../store/actions/cartActions';

export class ShopProducts extends Component {
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
        let { products } = this.props;
        return (
            <section className="shop-area ptb-100">
                <ToastContainer />
                <div className="container">
                    <div className="woocommerce-topbar">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-7 col-sm-6">
                                <div className="woocommerce-result-count">
                                    <p>Showing 1-8 of 14 results</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <div className="woocommerce-topbar-ordering">
                                    <select className="form-control">
                                        <option value="1">Default sorting</option>
                                        <option value="2">Sort by popularity</option>
                                        <option value="0">Sort by average rating</option>
                                        <option value="3">Sort by latest</option>
                                        <option value="4">Sort by price: low to high</option>
                                        <option value="5">Sort by price: high to low</option>
                                        <option value="6">Sort by new</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
 </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopProducts);