import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import {productos} from './productos.js';

export const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const traerDatos = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    })
  }

  useEffect( () => {
    setLoading(true)

    traerDatos()
      .then((res) => {
        setListaProductos( res )
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [])

  
  
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
    <>
      {
        loading
        ? <h2>Loading...</h2>
        : <ItemList productos={listaProductos} />
      }
    </>
  );
};
