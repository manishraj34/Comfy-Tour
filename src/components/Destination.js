
 import a from "./assects/1.jpg";
  import b from "./assects/2.jpg";
  import c from "./assects/3.jpg";
  import d from "./assects/4.jpg";

import React from "react";
import Data from "./Data";

export default function Destination() {
  return (
    <>
      <div className="text-center my-4">
        <h1>Popular Destinations.</h1>

        <p>Tour give you oppertunity to see a lot, within a time frame.</p>
      </div>

      <Data
      cName="d-flex bd-highlight container "
        head="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon. Mt. Taal boasts a volcano
              inside a lake inside an island.If you fancy closer look, the hike
              up to the crater is a mere 45 minutes, and is easy enough for
              beginners.Guides will assist you most of the way, and you will see
              the peculiar environment found on an active volcano,including
              volcanic rock and steam bands. The hike can be dusty and hot, so
              plan for an early morning trip and then unwind with some bulalo
              before heading back home!"

        img1={a}
        img2={b}
      />

 
    <Data
        cName= "my-3 d-flex bd-highlight container flex-row-reverse"
        head="Mt. Daguldul, Batangas"
        text="Keep you're looking for a hike that's a little more challenging but still good for a beginner mountainer, checkout Mt. Daguldul in San Juan, Batangas.You will start your hike from the beach and pass through topical forest, different rock formation and small streams.There is a small store halfway up the trail where you can take a break and drink buko juice, and through the summit itself may not have the best view, the bridge is fantastic.Once you have made it back down, head straight to the beach for a referencing world deserved swim."

        img1={c}
        img2={d}
      />
      

      
    </>
  );
}
