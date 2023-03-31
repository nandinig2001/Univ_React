import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
    
  MDBInput,
  MDBRadio,
  MDBSelect
} from 'mdb-react-ui-kit';

const Examschedule = () => {
  return (
    <>
    <React.StrictMode>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gonzaga.azureedge.net/-/media/Website/Images/Full-Width-Image-and-Video/Admission/fw-drone-shot-2021.ashx?rev=30b08efb97b04f168ffa1fd5d2d30fe8&h=600&w=1440&la=en&hash=CB32626886C5751DB1FC5AE4F7B967CB"
          alt="First slide"
          style={{ height:"50rem" }}
        />
        <Carousel.Caption>
          <h1>Examination Schedule</h1>

        </Carousel.Caption>
      </Carousel.Item>    
    </Carousel>
    <div className="row mt-5">
      <div className="col-md-12">
        <div className="main-title text-center wow fadeIn">
          <h3>Upcoming Exams and Timetable</h3>
          <div className="underline1"></div>
          <div className="underline2"></div>
        
        </div>
      </div>
    </div>
    <section>
    <MDBContainer className="py-5">
    <Table striped bordered hover style={{fontSize:"15px"}}>
      <thead>
        <tr>
          <th>SR NO</th>
          <th>EXAMINATION NAME</th>
          <th>LINK TO SCHEDULE</th>
          <th>START DATE</th>
          <th>END DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bachelors in Engineering Sem VI</td>
          <td><a href="https://www.getmyuni.com/be-course">Link</a></td>
          <td>22nd April 2023</td>
          <td>14th May 2023</td>
        </tr>
        <tr>
          <td>2</td>
          <td>BMS SEM III CBGS</td>
          <td><a href="https://www.getmyuni.com/be-course">Link</a></td>
          <td>30th April 2023</td>
          <td>22nd June 2023</td>
        </tr>
        <tr>
          <td>3</td>
          <td>KT Exam for Bachelors in Engineering Sem V</td>
          <td><a href="https://www.getmyuni.com/be-course">Link</a></td>
          <td>10th May 2023</td>
          <td>30th June 2023</td>
        </tr>
        <tr>
          
        </tr>
      </tbody>
    </Table>
    </MDBContainer>
    </section>

     

    </React.StrictMode>
    </>
  );
};

export default Examschedule;
