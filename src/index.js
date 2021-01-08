import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "Frank Worral";
const Book = () => {
  const title = "Rory McIlroy - The Champion Golfer";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/91NFL1efZNL._AC_UL320_.jpg"
        alt="Rory McIlroy - The Champion Golfer"
      />
      <h2>{title}</h2>
      <h4>by {author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
