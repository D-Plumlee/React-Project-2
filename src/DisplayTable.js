import { useState, useRef } from "react";
import { TableRow } from "./TableRow.js";
import { TableInput } from "./TableInput.js";
import { useContext } from "react";
import { JsonContext } from "./JsonContext.js";
import Modal from "react-bootstrap/Modal";

export default function DisplayTable() {
  const curVal = useContext(JsonContext);

  const langsData = curVal.contextVal;

  const data = langsData.Languages;

  const [tableData, setTableData] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const formRef = useRef();

  // Removes an item from the table
  function handleDelete(name) {
    setTableData(tableData.filter((a) => a.name !== name));
  }

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handles form submit for inside handleEdit
  function handleSubmit(formData) {
    const newData = {};
    formData.forEach((value, key) => (newData[key] = value));
    if (
      newData.name !== "" &&
      newData.description !== "" &&
      newData.information !== "" &&
      newData.image !== ""
    ) {
      setTableData([...tableData, newData]);
    }
    handleCloseModal();
  }

  function handleSave() {
    const saveData = { Languages: [...tableData] };

    curVal.setContextVal({ ...saveData });
  }

  return (
    <>
      <div className="container w-75 mx-auto py-4 my-1 border bg-light">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Personal Information</th>
              <th>Image Source</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((i) => (
              <TableRow {...i} handleClick={() => handleDelete(i.name)} />
            ))}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary me-3"
          onClick={handleOpenModal}
        >
          Add Item
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TableInput handleSubmit={handleSubmit} ref={formRef} />
        </Modal.Body>
      </Modal>
    </>
  );
}
