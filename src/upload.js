import React, { Component } from 'react'
import './upload.css'
class upload extends Component {
  
  render() {
    return (
     

      <div className="Upload">
        <span className="Title"><h1>Upload User Documents</h1></span>
        
        <span className="subTittle"> 
        <p><h2>
             You can upload papers regarding Genaral Knowledge or IQ Knowledge here.
             </h2></p></span>
        <div className="Content">  
        <div className="Files" />
        <input type="file" id="myfile" name="myfile" />
          <br />
        </div>
        <div className="Saveas">
        <lable> save as </lable>
        <input type="" id="save" name="save as" />
        </div>
        <div className="Actions" />
        <input type="submit" />
        <br />
        <input type="reset" name="clear" />
        <br /><br />
         </div>
         

    )
  }
}

export default upload;