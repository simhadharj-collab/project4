import React, { Component } from 'react'
import "./App.css";

export default class App extends Component{
constructor(){
  super();
  this.state={data:{
    name:"M.SATYANARAYANA",
    role:"data analyst",
    bio:"enthuiast developer of google company",
    status:[{label: "posts", value:"84"},
             {label:"followers", value:"2,5k"},
             {label:"following", value:"190"}]




  }};
}
  render() {
    const {data} =this.state;
    const BASEURL =import.meta.env.BASE_URL;
    return (
      <div>
      <div>App</div>
      <div className='app'>
                <div className='profile'>
                    <img src={BASEURL+"image.png"} alt='' />
                    <div className='info'>
                        <legend className='name'>{data.name}</legend>
                        <legend className='role'>{data.role}</legend>
                        <legend className='bio'>{data.bio}</legend>
                        <button className='follow'>Follow</button>
                        <button className='message'>Message</button>
                    </div>
                </div>
                <div className='status'>
                    {data.status.map((d)=>(
                        <div className='info'>
                            <legend className='value'>{d.value}</legend>
                            <legend className='label'>{d.label.toUpperCase()}</legend>
                        </div>
                    ))}
                </div>
            </div>
            </div>
    )
  }
}
