import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-white text-muted">
  {/* <!-- Section: Social media --> */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">


    {/* <!-- Right --> */}
    {/* <div>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div> */}
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Comfy Tour
          </h6>
          <p>
            Choose your favourite destinations.
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Projects
          </h6>
          <p>
            <a href="#!" className="text-reset">Changelog</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Status</a>
          </p>
          <p>
            <a href="#!" className="text-reset">License</a>
          </p>
          <p>
            <a href="#!" className="text-reset">All Version</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Community
          </h6>
          <p>
            <a href="#!" className="text-reset">Github</a>
          </p>
          <p>
            <a href="#!" className="text-reset">issues</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Project</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Twitter</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Others</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i>Terms of Service</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            Privacy Policy
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i>License</p>
          
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.025)"}}>
    © 2022 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">ComfyTour.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
    </div>
  )
}
