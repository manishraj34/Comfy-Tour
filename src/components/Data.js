import React, { Component } from 'react'
// import a from "./assects/1.jpg";
// import b from "./assects/2.jpg";
// import student from "{this.props.cName}"
export default class Data extends Component {
    
    render() {
        return (
            <>
            
            
        <div className={this.props.cName}>
        <div  style={{ width: "50rem" }}>
          <div class="card-body">
            <h2 class="card-title">{this.props.head}</h2>
            <p class="card-text">
            {this.props.text}
            </p>
          </div>
        </div>
        <div style={{ width: "18rem", }}>
          <img src={this.props.img1} class="card-img-top my-4" alt="..." style={{ height: "14rem" }}/>
        </div>
        <div className="mx-1" style={{ width: "18rem" }}>
          <img src={this.props.img2} class="card-img-top" alt="..." style={{ height: "14rem" }}/>
        </div>
      </div>
      </>
    )
  }
}
