import React from "react";
import { connect } from "react-redux";
import { namefilter } from "../Action/action";
import Rating from "./rating";
import {Button, FormControl, Form,Navbar} from 'react-bootstrap';

function FilterName(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Rating count={props.rate}/>
  
    <Form inline>
      <FormControl onChange={(event) => props.namefilter(event.target.value)}type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  
</Navbar>
     
       
    </div>
  );
}

const mapStateProps = (state) => ({
  rate: state.rate,
});

export default connect(mapStateProps, { namefilter })(FilterName);
