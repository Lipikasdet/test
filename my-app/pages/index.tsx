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
    <div className="mt-8 max-w-lg mx-auto bg-gray-500 rounded-md shadow-md overflow-hidden">
  <div className="p-6">
    <form onSubmit={handleSubmit}>

      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <div className="flex">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-1/2 mr-2 py-2 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
         
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-1/2 py-2 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full mb-2 py-2 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
        <label className="block mb-2">Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Services:</label>
        <textarea name="services" value={formData.services} onChange={handleChange} placeholder="Services" className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
    </form>
  </div>
</div>

);
};

export default ContactForm;