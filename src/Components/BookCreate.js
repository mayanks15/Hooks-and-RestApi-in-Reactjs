import { useState, useContext } from "react";
import BooksContext from "../context/Books";

function BookCreate() {
  const { createBook } = useContext(BooksContext);

  const [title, setTitle] = useState("");


  const handle = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Add more..."
          value={title}
          onChange={handle}
        />
      </form>
    </div>
  );
}
export default BookCreate;
