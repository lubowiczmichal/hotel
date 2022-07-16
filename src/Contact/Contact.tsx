import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import TextWithBackground from "../TextWithBackground";
import "./Contact.css";
function Contact() {
  return (
    <div className="ContactPage">
      <NavBar />
      <TextWithBackground mode="contact" />
      <Footer />
    </div>
  );
}

export default Contact;
