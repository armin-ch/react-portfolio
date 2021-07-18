import React from 'react'
import emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE, 'contact_form', e.target, process.env.REACT_APP_USER)
      .then((result) => {
        console.log(result.text)
        alert('Your message has been submitted. I will get back to you shortly!');
        document.getElementById("1").value = '';
        document.getElementById("2").value = '';
        document.getElementById("3").value = '';
      }, (error) => {
        console.log(error.text)
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="user_name" id="1" placeholder="name" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="user_email" id="2" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="message">Your Message</Label>
        <Input type="textarea" name="message" id="3" placeholder="message" />
      </FormGroup>
      <input type="submit" value="Send" className="btn btn-primary mt-1" />
    </form>
  );
}