import { useState, useContext } from "react";
import BooksContext from "../context/Books";

function BookEdit({ book, onRename, handleRename }) {
  const { editBook } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(book.id, title);
    handleRename();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
export default BookEdit;
