import React from 'react';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram, FaPhone, FaCircle, FaLinkedin } from 'react-icons/fa';
import ListGroup from '/ListGroup';
import { Link } from 'react-router-dom';
import './RightSideNav.css'

const RightSideNav = () => {
    return (
        <div>
            <h5>Find us on</h5>
            <ListGroup className='mt-1 list'>
                <ListGroup.Item className='li mb-2 shadow-sm'><FaFacebook></FaFacebook> 
                <a href='https://www.facebook.com/programmingherowebcourse'>Facebook</a></ListGroup.Item>
                <ListGroup.Item className='li mb-2 shadow-sm'><FaCircle></FaCircle><a href='https://web.programming-hero.com/'>Web</a></ListGroup.Item>
                <ListGroup.Item className='li mb-2 shadow-sm'><FaInstagram></FaInstagram><a href='https://www.instagram.com/accounts/login/?next=%2Fprogramminghero%2F&source=omni_redirect'>Instagram</a></ListGroup.Item>
                <ListGroup.Item className='li mb-2 shadow-sm'><FaLinkedin></FaLinkedin><a href='https://www.linkedin.com/company/programminghero/'>Linkedin</a></ListGroup.Item>
                <ListGroup.Item className='li mb-2 shadow-sm'><FaGithub></FaGithub><a href='https://github.com/ProgrammingHero1'>Github</a></ListGroup.Item>
                <ListGroup.Item className='li mb-2 shadow-sm'><FaPhone></FaPhone><a href=" ">01322810873</a></ListGroup.Item>
            </ListGroup>
        
        </div>
    );
};

export default RightSideNav;