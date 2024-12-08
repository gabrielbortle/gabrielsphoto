import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    customOption: "",
    people: "",
    date: "",
    location: "",
    hear: "",
    instagram: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gabrielsphoto/.netlify/functions/send", // Replace with your actual Netlify function URL
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: formData.services,
          customOption: formData.customOption,
          people: formData.people,
          date: formData.date,
          location: formData.location,
          hear: formData.hear,
          instagram: formData.instagram,
          message: formData.message,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setResponseMessage("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("There was an error sending your message. Please try again.");
    }
  };

  return (
    <form className="yourinfo" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="phone">Phone Number</label>
      <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />

      <label htmlFor="services">What services are you interested in?</label>
      <select name="services" value={formData.services} onChange={handleChange} required>
        <option value="" disabled>Select an option</option>
        <option value="Couple Photos / Portraits">Couple Photos / Portraits</option>
        <option value="FULL Couple Photos / Portraits">FULL Couple Photos / Portraits</option>
        <option value="Graduation Photos / Portraits">Graduation Photos / Portraits</option>
        <option value="FULL Graduation Photos / Portraits">FULL Graduation Photos / Portraits</option>
        <option value="Family Portraits">Family Portraits</option>
        <option value="other">Other</option>
      </select>
      {formData.services === "other" && (
        <>
          <label htmlFor="customOption">Please specify:</label>
          <input type="text" name="customOption" value={formData.customOption} onChange={handleChange} />
        </>
      )}

      <label htmlFor="people">How many people?</label>
      <input type="number" name="people" value={formData.people} onChange={handleChange} required />

      <label htmlFor="date">What Day Are We Thinking?</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="location">Idea of a Specific Location?</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} />

      <label htmlFor="hear">How Did You Hear About Me?</label>
      <input type="text" name="hear" value={formData.hear} onChange={handleChange} required />

      <label htmlFor="instagram">Instagram Username</label>
      <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} required />

      <label htmlFor="message">Your Messages:</label>
      <textarea name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>

      <input type="submit" value="SEND" className="sendBtn" />
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default ContactForm;
