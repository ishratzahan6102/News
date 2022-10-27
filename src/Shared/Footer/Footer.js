import React from 'react';
import { FaBrain } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer text-center'>
            
            <section  class="bg-dark text-white">
                <div style={{height:"400px"}} class="d-flex justify-content-center align-items-center">
                   <div class="text-center text-white-50 d-flex flex-column">
                    

                    <p class="text-white fs-1 fw-bold"><FaBrain></FaBrain> Skillshare</p>
                    <small> Level-4, 34, Awal Centre, Banani, Dhaka</small>
                    <small> Helpline : 01322810867 , 01322810873</small>
                    <small>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</small>

                  </div>
                </div>
              </section>
        </div>
    );
};

export default Footer;