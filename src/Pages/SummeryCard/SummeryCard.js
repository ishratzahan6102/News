import React from 'react';
import { Button, Card, Col, Container, Image, ListGroup, Row } from '';
import { FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SummeryCard.css'
import ReactTOPdf from "react-to-pdf";


const ref = React.createRef();

const SummeryCard = ({cs}) => {
    const {_id, title, details, image_url, total_view, author, points} = cs
    console.log(cs)
    return (
        <div className='background_color' >
          <Container className='pt-5 pdf_container'  ref={ref}>
          <h3 className='text-start'>Read More  <ReactTOPdf targetRef={ref} >
          {({ toPdf }) => 
            
             <FaFilePdf onClick={toPdf} className="get_started"></FaFilePdf>
           
          }
        </ReactTOPdf></h3>
            <Row>
              <Col lg='7'>
                <Card className='cd-card d-flex flex-row'>
                  <Image alt='' className='author-img'  roundedCircle  src={author.img}></Image>
                  <Card.Body className='cd-body'>
                    <Card.Title>{author.name}</Card.Title>
                    <Card.Text>
                    MS (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5
                    </Card.Text>
                  </Card.Body>
              </Card>

              <div className='mt-5'>
                <h3>What will you learn from this course?</h3>
                
                  <ListGroup>
                    <ListGroup.Item className='p-3'>{points.p1}</ListGroup.Item>
                    <ListGroup.Item className='p-3'>{points.p2}</ListGroup.Item>
                    <ListGroup.Item className='p-3'>{points.p3}</ListGroup.Item>
                    <ListGroup.Item className='p-3'>{points.p4}</ListGroup.Item>
                    <ListGroup.Item className='p-3'> {points.p5}</ListGroup.Item>
                </ListGroup>

              </div>
              <div className='mt-5'>
                <h3>About Course</h3>
                <Card className='w-100'>
                  {/* <Image alt='' className='author-img'  roundedCircle  src={author.img}></Image> */}
                  <Card.Body className='cd-body'>
                    <Card.Text>{details}</Card.Text>
                  </Card.Body>
              </Card>
              </div>

              </Col>

              <Col lg='3'>
                    <Card className='m-auto mt-5'>
                    <Image alt='' className='w-100 p-4'  src={image_url}></Image>
                    <Card.Body className='cd-body'>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                        {details.slice(0,100)}
                        <h3 className='my-1'>{total_view} $</h3>
                      </Card.Text>
                      <Link to={`/news/${_id}`}><Button className=''>Get Premium Access</Button></Link>
                    </Card.Body>
                  </Card>
              </Col>

            </Row>
          </Container>
        </div>
    );
};

export default SummeryCard;