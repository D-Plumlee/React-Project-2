import ContactForm from "../ContactForm.js";
const Contact = () => {
  return (
    <div>
      <div
        className="container-fluid py-5 border-bottom border-secondary"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="px-3">
          <h2>Contact</h2>
          <p>
            <br />
          </p>
        </div>
      </div>
      <div
        className="container border w-75 mx-auto my-5 rounded border-2 bg-light"
        style={{ height: "400px" }}
      >
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
