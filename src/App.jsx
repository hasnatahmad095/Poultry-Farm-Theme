import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    info: Data,
  }

  render() {



    let content = this.state.info.map((item, i) => {
      return (

        <>


          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img src={item.navbar.logo} alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className='' id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#home">{item.navbar.li1}</Nav.Link>
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#link">{item.navbar.li2}</Nav.Link>
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#link">{item.navbar.li3}</Nav.Link>

                  <NavDropdown className='ms-4 text-black fw-semibold' title={item.navbar.li4} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className='ms-4 text-black fw-semibold' href="#link">{item.navbar.li5}</Nav.Link>

                </Nav>
                <Nav.Link href="#link" className='me-5 text-black fw-semibold'>{item.navbar.contact}</Nav.Link>


              </Navbar.Collapse>
            </Container>
          </Navbar>



          <Container fluid className='w-100 sec1' style={{
            backgroundImage: `url(${item.section1.bgimg})`,
            height: "100vh",
            backgroundPosition: "right",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "50px",
          }}>
            <p className='text-black fw-semibold'>{item.section1.s1t1}</p>
            <h1 className='text-black fw-bold'>{item.section1.s1t2}</h1>
            <p className='text-black fw-semibold'>{item.section1.s1t3}</p>
            <button className='bg-warning rounded-pill border-0 text-light p-3'>{item.section1.s1btn1}</button>
          </Container>



          <Container fluid className="sec1 d-flex align-items-center pt-5 pb-5">
            <Row className="m-0 p-0">

            <Col lg={4} md={4} sm={12} xs={12} className='pe-3 ps-3 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='fw-bold'>{item.section2.s2t1}</h1>
                <p className='text-secondary mt-3 mb-5'>{item.section2.s2t2}</p>
                <button className='bg-warning rounded-pill border-0 text-light p-3'>{item.section2.s2btnt1}</button>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12} className='p-5' >
                <img className='w-100' src={item.section2.s2img1} alt="" />
              </Col>

              <Col lg={4} md={4} sm={12} xs={12} className='pe-3 ps-3 d-flex justify-content-center align-items-center'>
                <p className='text-secondary mt-3 mb-5'>{item.section2.s2t3}</p>
              </Col>

            </Row>
          </Container>


          <Container fluid className="sec1 d-flex align-items-center pt-5 pb-5">
            <Row className="m-0 p-0">

              <Col lg={6} md={6} sm={12} xs={12}  className='p-5'>
                <img className='w-100' src={item.section3.s3img1} alt="" />
              </Col>

              <Col lg={6} md={6} sm={12} xs={12} className='pe-3 ps-3 pt-5'>
                <h1 className='fw-bold'>{item.section3.s3t1}</h1>
                <p className='text-secondary mt-3 mb-5'>{item.section3.s3t2}</p>
                <p href="" className='text-black' >{item.section3.s3t3}</p>
                <button className='bg-warning rounded-pill border-0 text-light p-3'>{item.section3.s3t5}</button>
              </Col>

            </Row>
          </Container>



          <Container className="sec1 pt-5 pb-5">
            <div className='w-100'>
              <h1 className='fw-bold text-center'>{item.section4.s4t1}</h1>
              <p href="" className='text-success text-center'>{item.section4.s4t2}</p>
            </div>
            <Row className="m-0 p-0">
              <Col lg={3} md={3} sm={12} xs={12} className='p-2'>
                <img className='w-100' src={item.section4.s4img1} alt="" />
                <p className='mt-3 text-center fw-semibold'>{item.section4.s4t3}</p>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className='p-2'>
                <img className='w-100' src={item.section4.s4img2} alt="" />
                <p className='mt-3 text-center fw-semibold'>{item.section4.s4t4}</p>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className='p-2'>
                <img className='w-100' src={item.section4.s4img3} alt="" />
                <p className='mt-3 text-center fw-semibold'>{item.section4.s4t5}</p>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className='p-2'>
                <img className='w-100' src={item.section4.s4img4} alt="" />
                <p className='mt-3 text-center fw-semibold'>{item.section4.s4t6}</p>
              </Col>

            </Row>
          </Container>



          <Container fluid className="sec1 p-0 m-0 bg-black">
            <Row className="m-0 p-0">

              <Col lg={3} md={3} sm={12} xs={12} className='p-0 m-0 d-flex justify-content-center align-items-center ps-5'>
              <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrlg1}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli1}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5'>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli2}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli3}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli4}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli5}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli6}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5 '>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli6}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli7}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli8}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli9}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli10}</li>
                </ul>
              </Col>

              <Col lg={3} md={3} sm={12} xs={12} className=' p-5'>
                <ul className='list-unstyled'>
                  <li className='text-light fw-semibold'>{item.Footer.ftrli11}</li>
                  <li className='text-light mt-4'>{item.Footer.ftrli12}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli13}</li>
                  <li className='text-light mt-1'>{item.Footer.ftrli14}</li>
                </ul>
              </Col>


            </Row>
          </Container>



        </>


      )
    })

    return (
      <>
        {content}
      </>
    )
  }
}


