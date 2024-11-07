import { useParams } from "react-router-dom";


const MailboxDetails = ({mailboxes}) => {
   

    const {mailboxId} =useParams()
    const singleMailbox = mailboxes.find((mail) => mail._id === Number(mailboxId));
    console.log('Mailbox object' , singleMailbox)
    return (
      <>
        <h2>Mailbox Details</h2>
        <dl>
          <dt>box details</dt>  
          <dd>{singleMailbox._id}</dd>
          <dt>Size:</dt>
          <dd>{singleMailbox.boxSize}</dd>
          <dt>Owner:</dt>
          <dd>{singleMailbox.boxHolder}</dd>
        </dl>
      </>
    );
  };
  
  export default MailboxDetails;