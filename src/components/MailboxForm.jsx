import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const initialState = {
  boxHolder: '',
  boxSize: ['small' , 'medium', 'large']
  
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);

    const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate('/mailboxes')
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Owner">Owner Name:</label>
        <input
          type="text"
          id="Owner"
          name="Owner"
          value={formData.boxHolder}
          onChange={handleChange}
        />
        <label htmlFor="Size">Size:</label>
        <input
          type="text"
          id="Size"
          name="Size"
          value={formData.boxSize}
          onChange={handleChange}
        />
        
        
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;