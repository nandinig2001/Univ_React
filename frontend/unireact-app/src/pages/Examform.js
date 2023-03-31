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
  MDBCheckbox
} from 'mdb-react-ui-kit';

const Examform = () => (
  <>
    
<div className="row">
<div className="col-md-12">
  <div className="main-title text-center wow fadeIn">
    <h3>Examination Form</h3>
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
         
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Cant say</option>
        </Form.Select>
        <h6 class="mt-2">Gender</h6>
        </MDBCol>
      </MDBRow>
      <hr/>
      <h3 className="text m-3">Academic Details</h3>
      <MDBRow>
        <MDBCol sm="4">
        <Form.Select aria-label="Default select" style={{marginTop:"1rem", fontSize:"1.5rem"}}>
            <option value="1">Bachelors in Engineering/Bachelors in Technology</option>
            <option value="2">Bachelors in Management Studies</option>
            <option value="3">Bachelors in Mass Media</option>
        </Form.Select>
        <h6 class="mt-2">Course</h6>
        </MDBCol>
        <MDBCol sm="4">
        <Form.Select aria-label="Default select" style={{marginTop:"1rem", fontSize:"1.5rem"}}>
            <option value="1">SEM I</option>
            <option value="2">SEM II</option>
            <option value="3">SEM III</option>
            <option value="3">SEM IV</option>
            <option value="3">SEM V</option>
            <option value="3">SEM VI</option>
            <option value="3">SEM VII</option>
            <option value="3">SEM VIII</option>
        </Form.Select>
        
        <h6 class="mt-2">Semester Year</h6>
        </MDBCol>
        <MDBCol sm="4">
        <MDBInput wrapperClass='mb-1' label='College Name' size='sm' id='form4' type='text'/>
        </MDBCol>
      </MDBRow>
      <hr/>
      <h3 className="text m-3">Subject Selection</h3>
      <MDBRow>
        <MDBCol sm="6" style={{margin:"1rem", fontSize:"1.3rem"}}>
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Artificial Intelligence (AI) (Paper Code: IT-601)' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Software Engineering (SE) (Paper Code: IT-604)' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Big Data Analytics (BDA) (Paper Code: IT-602)' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Internet of Things (IoT) (Paper Code: IT-603)' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Cyber Security (CS) (Paper Code: IT-605)' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Cloud Computing (CC) (Paper Code: IT-606)' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Web Technology (WT) (Paper Code: IT-607)' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Natural Language Processing (NLP) (Paper Code: IT-608)' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Information Retrieval (IR)) (Paper Code: IT-608)' />
        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Mobile Application Development (MAD) (Paper Code: IT-608)' />
        </MDBCol>
        
      </MDBRow>
      <hr/>
      <h3 className="text m-3">Pay Application Fee</h3>
      <MDBRow>
        <MDBCol sm="9">
        <h5 className="text m-4">If you are applying for examination in Mumbai University for Term 2023 you will need to pay an application fee of Rs. 50 before you can submit your application.</h5>
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
    <button style={{ width: "300px", height: "40px",}} 
      type="submit"
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

export default Examform;
