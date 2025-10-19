import DisplayTable from "../DisplayTable.js";

const LangTable = () => {
  return (
    <>
      <div
        className="container-fluid py-5 border-bottom border-secondary"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="px-3">
          <h2>Languages Table</h2>
          <p>
            This is the list of languages to be displayed. Press the [x] box to
            delete the item, or press add item to add a new language to the
            list.
          </p>
        </div>
      </div>
      <div>
        <DisplayTable />
      </div>
    </>
  );
};

export default LangTable;
