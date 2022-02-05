import { Item } from './Item';
// import {productos} from './productos.js';


export const ItemList = ( { productos }) => {

  console.log(productos)
  return (
        <div className='productContainer'>
          <h1>Productos</h1>
          <div className='productRow'>
            {productos.map( producto => <Item key={producto.id} {...producto}/>)}
          </div>
        </div>
  );
};