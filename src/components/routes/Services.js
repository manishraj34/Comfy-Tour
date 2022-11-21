import React from 'react';
import Hero1 from '../../components/Hero1';
import Navbar from "../Navbar";
import AboutImg from "../assects/1.jpg"
import Footer from '../Footer';
import Trip from '../Trip';

export default function Services() {
  return (
    <>
      <Navbar />
      {/* <h1 >This is Home</h1> */}
      <Hero1 
      cls=".heroine img"
      heroimg={AboutImg}
      title="Service"
      // text = "Choose Your Favourite Destination."
      // btnText="Travel Plan"
      url=""
      
      />
      <Trip/>
      <Footer/>
    </>
  )
}
