import React, { useState } from 'react';

const AddContact = ({ addContact }) => {
  const [contactData, setContactData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!contactData.name || !contactData.email) {
      alert('Please fill in the details');
      return;
    }

    addContact(contactData);
    setContactData({ name: '', email: '' });
  };

  return (
    <div className='formHeader'>
      <div className='add-contact'>Add Contact</div>
      <form>
        <label>Name:</label><br/>
        <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange}/><br/>
        <label>Email:</label><br/>
        <input type='email' placeholder='Enter Email' name='email' value={contactData.email} onChange={handleChange}/>
      </form>
      <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  );
};

export default AddContact;
