import React from "react";
// import "./trip.css"
import TripData from "./TripData";
import Trip1 from "./assects/5.jpg"
import Trip2 from "./assects/9.jpg"
import Trip3 from "./assects/6.jpg"

export default function Trip() {
  return (
    <>
      <div className="text-center my-4">
        <h1>Recent Trips</h1>

        <p>You can discover unique destinations using Google Map.</p>
        
      </div>

      <div className="d-flex">

<TripData
  image={Trip1}
  heading="Trip in Indonesia"
  text="Indonesia, officially the Republic of Indonesia, is a country in South East Asia and Ocean between the Indian and Pacific Ocean.It consists of over 17,000 islands, including Sumatra, Java, Sulawesi and parts of Borneo and New Guinea."
/>
<TripData
  image={Trip2}
  heading="Bhutan Short Tour"
  text="Have limited time in your hands or want to take a short trip to Bhutan? Great! Here’s the 02N/03D Bhutan Short Tour that lets you visit the top tourist attractions in Paro and Thimphu. Easy transfers, comfortable accommodation and sightseeing, it’s all here in this 2 nights 3 days Bhutan tour package from India. Even though it is a short tour, the itinerary has been planned in a way that you get to visit all the popular tourist spots in Paro & Thimphu."
/>
<TripData
  image={Trip3}
  heading="KAZIRANGA WITH MEGHALAYA"
  text="The north eastern part of India is blessed with oodles of natural splendors, and some of the best spots to witness them are Kaziranga National Park and Meghalaya. On one hand where the Kaziranga National Park provides you the rare sight of the exotic one horned rhinos, on the other hand Meghalaya greets you with picture perfect vistas. If you wish to enjoy a tour to both of these destinations, then avail our special North-East India Travel Package."
/>
  </div>
  
  
    </>
  );
}
