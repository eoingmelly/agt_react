import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// const author = "Frank Worral";
// const title = "Rory McIlroy - The Champion Golfer";
// const img = "https://m.media-amazon.com/images/I/91NFL1efZNL._AC_UL320_.jpg";

//Example as multiple Book Objects...
const books = [
  {
    img: "https://m.media-amazon.com/images/I/91NFL1efZNL._AC_UL320_.jpg",
    title: "Rory McIlroy - The Champion Golfer",
    author: "Frank Worral",
  },
  {
    img: "https://m.media-amazon.com/images/I/41IA0aUwZnL._AC_UY218_.jpg",
    title: "Rory McIlroy - The Biography Updated",
    author: "Frank Worral",
  },
];

const names = ["john", "paul", "ringo", "george"];
const newNames = names.map((x) => {
  console.log(x);
  return <h1>{x}</h1>;
});

function BookList() {
  return <section className="booklist">{newNames}</section>;
}

const Book = (props) => {
  let { img, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="Rory McIlroy " />
      <h2>{title}</h2>
      <h4>by {author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
