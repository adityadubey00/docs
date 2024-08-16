import React from 'react';
// import crd from '../assets/card-1.jpg';
import hood from '../assets/hoodie.png';
import Ahood from '../assets/A-hoodie.png';
import kid from '../assets/kid1.png';
import '../allpages/css/product.css';

const Product = () => {
    return (
        <div className="container">
            <div className="row">
                <div className='my-5'>
                    <h1 className='text-center my-2'>Men's Hoddies</h1>
                </div>
                {[...Array(4)].map((_, index) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-3" key={index}>
                        <div class="cardP w-100">
                            <div class="product-image w-100">
                                <img class="w-75 p-4" src={Ahood} alt="OFF-white Red Edition" draggable="false" />
                            </div>
                            <div class="product-info">
                                <h2>Nike X OFF-white</h2>
                                <p>The 10: Air Jordan 1 off-white - Chicago</p>
                                <div class="price">$999</div>
                            </div>
                            <div class="btn">
                                <button class="buy-btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container">
            <div className="row">
                <div className='my-5'>
                    <h1 className='text-center my-2'>Kids  Hoddies</h1>
                </div>
                {[...Array(4)].map((_, index) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-3" key={index}>
                        <div class="cardP w-100">
                            <div class="product-image w-100">
                                <img class="w-75 p-4" src={kid} alt="OFF-white Red Edition" draggable="false" />
                            </div>
                            <div class="product-info">
                                <h2>Nike X OFF-white</h2>
                                <p>The 10: Air Jordan 1 off-white - Chicago</p>
                                <div class="price">$999</div>
                            </div>
                            <div class="btn">
                                <button class="buy-btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Product;