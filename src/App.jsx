// src/App.jsx
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';

const mailboxOwners = [
 { _id: 1, boxSize: 'Small', boxHolder: 'Alex'},
 { _id: 2, boxSize: 'Large', boxHolder: 'Bob'},
 { _id: 3, boxSize: 'Medium', boxHolder: 'Jackie'},
 { _id: 4, boxSize: 'Small', boxHolder: 'Frank'},
 { _id: 5, boxSize: 'Large', boxHolder: 'Dustin'}




];

const App = () => {
  const [mailboxes, setMailboxes] = useState(mailboxOwners)
  
  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };
  
  
  
  return (
    <>
      <NavBar />
      <h1>Tony's Jersey Post Office</h1>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/new" element={<MailboxForm addMailbox={addMailbox}/>} />
        <Route
        path='/mailboxes/:mailboxId' 
        element={<MailboxDetails mailboxes={mailboxes}/>}
      />
        <Route path='*' element={<h2>Lost in the Mail</h2>}/>




      </Routes>
    
    
    
    
    
    
    
    
    </>
  )
};

export default App;
