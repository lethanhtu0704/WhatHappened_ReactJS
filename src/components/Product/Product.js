import React, { useState } from 'react';
import data from '../../data';
const Product = props => {

    const [noOfElement, setnoOfElement] = useState(4)

    const slice = data.productData.slice(0, noOfElement)

    const seeMore = () => {
        const newelement = noOfElement + 4
        setnoOfElement(newelement)
    }

    return (
        <div className="product__container">
            <div className="container">
                <div className="row custom-gutter ">
                    {
                        slice.map(product => (
                            <div className="col-md-3 product__item custom-gutter" key={product.id}>
                                <img className="product-img" src={product.img} alt="product img" />
                                <div className="product__info">
                                    <div className="product__infor-title"> {product.title}  </div>
                                    <div className="product__infor-detail">
                                        <div className="product__info-price">
                                            {product.price}  won
                                        </div>
                                        <div className="product__info-love ">
                                            <i class="fas fa-heart"></i> {product.love}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
                <div className="showMore">
                    <button onClick={seeMore} className="button__show "> SEE MORE</button>
                </div>

            </div>
        </div >
    );
};

// Product.propTypes = {

// };

export default Product;