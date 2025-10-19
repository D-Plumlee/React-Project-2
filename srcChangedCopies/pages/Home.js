const Home = () => {
  return (
    <div className="container-fluid">
      <div
        className="row py-5 border-bottom border-secondary"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="px-3">
          <h2 className="ps-2">Home page</h2>
          <p>
            <br />
          </p>
        </div>
      </div>
      <div className="row" style={{ height: "600px" }}>
        <div className="col-md-1"></div>
        <div className="col my-5">
          <div className="card h-100">
            <div className="card-header text-center">
              <h2>Starting to Program</h2>
            </div>
            <div className="card-body">
              <h4 style={{ lineHeight: "1.6" }}>
                Coming up with what to make for a website based on what I wanted
                to be when I was younger was hard. I do not remember early
                things well, so I thought to make this based on my earliest
                dream I can remember: Becoming a Programmer. It was one of the
                first things I actually enjoyed doing that was not considered
                just a hobby activity like reading.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col my-5">
          <div className="card h-100">
            <div className="card-header text-center">
              <h2>Early Learning</h2>
            </div>
            <div className="card-body">
              <h4 style={{ lineHeight: "1.6" }}>
                In middle school I learned a small amount of HTML and
                Javascript. In high school I moved on to Java, which I liked a
                lot more. In college I took beginner courses on several
                languages, so now my repertoire has expanded. This site gives a
                good way to view and store the languages I know now and what
                they mean to me.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default Home;
