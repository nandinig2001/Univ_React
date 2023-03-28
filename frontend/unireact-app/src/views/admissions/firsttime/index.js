import React from "react";

function index() {
  return (
    // <div className="table1">
    //   <table className="table">
    //     <thead>
    //       <tr>
    //         <th scope="col">#</th>
    //         <th scope="col">First</th>
    //         <th scope="col">Last</th>
    //         <th scope="col">Handle</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <th scope="row">1</th>
    //         <td>Mark</td>
    //         <td>Otto</td>
    //         <td>@mdo</td>
    //       </tr>
    //       <tr>
    //         <th scope="row">2</th>
    //         <td>Jacob</td>
    //         <td>Thornton</td>
    //         <td>@fat</td>
    //       </tr>
    //       <tr>
    //         <th scope="row">3</th>
    //         <td colSpan="2">Larry the Bird</td>
    //         <td>@twitter</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <>
      <div className="dropdown text-center ">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="text-center mt-3 ">Accepted</div>
        <div className="row ">
          <div className="col text-center mt-2">
            <span className="w-25">Fall 2022</span>
            <div
              className="progress w-25 text-center"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar w-25"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
