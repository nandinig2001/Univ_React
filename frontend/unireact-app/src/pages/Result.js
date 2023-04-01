import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';



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
  MDBCheckbox
  
} from 'mdb-react-ui-kit';

const Result = () => {
  return (
    <>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gonzaga.azureedge.net/-/media/Website/Images/Full-Width-Image-and-Video/Admission/fw-drone-shot-2021.ashx?rev=30b08efb97b04f168ffa1fd5d2d30fe8&h=600&w=1440&la=en&hash=CB32626886C5751DB1FC5AE4F7B967CB"
          alt="First slide"
          style={{ height:"50rem" }}
        />
        <Carousel.Caption>
          <h1>RESULTS</h1>
        </Carousel.Caption>
      </Carousel.Item>    
    </Carousel>

    <div className="row mt-5">
<div className="col-md-12">
  <div className="main-title text-center wow fadeIn">
    <h3>View Results</h3>
    <div className="underline1"></div>
    <div className="underline2"></div>
  
  </div>
</div>
</div>

<section style={{ backgroundColor: 'white' }}>
<MDBContainer className="py-5 mt-5" style={{width:"50rem"}}>
   <form>    
   <Form.Select aria-label="Select"   style={{fontSize:"1.5rem"}}>
      <option value="1">Summer Session 2023</option>
        <option value="2">Winter Session March 2023</option>
        <option value="3">Winter Session Dec 2022</option>
    </Form.Select>
    <h5 style={{marginBottom:"1.5rem"}} >Course</h5>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='UserName' />
      <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='PRN' />
      <MDBBtn type='submit' className='mb-4' block>
        Search Hall Ticket
      </MDBBtn>
    </form>
  
    </MDBContainer>
    </section>
    </>
    

  );
};

export default Result;
