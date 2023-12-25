import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import CustomerForm from './components/CustomerForm'
import Display from './components/Display'

const baseUrl = 'http://localhost:5000'

const App = () => {
  const [customer, setCustomer] = useState([])
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [updateInfo, setUpdateInfo] = useState(null)

  useEffect(() => {
    axios
      .get(`${baseUrl}/customer`)
      .then((response) => setCustomer(response.data))
      .catch((error) => console.log('Error getting customers', error))
  }, [])

  const addCustomer = (e) => {
    e.preventDefault()
    const checkDuplicate = customer.find((customer) => customer.email === newCustomer.email || customer.phone === newCustomer.phone)

    if (checkDuplicate) {
      alert('Email or phone already exists')
    }
    else {
      axios
        .post(`${baseUrl}/customer`, newCustomer)
        .then((response) => setCustomer([...customer, response.data]))
        .catch((error) => console.log('Error adding customer', error))

      setNewCustomer({ name: '', email: '', phone: '' })
    }
  }

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value })
  }

  const deleteCustomer = (id) => {
    axios
      .delete(`${baseUrl}/customer/${id}`)
      .then(() => setCustomer(customer.filter((customer) => customer._id !== id)), alert('Customer deleted'))
      .catch((error) => console.log('Error deleting customer', error))
  }

  const handleEdit = (customer) => {
    setUpdateInfo(customer)
    setNewCustomer({
      name: customer.name,
      email: customer.email,
      phone: customer.phone
    })
  }

  const updateCustomer = (e) => {
    e.preventDefault()

    if (updateInfo) {
      axios
        .put(`${baseUrl}/customer/${updateInfo._id}`, newCustomer)
        .then((response) => {
          const updatedCustomer = response.data

          setCustomer((prevCustomers) =>
            prevCustomers.map((customerEntry) =>
            customerEntry._id === updatedCustomer._id ? updatedCustomer : customerEntry
            )
          )

          setUpdateInfo(null)
          setNewCustomer({ name: '', email: '', phone: '' })
        })
        .catch((error) => console.log('Error updating customer', error))
    } else {
      addCustomer(e)
    }
  }

  return (
    <div>
      <CustomerForm newCustomer={newCustomer} handleChange={handleChange} updateCustomer={updateCustomer} updateInfo={updateInfo}/>
      <Display customer={customer} handleEdit={handleEdit} deleteCustomer={deleteCustomer}/>
    </div>
  )
}

export default App