import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:dyotechlife@gmail.com">
        <Button>Contact: dyotechlife@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;