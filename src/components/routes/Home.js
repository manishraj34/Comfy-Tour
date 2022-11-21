import React from 'react'
import Hero from '../Hero';
import Navbar from "../Navbar";
import HomeImg from "../assects/12.jpg"
import Destination from '../Destination';
import Trip from '../Trip';
import Footer from '../Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <h1 >This is Home</h1> */}
      <Hero 
      
      heroImg={HomeImg}
      title="Your Journey Your Story"
      text = "Choose Your Favourite Destination."
      btnText="Travel Plan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
    <Footer/>
    </>
  )
}
