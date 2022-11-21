// import ""
import React from 'react'
import "../App.css";

export default function Hero(props) {
  return (
    <>
      <div class="card bg-dark text-white hero">
  <img src={props.heroImg} class="card-img" alt="..."/>
  <div class="card-img-overlay hero-text">
    <h1 class="card-title">{props.title}</h1>
    <p class="card-text">{props.text}</p>
    <a href={props.url} className={props.btnClass}>{props.btnText}</a>
  </div>
</div>
    </>
  )
}
