import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

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
  {
    img:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5084/9781508439127.jpg",
    title:
      "Rory McIlroy : The Inspirational Story of Golf Superstar Rory McIlroy",
    author: "Bill Redban",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  let { img, title, author } = props.book;
  console.log("props is:", props);
  return (
    <article className="book">
      <img src={img} alt="Rory McIlroy " />
      <h2>{title}</h2>
      <h4>by {author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
