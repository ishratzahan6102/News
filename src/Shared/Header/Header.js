import React, { useContext } from 'react';
import { Image } from '';
import Container from '/Container';
import Nav from '/Nav';
import Navbar from '/Navbar';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import OverlayTrigger from '/OverlayTrigger';
import Tooltip from '/Tooltip';
import './Header.css'


const Header = () => {
  const { user, logOut} = useContext(AuthContext)
    return (
        <div>
          
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='logo' to='/courses'><img src='favicon.ico' alt=''></img> Skillshare</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-0 navbar">
          <Link to="/">Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            {/* <Link to=""><FaMoon></FaMoon></Link> */}
          {
              user?.uid?
              <>
              <Link to="">{user.photoURL?

                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{user?.displayName}</Tooltip>}>
                <span className="">
                  <Image  roundedCircle style={{height:" 30px",pointerEvents: 'none' }} src={user.photoURL}></Image>
                </span>
                </OverlayTrigger>
                :
                <FaUser className='fs-4'></FaUser>}
              </Link>
              <button className='logout' onClick={logOut}>Log out</button>
              </>
              :
              <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign up</Link>
              </>
            }
            <Link to=""><FaSun></FaSun></Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;