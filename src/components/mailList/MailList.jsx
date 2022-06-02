import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Signup and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter Email" />
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default MailList;
