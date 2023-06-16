import { useCallback, useState, createContext } from "react";
import axios from "axios";
import App from "../App";

const BooksContext = createContext();

function Provider() {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);
  const createBook = async (title) => {
    const imageResponse = await axios.get(
      "https://api.unsplash.com/photos/random",
      {
        params: {
          query: title,
          client_id: "y9WREbQKMtOegwxiTbK99aWFNu4QrQh0mC2UFpQc6BU",
        },
      }
    );
    const response = await axios.post("http://localhost:3001/books", {
      title:title,
      image:imageResponse.data.urls.small,
    });
    // const updatedBooks = [
    //   ...books,
    //   { id: Math.floor(Math.random() * 9999), title: term },
    // ];
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBook = async (id, newTitle) => {
    const response = await axios.put("http://localhost:3001/books/" + id, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueProvided = {
    books: books,
    fetchBooks,
    createBook,
    editBook,
    deleteBook,
  };
  return (
    <BooksContext.Provider value={valueProvided}>
      <App />
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
