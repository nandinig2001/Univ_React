// LOGIN REQUIRED TO CONTINUE

import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Examform = () => {
  return (
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
          <h1>Examination Registeration</h1>
          <h3>University of Mumbai - Exam Registeration form</h3>
        </Carousel.Caption>
      </Carousel.Item>    
    </Carousel>

    {/*Containers*/}
    

        

    </React.StrictMode>
  );
};

export default Examform;
