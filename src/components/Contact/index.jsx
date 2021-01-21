import React, { useState } from "react";
import Section from "../Section";
import {
  Container,
  MailBoxIcon,
  Form,
  FormHeader,
  Input,
  TextArea,
  ContactBtn,
} from "./style";

function Contact() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <Section title="Contact Me" tag="contact_me" wide>
      <Container>
        <MailBoxIcon />
        <Form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <FormHeader>Let's Connect</FormHeader>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            rows="10"
            placeholder="Your message"
            required
          />
          <ContactBtn type="submit" disabled={!email || !name || !message}>
            Send
          </ContactBtn>
        </Form>
      </Container>
    </Section>
  );
}

export default Contact;
