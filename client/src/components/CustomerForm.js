import React from 'react';

// CustomerForm component that renders the form for adding and updating customers
const CustomerForm = ({ newCustomer, handleChange, updateCustomer, updateInfo }) => {
  return (
    <div>
      {/* If edit button is clicked, it will change the heading to update customer else it will keep the heading to add customer */}
      <h2>{updateInfo ? 'Update Customer' : 'Add Customer'}</h2> 
      {/* Form for adding and updating customers */}
      <form onSubmit={updateCustomer}>
        {/* Input fields for customer name, email, and phone */}
        <label>Name: <input type="text" name="name" value={newCustomer.name} onChange={handleChange} required /></label><br />
        <label>Email: <input type="text" name="email" value={newCustomer.email} onChange={handleChange} required /></label><br />
        <label>Phone: <input type="text" name="phone" value={newCustomer.phone} onChange={handleChange} required /></label><br />
        <br />
        
        {/* If edit button is clicked, it will change the button name to update customer else it will keep the heading to add customer */}
        <button type="submit">
          {updateInfo ? 'Update Customer' : 'Add Customer'}
        </button>
      </form>
    </div>
  )
}

export default CustomerForm