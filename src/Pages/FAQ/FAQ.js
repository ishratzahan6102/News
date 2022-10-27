import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaHandPointLeft, FaHandPointRight } from 'react-icons/fa';

const FAQ = () => {
    return (
        <div className='m-5 p-2'>
               <ListGroup>
      <ListGroup.Item>Class and Level Selection</ListGroup.Item>
      <ListGroup.Item variant="primary"><FaHandPointRight></FaHandPointRight> I am not sure what class to select for my child?</ListGroup.Item>
      <ListGroup.Item variant="secondary"><FaHandPointRight></FaHandPointRight> Can children in Pre-K and K take coding classes?</ListGroup.Item>
      <ListGroup.Item variant="success"><FaHandPointRight></FaHandPointRight> My child loved their instructor, can we get them again for the next class?</ListGroup.Item>
      <ListGroup.Item variant="danger"><FaHandPointRight></FaHandPointRight> My child has never done coding before, are your classes for beginners?</ListGroup.Item>
      <ListGroup.Item variant="warning"><FaHandPointRight></FaHandPointRight> My child has prior coding experience, can they start at Level 2 or Level 3?</ListGroup.Item>
      <ListGroup.Item variant="info"><FaHandPointRight></FaHandPointRight> What is the difference between Minecraft Club, Minecraft Java Mods, and Minecraft Modding: Java?</ListGroup.Item>
      <ListGroup.Item variant="light"><FaHandPointRight></FaHandPointRight> What is the difference between Roblox Build and Roblox Code?</ListGroup.Item>
      <ListGroup.Item variant="dark"><FaHandPointRight></FaHandPointRight> My child loved their class, what should they take next?</ListGroup.Item>
    </ListGroup>
        </div>
    );
};

export default FAQ;