import React from 'react'
import Hero1 from '../../components/Hero1';
import Navbar from "../Navbar";
import AboutImg from "../assects/night.jpg"
// import "../../../src/abc.css";
import "../../../src/App.css"
import Footer from '../Footer';
export default function About() {
  return (
    <>
      <Navbar />
      {/* <h1 >This is Home</h1> */}
      <Hero1 
      cls=".heroine img"
      heroimg={AboutImg}
      title="About"
      // text = "Choose Your Favourite Destination."
      // btnText="Travel Plan"
      url=""
      
      />
      <div className="container my-3 w-75">
        <h2 className='text-center'>Our History</h2>
        <h4>Comfy Tour :</h4>
        <p>Since 2022, Comfy Tour has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world’s marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs.</p>
        <p>We’re a worker-claimed travel organization secured by our qualities, trustworthiness, and commitment to client benefit.</p>
        <p>Our honor-winning organization reliably positions as a standout amongst other offices in the nation (Travel Weekly, Business Travel Weekly), and is the best individual from the renowned Signature Travel Network, an overall association enabling us to give our clients unmatched advantages.</p>
        <p>
        Since 2020, our solid organizational culture and enthusiasm for our calling have brought about our being named every year as one of the “Best Places To Work” in Los Angeles County. Our administration is dynamic on different tourism warning sheets and panels for movement associations.
        </p>
        <p>Travel magazines (Afar, Travel+Leisure), real inn brands, and that are only the tip of the iceberg. ‘Organization Name’ is a Premium Member of ASTA (American Society of Travel Advisors), and also an ASTA Green Member office, and CLIA (Cruise Line International Association).</p>

        <p>Fulfilled workers lead to fulfilled clients. We know the development and accomplishment of our organization relies on satisfying our customer’s needs each day. That is additionally our guarantee.</p>
      </div>
      <Footer/>
    </>
  )
}
