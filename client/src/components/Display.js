import React from 'react';

//function to display the list of customers from the database
const Display = ({ customer, handleEdit, deleteCustomer }) => {
  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {/* List out all the customers in ordered lists */}
        {customer.map((customer) => (
          <li key={customer._id}>
            <ol>Name: {customer.name}</ol>
            <ol>Email: {customer.email}</ol>
            <ol>Phone: {customer.phone}</ol>
            <ol>
              {/* Buttons for editing and deleting */}
              <button type="button" onClick={() => handleEdit(customer)}>Edit</button>
              <button type="button" onClick={() => deleteCustomer(customer._id)}>Delete</button>
            </ol><br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Display