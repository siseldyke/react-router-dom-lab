import { useParams } from "react-router-dom";


const MailboxDetails = (props) => {
    console.log(props); // Always verify that any props are being passed correctly!

    const {mailboxId } =useParams()
    const singleMailbox = props.mailboxes.find((mail) => mail._id === Number(mailboxId));
    console.log('Mailbox Object:', singleMailbox)
    return (
      <>
        <h2>Mailbox Details</h2>
        <dl>
          <h2>{singleMailbox.id}</h2>  
          
          <dt>Size:</dt>
          <dd>{singleMailbox.boxSize}</dd>
          <dt>Owner:</dt>
          <dd>{singleMailbox.boxHolder}</dd>
        </dl>
      </>
    );
  };
  
  export default MailboxDetails;