import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    organization: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate phone
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      valid = false;
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post('http://localhost:5000/api/customers', formData);
        // Handle successful submission
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };

  return (
        <div className="container">
          <div className="sidebar">
            <h2>Customer Information</h2>
            <p>Please fill in the form below to add a new customer.</p>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <h2>Customer Form</h2>
            <div className="form-group">
              <label>Phone Number:</label>
              <input 
                type="text" 
                value={formData.phone} 
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                placeholder="Phone Number"
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label>First Name:</label>
              <input 
                type="text" 
                value={formData.firstName} 
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input 
                type="text" 
                value={formData.lastName} 
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                placeholder="Email"
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input 
                type="text" 
                value={formData.address} 
                onChange={(e) => setFormData({ ...formData, address: e.target.value })} 
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input 
                type="text" 
                value={formData.city} 
                onChange={(e) => setFormData({ ...formData, city: e.target.value })} 
                placeholder="City"
              />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input 
                type="text" 
                value={formData.state} 
                onChange={(e) => setFormData({ ...formData, state: e.target.value })} 
                placeholder="State"
              />
            </div>
            <div className="form-group">
              <label>Zip:</label>
              <input 
                type="text" 
                value={formData.zip} 
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })} 
                placeholder="Zip"
              />
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input 
                type="text" 
                value={formData.country} 
                onChange={(e) => setFormData({ ...formData, country: e.target.value })} 
                placeholder="Country"
              />
            </div>
            <div className="form-group">
              <label>Organization:</label>
              <input 
                type="text" 
                value={formData.organization} 
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })} 
                placeholder="Organization"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
  );
};

export default CustomerForm;
