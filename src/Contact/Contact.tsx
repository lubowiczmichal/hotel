import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import TextWithBackground from "../TextWithBackground";

import "./Contact.css";
function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div className="ContactPage">
      <NavBar />
      <TextWithBackground mode="contact" />
      <p className="Phrase">
        We will do our best to get back to you as soon as possible!
      </p>
      <div className="Form">
        <TextField
          className="TextField"
          id="outlined"
          value={name}
          onChange={(newName) => setName(newName.target.value)}
          label="Your name"
        />
        <TextField
          className="TextField"
          id="outlined"
          value={email}
          onChange={(newEmail) => setEmail(newEmail.target.value)}
          label="Your email"
          aria-describedby="email"
        />
        <TextField
          className="TextField"
          id="outlined-multiline-flexible"
          value={message}
          onChange={(newMessage) => setMessage(newMessage.target.value)}
          label="Message"
          multiline
          maxRows={5}
        />
        <Button onClick={sent}>Submit</Button>
      </div>
      <iframe
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=51.1089776,17.0326689+(Hotel)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <Footer />
    </div>
  );
  function sent() {
    console.log(
      `Message sent\nname: ${name}\nemail: ${email}\nmessage: ${message}`
    );
  }
}

export default Contact;
