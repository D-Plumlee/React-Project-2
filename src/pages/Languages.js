import CardLayout from "../CardLayout.js";

const Languages = () => {
  return (
    <>
      <div
        className="container-fluid py-5 border-bottom border-secondary"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="px-3">
          <h2>Languages</h2>
          <p>
            These are a list of some programming languages I have learned, am
            learning or will learn.
          </p>
        </div>
      </div>
      <CardLayout />
    </>
  );
};

export default Languages;
