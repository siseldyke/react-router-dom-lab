import { Link } from 'react-router-dom'


const MailboxList = (props) => {
    return (
      <>
        <h2>Mailboxes</h2>
        <ul>
          {props.mailboxes.map((currentMailbox) => (
            <li key={currentMailbox._id} className='mail-box'>
              <Link to={`/mailboxes/${currentMailbox._id}`}>
                 {currentMailbox._id}
              </Link>
              
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default MailboxList;