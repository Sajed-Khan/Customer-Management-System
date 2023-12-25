import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import CustomerForm from './components/CustomerForm'
import Display from './components/Display'

const baseUrl = 'http://localhost:5000'

const App = () => {
  // State variables
  const [customer, setCustomer] = useState([])
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [updateInfo, setUpdateInfo] = useState(null)

  //useEffect hook to get all customers from database as soon as server is started
  useEffect(() => {
    //axios GET request to retrieve all customers from database
    axios
      .get(`${baseUrl}/customer`)
      .then((response) => setCustomer(response.data))
      .catch((error) => console.log('Error getting customers', error))
  }, [])

  //addCustomer to add new customer to database
  const addCustomer = (e) => {
    e.preventDefault()
    //if customer input email or phone which already exists, alert user and do not add
    const checkDuplicate = customer.find((customer) => customer.email === newCustomer.email || customer.phone === newCustomer.phone)

    if (checkDuplicate) {
      alert('Email or phone already exists')
    }
    else {
      //axios POST request to add new customer to database
      axios
        .post(`${baseUrl}/customer`, newCustomer)
        .then((response) => setCustomer([...customer, response.data]))
        .catch((error) => console.log('Error adding customer', error))

      //resets input fields
      setNewCustomer({ name: '', email: '', phone: '' })
    }
  }

  //handles change in input fields
  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value })
  }

  //deleteCustomer to delete customer from database by id
  const deleteCustomer = (id) => {
    //axios DELETE request to delete customer from database
    axios
      .delete(`${baseUrl}/customer/${id}`)
      .then(() => setCustomer(customer.filter((customer) => customer._id !== id)), alert('Customer deleted'))
      .catch((error) => console.log('Error deleting customer', error))
  }

  //handleEdit to edit customer when button is clicked
  const handleEdit = (customer) => {
    setUpdateInfo(customer)
    setNewCustomer({
      name: customer.name,
      email: customer.email,
      phone: customer.phone
    })
  }

  //updateCustomer to update customer in database by id
  const updateCustomer = (e) => {
    e.preventDefault()

    //if updateInfo is not null, update customer in database
    if (updateInfo) {
      //axios PUT request to update customer in database
      axios
        .put(`${baseUrl}/customer/${updateInfo._id}`, newCustomer)
        .then((response) => {
          const updatedCustomer = response.data

          //update customer in state variable with updated customer information else leave information the same
          setCustomer((prevCustomers) =>
            prevCustomers.map((customerEntry) =>
            customerEntry._id === updatedCustomer._id ? updatedCustomer : customerEntry
            )
          )

          //resets input fields
          setUpdateInfo(null)
          setNewCustomer({ name: '', email: '', phone: '' })
        })
        .catch((error) => console.log('Error updating customer', error))
    } else {
      //if updateInfo is null, do not update customer
      addCustomer(e)
    }
  }

  //returns customer form and display components
  return (
    <div>
      <h1>Customer Management System</h1>
      <CustomerForm newCustomer={newCustomer} handleChange={handleChange} updateCustomer={updateCustomer} updateInfo={updateInfo}/>
      <Display customer={customer} handleEdit={handleEdit} deleteCustomer={deleteCustomer}/>
    </div>
  )
}

export default App