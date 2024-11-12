const Section = (props) => {
  let pictures = props.pix;

  console.log(pictures);

  {
    return (
      <section>
        <h2>{props.category}</h2>
        <div>
          {pictures.map((e) => {
            return <img src={e} />;
          })}
        </div>
      </section>
    );
  }
};

export default Section;
