import { useEffect } from 'react';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
  
  // const promesa = (res) => {
  //   return new Promise( (resolve, reject) => {
  //     setTimeout( () => {
  //       if (res === true) {
  //         resolve('Promesa resuelta')
  //       } else {
  //         reject('Promesa rechazada')
  //       }
  //     }, 2000)
  //   }) 
  // }

  // useEffect(() => {
  //   console.log(promesa)

  //   promesa
  //     .then( (res) => {
  //       console.log(res)
  //     })
  //     .catch( (err) => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       console.log("Proceso finalizado")
  //     })
  // }, [])

  return (
    <section>
      <ItemList />
    </section>
  );
};
