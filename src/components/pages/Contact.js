
import '../../App.css'
import Footer from "../Footer"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_75qb7od', 'template_7xyplbe', form.current, 'lQ6LA8LMyt-XC5EI3')
      .then((result) => {
        console.log(result.text);
        console.log(result.text);
        // Clears form/inputs after button is Selected
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (<>
    <div className='contact'>
      <h1 className='page-title'>Contact</h1>
    </div>
    <div className='form-container'>
      <form ref={form} onSubmit={sendEmail}>
        <label className='form-item'>Name</label>
        <input type="text" name="user_name" className='form-item' />

        <label className='form-item'>Email</label>
        <input type="email" name="user_email" className='form-item' />

        <label className='form-item'>Message</label>
        <textarea name="message" className='form-item-message' />

        <input type="submit" value="Send" className='form-item-button' />


      </form>
    </div>

    <Footer />
  </>)
}