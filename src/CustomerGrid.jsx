import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerGrid = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers', error);
      }
    };

    fetchCustomers();
  }, []);

  
  const handlePushToCRM = async (customerId) => {
    try {
      await axios.post(`http://localhost:5000/api/customers/${customerId}/push-to-crm`);
      console.log('Customer pushed to CRM successfully');
    } catch (error) {
      console.error('Error pushing customer to CRM', error);
    }
  };

  return (
    <div>
      {/* Display customers in a grid format */}
      <table>
        <thead>
          <tr>
            <th>Phone</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Organization</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.phone}</td>
              <td>{customer.firstName} {customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.organization}</td>
              <td>
                <button onClick={() => handlePushToCRM(customer.id)}>Push to CRM</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerGrid;