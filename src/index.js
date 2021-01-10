import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//Example as multiple Book Objects...
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/91NFL1efZNL._AC_UL320_.jpg",
    title: "Rory McIlroy - The Champion Golfer",
    author: "Frank Worral",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/41IA0aUwZnL._AC_UY218_.jpg",
    title: "Rory McIlroy - The Biography Updated",
    author: "Frank Worral",
  },
  {
    id: 3,
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
        //Spread operator being used instead. No need to declare it as book = {book}
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  //When we use spread, the whole props object now is just as array containing the values of the Book.
  //So no need to say props.book, we can just destructure the individual properties from propr
  let { img, title, author } = props;

  const clickHandler = () => {
    alert("Hurray!");
  };

  //When an argument is required for the method, you can't actually write it normally as a click handler, as doing that invokes the function.
  //So see below, when the complex example is required (params needed in function), we have to wrap it in another function (arrow function below)
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="Rory McIlroy " />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h4>by {author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Me!
      </button>
      {/* Function commented out below would fire each time the component is rendered. Must be wrapped to avoid auto execution.
      <button type="button" onClick={complexExample(author)}> */}
      <button type="button" onClick={() => complexExample(author)}>
        More Complex
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
