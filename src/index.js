import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/91NFL1efZNL._AC_UL320_.jpg"
    alt="Rory McIlroy - The Champion Golfer"
  />
);

const Title = () => {
  return <h2>Rory McIlroy - The Champion Golfer</h2>;
};

const Author = () => {
  //BEWARE OF INLINE STYLING OVERRIDING CSS FILES!
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      by Frank Worral
    </h4>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
