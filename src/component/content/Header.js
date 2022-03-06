import React from "react";
import './Header.css'
import { Button,Container,Navbar,NavDropdown,Form,FormControl,Nav } from 'react-bootstrap';
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({setisOpen,isOpen}){

    

    return(
        <Container fluid >
            <Navbar expand="lg" className="border-bottom" >
                <Navbar.Toggle aria-controls="navbarScroll" />
                {/* <Button className="d-none d-lg-block" onClick={()=> setisOpen(!isOpen) } >
                    <FontAwesomeIcon icon={faBars} />
                </Button> */}
                <Navbar.Brand href="/" className="ms-md-5 " > aswak-Watches </Navbar.Brand>

                <Button className="d-lg-none" onClick={()=> alert("adiil") } />
                <Button className="d-lg-none" onClick={()=> alert("adiil") } />

                <Navbar.Collapse id="navbarScroll">
                    {/* <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
                <div className=" d-none d-lg-block" >
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2 searchBar border-0 rmvGlow"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
                
            </Navbar>
        </Container>
    )
}