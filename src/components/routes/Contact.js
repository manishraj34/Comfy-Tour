import React from 'react'
import Hero1 from '../../components/Hero1';
import Navbar from "../Navbar";
import AboutImg from "../assects/img.jpg"
import Footer from '../Footer';
export default function Contact() {
  return (
    <>
      <Navbar />
      {/* <h1 >This is Home</h1> */}
      <Hero1 
      cls=".heroine img"
      heroimg={AboutImg}
      title="Contact"
      // text = "Choose Your Favourite Destination."
      // btnText="Travel Plan"
      url=""
      
      />
      
      <div className="container my-3 w-25">
      <form>
      <h2 className='text-center'>Contact Us</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder='Enter Your E-mail'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Subject</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Subject' />
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
      <Footer/>
    </>
  )
}
