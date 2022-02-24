import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { productos } from '../../data/productos.js';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const { catId } = useParams()

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
        if (catId){
        setListaProductos( res.filter(el => el.category === catId) )
        } else {
          setListaProductos(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [catId])

  
  
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
