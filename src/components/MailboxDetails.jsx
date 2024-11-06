import { useParams } from "react-router-dom";


const MailboxDetails = (props) => {
    console.log(props); // Always verify that any props are being passed correctly!

    const {mailboxId } =useParams()
    const singleMailbox = props.mailboxes.find((mail) => mail._id === Number(mailboxId));
    console.log('Mailbox Object:', singleMailbox)
    return (
      <>
        <h2>Pokemon Details</h2>
        <dl>
          <h2>{singleMailbox.id}</h2>  
          
          <dt>Weight:</dt>
          <dd>{singleMailbox.boxsize}</dd>
          <dt>Height:</dt>
          <dd>{singleMailbox.boxholder}</dd>
        </dl>
      </>
    );
  };
  
  export default MailboxDetails;