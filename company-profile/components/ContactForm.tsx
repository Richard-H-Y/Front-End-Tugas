"use client";

import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "@/components/Button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {sent && (
        <Alert variant="success" dismissible onClose={() => setSent(false)}>
          Thank you for your message! We will get back to you soon.
        </Alert>
      )}
      <Form.Group className="mb-3" controlId="name">
        <Form.Control type="text" placeholder="Your Name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control type="email" placeholder="Email Address" required />
      </Form.Group>
      <Form.Group className="mb-4" controlId="message">
        <Form.Control as="textarea" rows={5} placeholder="Your Message" required />
      </Form.Group>
      <Button type="submit">Send Message</Button>
    </Form>
  );
}
