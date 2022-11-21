// import ""
import React from 'react'
import "../App.css";

export default function Hero1(props) {
  return (
    <>
      <div class="card bg-dark text-white heroine">
  <img src={props.heroimg} class={props.cls} alt="..."/>
  <div class="card-img-overlay hero-text">
    <h1 class="card-title">{props.title}</h1>
    <p class="card-text">{props.text}</p>
    
  </div>
</div>
    </>
  )
}
