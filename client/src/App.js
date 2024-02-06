import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact.js';
import ContactList from './components/ContactList.js';
import Header from './components/Header.js';

function App() {
  const [contact, setContact] = useState([]);

  const addContact = (data) => {
    setContact([...contact, data]); // Fix: Removed the extra array wrapper
    console.log(data);
  };

  return (
    <div>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contact} /> {/* Fix: Changed 'contact' to 'contacts' */}
    </div>
  );
}

export default App;
