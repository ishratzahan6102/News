import React from 'react';
import { Button, Card, Image } from '';
import { Link, useLoaderData } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const news = useLoaderData()
    const {details, image_url, title} = news
    return (
        <div className='check-body'>
              <h3>Checkout Now</h3>
                
                    <div className='check-card '>
                    <img alt='' className='author-img'  src={image_url}></img>
                  
                  <h5>{title}</h5>
                 <Link to='/courses'><button className='btn-courses'>Buy</button></Link>
                    </div>
                 
            
               
        </div>
    );
};

export default Checkout;