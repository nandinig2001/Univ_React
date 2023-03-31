import { Container, Row, Col } from "reactstrap";
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

const Admissionpro = () => (
  <>
    <main className="my-5 py-5">
      <Container className="px-0">
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col
            xs={{ order: 2 }}
            md={{ size: 4, order: 1 }}
            tag="aside"
            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
          >
            <Button variant="dark" href="Admissionform" className="mb-3 h-3" style={{fontSize:"15px"}}>Apply Now</Button>
            <Card>
                <CardImg top width="100%" src="https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/12/20200220_InternationalStudentsRecordNumbers.jpg?fit=1200%2C800&ssl=1" alt="banner" />
                <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                    IMPORTANT DATES
                    </CardTitle>
                    <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        style={{fontSize:"15px"}}
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold" style={{fontSize:"15px"}}>Application Opens</div>
                        
                        </div>
                        <Badge bg="warning"  style={{fontSize:"15px"}}>
                        10th June 2023
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        style={{fontSize:"15px"}}
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold" style={{fontSize:"15px"}}>Application Closes</div>
                        
                        </div>
                        <Badge bg="warning"  style={{fontSize:"15px"}}>
                        25th June 2023
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        style={{fontSize:"15px"}}
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold" style={{fontSize:"15px"}}>Round 1</div>
                        
                        </div>
                        <Badge bg="warning"  style={{fontSize:"15px"}}>
                        5th July 2023
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        style={{fontSize:"15px"}}
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold" style={{fontSize:"15px"}}>Round 2</div>
                        
                        </div>
                        <Badge bg="warning"  style={{fontSize:"15px"}}>
                        21st July 2023
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        style={{fontSize:"15px"}}
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold" style={{fontSize:"15px"}}>Round 3</div>
                        
                        </div>
                        <Badge bg="warning"  style={{fontSize:"15px"}}>
                        29st July 2023
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        style={{fontSize:"15px"}}
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold" style={{fontSize:"15px"}}>Procedure Ends</div>
                        
                        </div>
                        <Badge bg="warning"  style={{fontSize:"15px"}}>
                        2nd August 2023
                        </Badge>
                    </ListGroup.Item>
                    
                    </ListGroup>    
                </CardBody>
            </Card>
          </Col>

          <Col
            xs={{ order: 1 }}
            md={{ size: 7, offset: 1 }}
            tag="section"
            className="py-5 mb-5 py-md-0 mb-md-0"
          >
            
            

            <div className="position-relative">
            <span className="d-block pb-4 h2 text-dark border-bottom border-gray">
            Mumbai University Admission Process
          </span>

          <article
            className="pt-5 text-secondary text-justify"
            style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}
          >
            <h4>1. Application: Candidates need to apply for the program of their choice through the online admission portal of Mumbai University. The portal is usually open for a specified period of time, and candidates need to fill in their personal and academic details as well as upload relevant documents.
                <br/><br/>2. Merit List: The university releases a merit list based on the candidate's academic performance and any entrance exams conducted for the program. Candidates who meet the cut-off criteria in the merit list are eligible for further admission processes.
                <br/><br/>3. Document Verification: Candidates need to visit the designated center for document verification. They need to carry their original documents for verification, such as mark sheets, certificates, identity proof, etc.
                <br/><br/>4. Payment of Fees: Candidates who have successfully cleared the document verification process need to pay the admission fees. The fee amount varies depending on the program and the category of the candidate.
                <br/><br/>5. Admission Confirmation: After the payment of fees, the candidate's admission is confirmed, and they are issued an admission letter. Candidates need to report to the college on the specified date to attend the orientation program.
            </h4>
          </article>
        </div>


        <Accordion defaultActiveKey="0 " style={{marginTop:"2rem"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h4>Indian Students</h4></Accordion.Header>
        <Accordion.Body>
        <h5>
        Step 1 : Student registers and logs in the website.<br></br>
        Step 2 : Student fills in his/her profile.<br></br>
        Step 3 : Fill up the application form and uploads all the necessary documents. Then submits his/her application.<br></br>
        Step 4 : The Mumbai University – Admission Team will verify the eligibility which requires a minimum of 24 working days after submission of documents for undergraduates. For Post-graduate admissions will be finalized only after June of the Academic year in which the form is submitted.<br></br>
        Step 5 : If the student is eligible, he/she will get an “Eligibility letter” along with the payment information for the registration fee (1150$).<br></br>
        Step 6 : The student pays the eligible fee, submits proof of payment to the Admission Team. Upon receipt of payment the student gets the “Provisional Admission Letter”.<br></br>
        Step 7 : The Admission Team, upon receipt of the above will require minimum 24 working days to finally process and allot the college.<br></br>
        Step 8 : Upon getting an allotted college, the student will receive Mumbai University “Final Admission Letter” which the student will use to apply for his/her visa.<br></br>
        Step 9 : The student will get the full tuition fee cost and payment information. The limit to pay the first (1st) year tuition fee is 7 days post arrival in India.<br></br>
        Step 10 : It is the responsibility of the student to report to the college and course allotted to you. Failure to report will entail automatic cancellation of admission. No refund of any of the fees paid to Mumbai University is possible under any circumstances.<br></br>
        Step 11 : It is mandatory for any student from non English speaking countries to pass English Proficiency Test and his/her responsibility to be present on the day of the examination<br></br>
        </h5>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h4>Internation Students</h4></Accordion.Header>
        <Accordion.Body>
            <h5>
        The Indian Academy student community is truly international. More than 600 students come from 35+ countries around the world, and study a wide range of subjects. Students from all over India as well as other countries, together representing a broad spectrum of diversified cultural and economic environments, constitute a harmonious community and add to a rich learning experience. Hence, the selection process is carefully designed to take this aspect of diversity into account.
        </h5></Accordion.Body>
      </Accordion.Item>
    </Accordion>
            
          </Col>
        </Row>
      </Container>
    </main>

    <div className="row">
      <div className="col-md-12">
        <div className="main-title text-center wow fadeIn">
          <h3>Application Dates</h3>
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
          <th>COURSE NAME</th>
          <th>DETAILS</th>
          <th>APPLICATION START DATE</th>
          <th>APPLICATION END DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bachelors in Engineering CET Based</td>
          <td><a href="https://www.getmyuni.com/be-course">Link</a></td>
          <td>22nd April 2023</td>
          <td>30th May 2023</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bachelors in Mass Media</td>
          <td><a href="https://www.getmyuni.com/be-course">Link</a></td>
          <td>30th April 2023</td>
          <td>22nd June 2023</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bachelors in Business Mangement</td>
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

  </>
);

export default Admissionpro;