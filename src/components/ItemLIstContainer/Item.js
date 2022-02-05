
export const Item = ({ title, description, price, pictureUrl }) => {

  return (
    <div className="tarjeta">
      <h3>{title} </h3>
      <p>{description} </p>
      <p>Precio: ${price} </p>
      <div className="cardImg">
          <img src={pictureUrl} />
      </div>
    </div>   

  );
};