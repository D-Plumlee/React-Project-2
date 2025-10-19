import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  if (submitted === true) {
    return (
      <h3 className="text-center">
        <br />
        <br />
        Feedback submitted. Thank you!
      </h3>
    );
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="my-3">
        <label htmlFor="name" className="form-label">
          What is your name?:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Firstname Lastname"
          name="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="recom" className="form-label">
          What type of feedback do you want to give?:
        </label>
        <input
          type="text"
          className="form-control"
          id="recom"
          placeholder="Recommendation"
          name="recom"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="comment">Leave your feedback here:</label>
        <textarea className="form-control" rows="4" id="comment" name="text" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
