import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaShoppingBag } from 'react-icons/fa'

const Card = () => {
  return (
    <div>
       <section className='card'>
                <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='Shoe' className="card-img"/>

                <div className='card-details'>
                    <h3 className='card-title'>Shoe</h3>
                    <section className='card-reviews'>
                          <AiFillStar className="ratings-star"/>
                          <AiFillStar className="ratings-star"/>
                          <AiFillStar className="ratings-star"/>
                          <AiFillStar className="ratings-star"/>
                          <span className='total-reviews'>4</span>
                    </section>
                    <section className='card-price'>
                        <div className='price'>
                          <del>$300</del> 200
                        </div>
                        <div className='bag'>
                        <FaShoppingBag className="bag-icon" />
                        </div>
                    </section>
                </div>          
          </section>
    </div>
  )
}

export default Card
