// src/App.jsx
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';

const mailboxExample = [
 { _id: 1, boxSize: 'Small', boxholder: 'Alex'},
 { _id: 2, boxSize: 'Large', boxholder: 'Bob'},
 { _id: 3, boxSize: 'Medium', boxholder: 'Jackie'},
 { _id: 4, boxSize: 'Small', boxholder: 'Frank'},
 { _id: 5, boxSize: 'Large', boxholder: 'Dustin'}




]

const App = () => {
  const [mailboxes, setMailboxes] = useState(mailboxExample)
  
  
  
  
  return (
    <>
    <NavBar />
    <h1>Mail here</h1>;
    <Routes>
    <Route path="/" element={<h2>Home Page</h2>} />
    <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />





    </Routes>
    
    
    
    
    
    
    
    
    </>
  )
};

export default App;
