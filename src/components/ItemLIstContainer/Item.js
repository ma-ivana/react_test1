
export const Item = ({ title, description, price, pictureUrl }) => {

  return (
    <div className="tarjeta">
      <h1>{title} </h1>
      <p>{description} </p>
      <p>{price} </p>
      <div>
          <img src={pictureUrl} />
      </div>
    </div>   

  );
};