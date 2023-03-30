import React from "react";
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

const Myprofile = () => {
  return (
    <React.StrictMode>
      <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
          <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <h3 className="text mt-5 mb-3">USER NAME</h3>
                <h5 className="text-muted mb-3">College</h5>
                <h5 className="text-muted mb-3">Degree program</h5>
                <h5 className="text-muted mb-3">Department</h5>
                <h5 className="text-muted mb-3">PNR NO: 2019016521456</h5>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
            <h3 className="text m-3">Student Details Form</h3>
              <MDBCardBody>

                <MDBRow>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Phone Number' size='sm' id='form4' type='text'/>
                  </MDBCol>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Address' size='sm' id='form4' type='text'/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <h3 className="text m-3">Semester Wise Grade</h3>
                <MDBRow>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Semester 1' size='sm' id='form4' type='text'/>
                  </MDBCol>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Semester 2' size='sm' id='form4' type='text'/>
                  </MDBCol>
                </MDBRow>
                
                <MDBRow>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Semester 3' size='sm' id='form4' type='text'/>
                  </MDBCol>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Semester 4' size='sm' id='form4' type='text'/>
                  </MDBCol>
                </MDBRow>
                
                <MDBRow>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Semester 5' size='sm' id='form4' type='text'/>
                  </MDBCol>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Semester 6' size='sm' id='form4' type='text'/>
                  </MDBCol>
                </MDBRow>
                
                <MDBRow>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Semester 7' size='sm' id='form4' type='text'/>
                  </MDBCol>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Semester 8' size='sm' id='form4' type='text'/>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Average CGPA' size='sm' id='form4' type='text'/>
                  </MDBCol>
                  <MDBCol sm="6">
                  <MDBInput wrapperClass='mb-1' label='Average Credit' size='sm' id='form4' type='text'/>
                  </MDBCol>
                </MDBRow>
                <hr />
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
                <hr />
                <MDBRow>
                  <MDBCol sm="6">
                  <label class="form-label" for="customFile">All Marksheets:</label>
                  <input className="btn btn-outline-primary" type="file" class="form-control" id="customFile" />
                  </MDBCol>
                  <MDBCol sm="6">
                  <label class="form-label" for="customFile">Internship Certificates</label>
                  <input className="btn btn-outline-primary" type="file" class="form-control" id="customFile" />      
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="6">
                  <label class="form-label" for="customFile">Extra Curricular Activities:</label>
                  <input className="btn btn-outline-primary" type="file" class="form-control" id="customFile" />
                  </MDBCol>
                  <MDBCol sm="6">
                  <label class="form-label" for="customFile">Competitions and Achievements</label>
                  <input className="btn btn-outline-primary" type="file" class="form-control" id="customFile" />      
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <div className="d-flex justify-content-end p-5">
              {/* <MDBBtn className='ms-2' color='warning'>Submit form</MDBBtn> */}
              <button
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




            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </React.StrictMode>
  );
};

export default Myprofile;


