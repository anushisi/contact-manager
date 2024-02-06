import React from 'react';

const ContactList = ({ contacts }) => {
  const contactList = contacts.map((val, index) => (
    <div key={index}>
      <div>Name: {val.name}</div>
      <div>Email: {val.email}</div>
    </div>
  ));

  return (
    <>
      <div>ContactList</div>
      <div>{contactList}</div>
    </>
  );
};

export default ContactList;
