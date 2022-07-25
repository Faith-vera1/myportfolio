import React from 'react'
import { useState } from 'react'
import pics from "../Images/IMG_0715.jpg"

const Contact = () => {
  const [data, setData] = useState({
      name: '',
      password: '',
      msg:'' 
  })
   const eventHandler = (event)=>{
       const{name, value} = event.target;
       setData((preVal) => {
           return{
               ...preVal,
               [name]: value,
       };
       })
   }

     const submitHandle = (event) =>{
         event.preventDefault()
         alert(`Name: ${data.name}, Email:${data.email}, msg: ${data.msg}`)
     }

  return (
    <div>
        <section>
        <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center py-4'></div>
                    <h1>About</h1>
                    <br/>

                </div>

            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <img src={pics} alt='display picture' width='300px' height='300px'/>

                    </div>
                </div>
            </div>
        </section>

        <div className='container'>
            <div className='row  g-3 d-flex justify-content-center'>
            <form className="{submitHandle}">
  <div className="col-md-8 mb-5 ">
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label mb-3">FullName</label>
    <input type="password" className="form-control" id="inputPassword4"
    name='name' onClick={eventHandler} value={data.name}/>
  </div>
    <label for="inputEmail4" className="form-label">Email Address</label>
    <input type="email" className="form-control" id="inputEmail4"
      name='password' onClick={eventHandler} value={data.email}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
            </div>
        </div>

        
    </div>
  )
}

export default Contact