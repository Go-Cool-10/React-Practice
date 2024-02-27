import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BookForm = () => {
  let initialValue = { id: "", title: "", price: "", author: "" };
  const [book, setBook] = useState(initialValue);
  const [books, setBooks] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [id, setId] = useState(1);

  const handleDelete = (a) => {
    console.log(a)
    const deleted = books.filter((del) => del.id !== a)
    setBooks(deleted)
  }

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
    console.log(book);
  };

  const handleEdit = (a) => {
    setBook(a);
    setIsEditable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title !== "") {
      if (!isEditable) {
        book.id = id;
        setId(id + 1);
        books.push(book);
        setBooks([...books]);
      } else {
        books.map((a) => {
          if (a.id === book.id) {
            a.title = book.title;
            a.author = book.author;
            a.price = book.price;
            return a;
          } else {
            return a;
          }
        });
        setBooks([...books]);
        setIsEditable(false);
      }
      setBook(initialValue);
    }
    else{
      alert("Enter input!")
    }
  };

  return (
    <>
      <Form
        onSubmit={(e) => handleSubmit(e)}
        style={{ width: "400px", marginLeft: "400px", marginTop: "20px" }}
      >
        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>Title: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            value={book.title}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPrice">
          <Form.Label>Price: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Price"
            name="price"
            value={book.price}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAuthor">
          <Form.Label>Author: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author"
            name="author"
            value={book.author}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ marginRight: "255px" }}
        >
          Submit
        </Button>
      </Form>

      <table
        className="table table-bordered"
        style={{ width: "400px", marginLeft: "400px", marginTop: "20px" }}
      >
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Price</td>
          <td>Author</td>
        </tr>
        {books.map((a) => (
          <tr>
            <td>{a.id}</td>
            <td>{a.title}</td>
            <td>{a.price}</td>
            <td>{a.author}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(a.id)}>Delete</Button>
            </td>
            <td>
              <Button variant="primary" onClick={() => handleEdit(a)}>Edit</Button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default BookForm;
