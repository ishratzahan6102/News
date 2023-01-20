import React from 'react';
import { Button, Card } from '';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import "./Course.css"

const Course = ({course}) => {
    console.log(course)
    const {id, category_name, img} = course
    return (
        <div className='courses'>
          
              <Card className="card" >
      <Card.Img variant="top" className='img' src={img} />
      <Card.Body className='card-body mt-1'>
        <Card.Title className='m-0 fs-6'>{category_name}</Card.Title>
        <Link to={`/category/${id}`}><button className='mt-1 btn-courses'><FaBook></FaBook> See Details</button></Link>
      </Card.Body>
      </Card>
        </div>
    );
};

export default Course;