const Section = (props) => {
  return (
    <div>
      <h2> {props.category}</h2>
      <div className="images">
        {props.images.map((image, num) => {
          return <img key={num} src={image} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Section;
