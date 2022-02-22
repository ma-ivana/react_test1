import './ItemList.scss';
import { Item } from '../ItemLIstContainer/Item';


export const ItemList = ( { productos }) => {

  console.log(productos)
  return (
        <div className='productContainer'>
          <h1>Languages</h1>
          <div className='productRow'>
            {productos.map( producto => <Item key={producto.id} {...producto}/>)}
          </div>
        </div>
  );
};