import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const MailboxForm = ({addMailbox}) => {

    const [boxHolder, setBoxHolder] = useState('');
    const [boxSize, setBoxSize] = useState('Small');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addMailbox({ boxHolder, boxSize });
      navigate('/mailboxes');
    };

    




  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Owner">Owner Name:</label>
        <input
          type="text"
          value={boxHolder}
          onChange={(e) => setBoxHolder(e.target.value)}
        />
        <label htmlFor="Size">Size:</label>
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
        
        
        
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;