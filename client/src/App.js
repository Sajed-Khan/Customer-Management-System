import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const App = () => {
  const [customer, setCustomer] = useState([])
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
  })

  useEffect(()=>{
    axios
    .get('http://localhost:5000/customer')
    .then((response) => setCustomer(response.data))
    .catch((error)=> console.log('Error getting customers', error))
  }, [])

const addCustomer = (e) => {
  e.preventDefault()
  axios
  .post('http://localhost:5000/customer', newCustomer)
  .then((response) => setCustomer([...customer, response.data]))
  .catch((error) => console.log('Error adding customer', error))

  setNewCustomer({name: '', email: '', phone: ''})
}

const handleChange = (e) => {
  setNewCustomer({...newCustomer, [e.target.name]: e.target.value})
}

  return (
    <div>
      <h1>Customer Management System</h1>
      <h2>Add Customer</h2>
      <form onSubmit={addCustomer}>
        <label>Name:  
          <input type="text" name="name" value={newCustomer.name} onChange={handleChange}/>
        </label><br/><br/>
        <label>Email: 
          <input type="text" name="email" value={newCustomer.email} onChange={handleChange}/>
        </label><br/><br/>
        <label>Phone: 
          <input type="text" name="phone" value={newCustomer.phone} onChange={handleChange}/>
        </label><br/><br/>
        <button type="submit">Add Customer</button>
      </form>

    <div>
      <h2>Customer List</h2>
      <ul>
          {customer.map((customer)=>(
            <li key={customer._id}>
              <ol>Name: {customer.name}</ol><ol>Email: {customer.email}</ol><ol>Phone: {customer.phone}</ol><br/>
            </li>
          ))}
      </ul>
    </div>
      
    </div>
  );
}

export default App;
