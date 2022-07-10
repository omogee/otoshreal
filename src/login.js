import React, { useState, useEffect } from 'react';
import background from "./background.jpeg"
import { Link } from 'react-router-dom';


function Login(props) {
 
    return ( 
        <div>
             <div style={{height:"100%",width:"100%",position:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url(${background})`}}>
        </div>
        
        <div >
          <div className='row' >
              <div className='col- col-sm-3 col-md-4'></div>
              <div className='col-12 col-sm-6 col-md-4' style={{backgroundColor:"rgba(255,255,255,0.8)",padding:"20px",marginTop:"8%",zIndex:"10"}}>
                  <div style={{width:"100%"}}>
                   <div style={{textAlign:"center"}}>
                       <h4 className="title">LOGIN</h4>
                      
                   </div>
                   <div>
                       <br/>
                       <input  type="text" name="username" placeholder='&#xf007; Email/Username' style={{fontFamily:"FontAwesome"}} className='form-control'></input>
                       <br/>
                       <br/>
                       <input  type="password" name="password" placeholder='&#xf023; Password' style={{fontFamily:"FontAwesome"}} className='form-control' ></input>
                      <br/>
                       <small style={{float:"right",cursor:"pointer",fontSize:"14px",color:"grey"}}>Forgot Password?</small>
                       <br/>
                       <br/>
                      <div style={{width:"100%"}}>
                        <center>
                        <button className='btn btn-lg'  style={{backgroundColor:"#FF6347",color:"white",padding:"10px",borderBottomLeftRadius:"45%",borderTopLeftRadius:"45%",borderBottomRightRadius:"45%",borderTopRightRadius:"45%",fontWeight:"bold",width:"50%"}}>
                           LOGIN
                       </button>
                        </center>
                      </div>
                       <div style={{marginTop:"60px",fontSize:"18px"}}>
                           <center>
                               <small>Not Yet a Registered User</small><br/>
                               <small> Click <Link to={`/register`}>Here</Link> To Register</small>
                           </center>
                       </div>
                   </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
     );
}

export default Login;