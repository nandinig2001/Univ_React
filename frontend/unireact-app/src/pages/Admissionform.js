import Form from 'react-bootstrap/Form';
// LOGIN REQUIRED

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

const Admissionform = () => (
  <>
    
<div className="row">
<div className="col-md-12">
  <div className="main-title text-center wow fadeIn">
    <h3>Admission Form</h3>
    <div className="underline1"></div>
    <div className="underline2"></div>
  
  </div>
</div>
</div>

<section style={{ backgroundColor: '#eee' }}>
<MDBContainer className="py-5">
<MDBRow>
  <MDBCard className="mb-4">
  <h3 className="text m-3">Student Personal Details</h3>
    <MDBCardBody>

      <MDBRow>
        <MDBCol sm="6">
        <MDBInput wrapperClass='mb-1' label='Full Name' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="6">
        <MDBInput wrapperClass='mb-1' label='Address' size='sm' id='form4' type='text'/>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol sm="6">
        <MDBInput wrapperClass='mb-1' label='Phone No.' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="6">
        <MDBInput wrapperClass='mb-1' label='Date of Birth' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="6">
        <Form.Select aria-label="Default select" style={{marginTop:"1rem", fontSize:"1.5rem"}}>
            <option>Open this select menu</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Cant say</option>
        </Form.Select>
        <h6 class="mt-2">Gender</h6>
        </MDBCol>
      </MDBRow>
      <hr/>
      <h3 className="text m-3">SSC Details</h3>
      <MDBRow>
        <MDBCol sm="3">
        <MDBInput wrapperClass='mb-1' label='SSC Seat No.' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="3">
        <MDBInput wrapperClass='mb-1' label='School Name' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="3">
        <MDBInput wrapperClass='mb-1' label='Year of Passing' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="3">
        <MDBInput wrapperClass='mb-1' label='Percentage/CGPA' size='sm' id='form4' type='text'/>
        </MDBCol>
      </MDBRow>
      <hr/>
      <h3 className="text m-3">HSC Details</h3>
      <MDBRow>
        <MDBCol sm="3">
        <MDBInput wrapperClass='mb-1' label='HSC Seat No.' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="3">
        <MDBInput wrapperClass='mb-1' label='College Name' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="3">
        <MDBInput wrapperClass='mb-1' label='Year of Passing' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="3">
        <MDBInput wrapperClass='mb-1' label='Percentage/CGPA' size='sm' id='form4' type='text'/>
        </MDBCol>
      </MDBRow>
      <hr/>
      <h3 className="text m-3">Course Selection</h3>
      <MDBRow>
        <MDBCol sm="6">
        <Form.Select aria-label="Default select" style={{marginTop:"1rem", fontSize:"1.5rem"}}>
            <option value="1">Bachelors in Engineering/Bachelors in Technology</option>
            <option value="2">Bachelors in Management Studies</option>
            <option value="3">Bachelors in Mass Media</option>
        </Form.Select>
        <h6 class="mt-2">Course Selection</h6>
        </MDBCol>
        </MDBRow>

        <MDBRow>
        <MDBCol sm="6">
        <MDBInput wrapperClass='mb-1' label='Current Percentage/CGPA' size='sm' id='form4' type='text'/>
        </MDBCol>
        <MDBCol sm="6">
        <MDBInput wrapperClass='mb-1' label='Year of Passing' size='sm' id='form4' type='text'/>
        </MDBCol>
      </MDBRow>
      <hr/>
      
      <h3 className="text m-3">Students Document</h3>
      
      <MDBRow>
        <MDBCol sm="6">
        <label class="form-label" for="customFile">10th Std Marksheet:</label>
        <input className="btn btn-outline-primary" type="file" class="form-control" id="customFile" />
        </MDBCol>
        <MDBCol sm="6">
        <label class="form-label" for="customFile">12th Std Marksheet:</label>
        <input className="btn btn-outline-primary" type="file" class="form-control" id="customFile" />      
        </MDBCol>
      </MDBRow>
      
      <MDBRow>
        <MDBCol sm="6">
        <label class="form-label" for="customFile">ID Proof</label>
        <input className="btn btn-outline-primary" type="file" class="form-control" id="customFile" />
        </MDBCol>
        <MDBCol sm="6">
        <label class="form-label" for="customFile">Photograph</label>
        <input className="btn btn-outline-primary" type="file" class="form-control" id="customFile" />      
        </MDBCol>
      </MDBRow>
      <hr />
      <h3 className="text m-3">Pay Application Fee</h3>
      <MDBRow>
        <MDBCol sm="9">
        <h5 className="text m-4">If you are applying for admission in Mumbai University for Term 2023 you will need to pay an application fee of Rs. 150 before you can submit your application.</h5>
        </MDBCol>
        <MDBCol sm="3">
        <button style={{ width: "80px", height: "30px",}}  
            type="submit"
            value="Submit"
            name="submit"
            id="submit"
            className="btn btn-dark text m-2"
            >
            Pay Now
        </button>   
        </MDBCol>
      </MDBRow>
      
    </MDBCardBody>
    <div className="d-flex justify-content-end p-5">
    {/* <MDBBtn className='ms-2' color='warning'>Submit form</MDBBtn> */}
    <button
      type="submit" style={{ width: "300px", height: "40px",}} 
      value="Submit"
      name="submit"
      id="submit"
      className="btn btn-warning"
    >
      Submit Details
    </button>
  </div>

  </MDBCard>
</MDBRow>
</MDBContainer>
</section>

  </>
);

export default Admissionform;
