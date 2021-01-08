import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const author = "Frank Worral";
const title = "Rory McIlroy - The Champion Golfer";
const img = "https://m.media-amazon.com/images/I/91NFL1efZNL._AC_UL320_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book job="banker" number={77639} price="€56.00" />
      {/* And an empty one below... */}
      <Book />
    </section>
  );
}

const Book = (props) => {
  //named props by convention. contains empty object unless supplied with property definitions in KeyValue pairs as above.
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="Rory McIlroy - The Champion Golfer" />
      <h2>{title}</h2>
      <h4>
        {/* Example of using the value of props as defined above in KVP  */}
        by {author} ({props.job})
      </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
