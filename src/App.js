import { useContext, useEffect } from "react";

import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import BooksContext from "./context/Books";

function App() {
  
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Your Library</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
