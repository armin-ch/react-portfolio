import React from 'react'
import emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_nsz1vwr', 'contact_form', e.target, 'user_2P86bgZaM1zTmZW9Ad2qM')
      .then((result) => {
        console.log(result.text)
        alert('Your message has been submitted. I will get back to you shortly!')
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="user_name" placeholder="name" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="user_email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="message">Your Message</Label>
        <Input type="textarea" name="message" placeholder="message" />
      </FormGroup>
      <input type="submit" value="Send" className="btn btn-primary mt-1" />
    </form>
  );
}