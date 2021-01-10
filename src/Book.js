const Book = (props) => {
  let { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Rory McIlroy " />
      <h2>{title}</h2>
      <h4>by {author}</h4>
    </article>
  );
};

export default Book;
