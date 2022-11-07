import React from 'react'
import { useNavigate } from 'react-router-dom'
const Product_Card = ({data}) => {
    const navigate = useNavigate()
    return (
        <div>
            <div class="card" onClick={() => navigate(`/view-product/${data?._id}`, {
                                                    state: { id: data?._id,image:data?.image }
                                                })}>
                <img src={data?.image[0]} class="card-img-top h_350" alt="..." />
                <img className='like_btn' src={process.env.PUBLIC_URL + '/Images/heart.svg'}  />
                <div class="card-body">
                    <p class="card-text">{data?.title}</p>
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="price">
                            <h4>₹{data?.price}.00</h4>
                            <h6>1 Set (Min. Order)</h6>
                        </div>
                        {/* <div className="bugde">
                            <p>Sample Available</p>
                        </div> */}
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