export function TableInput({ handleSubmit, ref }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(ref.current);
        handleSubmit(formData);
      }}
      ref={ref}
    >
      <div className="my-3">
        <label htmlFor="name" className="form-label">
          Language Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="name"
          name="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description">Language description:</label>
        <textarea
          className="form-control"
          rows="4"
          id="description"
          name="description"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="information">Personal information:</label>
        <textarea
          className="form-control"
          rows="4"
          id="information"
          name="information"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image Source:
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          placeholder="Image Url"
          name="image"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
