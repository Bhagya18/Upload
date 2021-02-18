
import React, { Component } from 'react'
import './App.css'
import Upload from './upload'


class App extends Component {
  render() {
    return (
      <div>
         <div className="App">
              
      <div className="topnav" id="myTopnav">
      <a href="#news">Brain Master</a>
       <a href="#news"style={{float: "right"}}>Profile</a>
          <a href="#news"style={{float: "right"}}>Registration</a>
          <a href="#news"style={{float: "right"}}>Login</a>
          <a href="#news"style={{float: "right"}}>ChatBox</a>
          <a href="#news"style={{float: "right"}}>AboutUs</a>
          <a href="#news"style={{float: "right"}}>Home</a>
        </div>
     <br/>
        <div className="Card">
          <Upload/>
        
        </div>
        </div>
</div>
    )
  }
}
export default App;
