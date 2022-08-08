import React from 'react'

const Product_Card = () => {
    return (
        <div>
            <div class="card" >
                <img src={process.env.PUBLIC_URL + '/Images/card_car.png'} class="card-img-top" alt="..." />
                <img className='like_btn' src={process.env.PUBLIC_URL + '/Images/heart.svg'}  />
                <div class="card-body">
                    <p class="card-text">Raysince China supplier mini vehicle 2021 Hot sales smart electric cars.</p>
                    <div className="d-flex justify-content-between">
                        <div className="price">
                            <h4>₹12,000.00</h4>
                            <h6>1 Set (Min. Order)</h6>
                        </div>
                        <div className="bugde">
                            <p>Sample Available</p>
                        </div>
                    </div>
                    <div className="add_cart">
                        <button className='outline_btn'>
                        <img src={process.env.PUBLIC_URL + '/Images/cart.svg'}  /> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_Card