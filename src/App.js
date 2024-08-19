import React, { useState } from 'react';
import CustomerForm from './CustomerForm';
import CustomerGrid from './CustomerGrid';

const App = () => {
  const [customers, setCustomers] = useState([]);

  const handleFormSubmit = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  return (
    <div>
      <CustomerForm onSubmit={handleFormSubmit} />
      <CustomerGrid customers={customers} />
    </div>
  );
};

export default App;
