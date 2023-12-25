import React from 'react';

const CustomerForm = ({ newCustomer, handleChange, updateCustomer, updateInfo }) => {
  return (
    <div>
      <h1>Customer Management System</h1>
      <h2>{updateInfo ? 'Update Customer' : 'Add Customer'}</h2>
      <form onSubmit={updateCustomer}>
        <label>Name: <input type="text" name="name" value={newCustomer.name} onChange={handleChange} required /></label><br />
        <label>Email: <input type="text" name="email" value={newCustomer.email} onChange={handleChange} required /></label><br />
        <label>Phone: <input type="text" name="phone" value={newCustomer.phone} onChange={handleChange} required /></label><br />
        <br />
        <button type="submit">
          {updateInfo ? 'Update Customer' : 'Add Customer'}
        </button>
      </form>
    </div>
  )
}

export default CustomerForm