import React from 'react'

const Contact = () => {
  return (

    <div className="contact" id='contact'>
        <h1>Contact Us</h1>
        <br />
      <div className="container form">
        <form action="https://formsubmit.co/anil.sharma@aot.edu.in" method="post">
            <input className="formItems " name="name" placeholder="Enter Name..." type="text" />
            <br/>
            <input className="formItems " name="email" placeholder="Enter Email..." type="email" />
            <br/>
            <textarea className="formItems " placeholder="Message" name="message" id="message" cols="30" rows="8"></textarea>
            <br />
            <br />
            <div className="button">
            <button type='submit'>SUBMIT</button>
            </div>
        </form>

   
      </div>
    </div>
  )
}

export default Contact
