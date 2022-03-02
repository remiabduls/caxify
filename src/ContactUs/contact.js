import React, { useState, useEffect } from "react";
import "./contact.css";
// import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    

    setName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };

  return (
      
    <form className="form" onSubmit={handleSubmit}>
      <h1>Get in Touch </h1>
       
      <label>First Name</label>
      <input
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
   <label>Last Name</label>
      <input
        placeholder="last Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label for="quantity">Phone Number:</label>
  <input type="number" 
   placeholder="phone number"
   value={number}
   onChange={(e) => setName(e.target.value)}/>
      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        
      >
        Send
      </button>
    </form>
  );
};

export default Contact;