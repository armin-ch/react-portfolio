import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'
import ContactUs from '../../components/ContactUs'
const Contact = () => {
  return (
    <Container className="mt-3">
      {/* <FormGroup>
        <Label for="name">Name</Label>
        <Input type="name" name="name" placeholder="name" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="message">Your Message</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button color="primary">Submit Message</Button> */}
      <ContactUs />
    </Container>
    
  )
}

export default Contact