import { useParams } from "react-router-dom";


const MailboxDetails = ({mailboxes}) => {
   

    const {mailboxId} =useParams()
    const singleMailbox = mailboxes.find((mail) => mail._id === Number(mailboxId));
    if (singleMailbox)
    return (
      <>
        <h2>Mailbox Details</h2>
        <dl>
          <dt>box details</dt>  ````````````````````````````````````````
          <dd>{singleMailbox._id}</dd>
          <dt>Size:</dt>
          <dd>{singleMailbox.boxSize}</dd>
          <dt>Owner:</dt>
          <dd>{singleMailbox.boxHolder}</dd>
        </dl>
      </>
    );
    else return(
      <h1>Mailbox Not Found!</h1>
    )
  };
  
  export default MailboxDetails;