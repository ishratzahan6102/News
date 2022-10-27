import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../../Shared/RigthSideNav/RightSideNav';
import CourseDetails from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("https://dragon-news-server-ishratzahan6102.vercel.app/news-categories")
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])
    return (
        <div>
              <Container className='mt-5'>
                    <Row>
                    <Col  className='pb-3' lg="2">
                        <RightSideNav></RightSideNav>
                    </Col>
                    <Col className='main-layout grid-layout margin-left g-0' lg="8">
                    {
                    courses.map(course => <CourseDetails key={course.id}
                        course={course} ></CourseDetails>
                    )
                }
                    </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Courses;