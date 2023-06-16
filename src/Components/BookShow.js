import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/Books";

function BookShow({ book }) {
  const { deleteBook } = useContext(BooksContext);
  const handleDelete = () => {
    deleteBook(book.id);
  };
  const [editForm, setEditForm] = useState(false);
  const handleRename = () => {
    setEditForm(!editForm);
  };
  let content = <h3>{book.title}</h3>;
  if (editForm) {
    content = <BookEdit handleRename={handleRename} book={book} />;
  }
  return (
    <div className="book-show">
      <img
        src={book.image}
        alt="books"
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="edit" onClick={handleRename}>
          Rename
        </button>
      </div>
    </div>
  );
}
export default BookShow;
