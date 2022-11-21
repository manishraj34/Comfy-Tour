import React from "react";

export default function TripData(props) {
  return (
    <>
      <div class="row  row-cols-1 row-cols-md-0 g-4 container">
        <div class="col d-flex">
          <div class="card h-100">
          
            <img src={props.image} class="card-img-top h-50  "  alt="..." />
            <div class="card-body">
              <h4 class="card-title">{props.heading}</h4>
              <p class="card-text">{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
