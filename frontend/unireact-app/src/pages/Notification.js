import React from "react";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBContainer, } from 'mdb-react-ui-kit';


const Notification = () => {
  return (
    <React.StrictMode>
      <section >
      <MDBContainer className="py-5">
      <h1 className="mb-5"> LATEST NOTIFICATIONS</h1>
      <MDBTable align='middle'>
      <MDBTableHead>
        
        <tr>
          <th scope='col'>Notification</th>
          <th scope='col'>Title</th>
          
          <th scope='col'>Date</th>
          <th scope='col'>Time</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
             
              <div className='ms-3'>
                <p className='fw-bold mb-1'>College Admin</p>
                <p className='text-muted mb-0'>thadomalshahaniengineering@edu</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Sem 5 Results</p>
            <p className='text-muted mb-0'>Visit the Results tab to view your sem5 results</p>
          </td>

          <td>2nd March 2023</td>
          <td>9.44 pm</td>
          
        </tr>


        {/* 2ND  */}
        <tr>
          <td>
            <div className='d-flex align-items-center'>
             
              <div className='ms-3'>
                <p className='fw-bold mb-1'>College Admin</p>
                <p className='text-muted mb-0'>thadomalshahaniengineering@edu</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Sem 5 Results</p>
            <p className='text-muted mb-0'>Visit the Results tab to view your sem5 results</p>
          </td>

          <td>2nd March 2023</td>
          <td>9.44 pm</td>
          
        </tr>

        {/* 3RD */}
        <tr>
          <td>
            <div className='d-flex align-items-center'>
             
              <div className='ms-3'>
                <p className='fw-bold mb-1'>College Admin</p>
                <p className='text-muted mb-0'>thadomalshahaniengineering@edu</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Sem 5 Results</p>
            <p className='text-muted mb-0'>Visit the Results tab to view your sem5 results</p>
          </td>

          <td>2nd March 2023</td>
          <td>9.44 pm</td>
          
        </tr>
      
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>
    </section>
      
    </React.StrictMode>
  );
};

export default Notification;


