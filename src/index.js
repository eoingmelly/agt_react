import React from "react";
import ReactDom from "react-dom";

//Default Export, so no need to wrap it, and I can name it whatever I want.
import Book from "./Book";

//Not default Export, so wrap the books field name curly braces
import { books } from "./books";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //Spread operator being used instead. No need to declare it as book = {book}
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
