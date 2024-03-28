import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    phone:'',
    services:'',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        throw new Error('Failed to submit form.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
      </label>      
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
      </label>
      <label>
        Phone:
        <input type="number" name="phone" value={formData.phone} onChange={handleChange}required />
      </label>
      <label>
        Services
        <textarea name="services" value={formData.services} onChange={handleChange} required/>
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange}required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;