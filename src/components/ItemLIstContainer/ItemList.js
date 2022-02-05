import { Item } from './Item';
import {productos} from './productos.js';


export const ItemList = () => {

//   const pedirDatos = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             resolve(productos)
//         }, 3000)
//     })
// }
  console.log(productos)
  return (
        productos.map( producto => <Item key={producto.id} {...producto}/>

      
  ));
};