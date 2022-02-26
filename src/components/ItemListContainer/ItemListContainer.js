import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { productos } from '../../data/productos.js';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState([])
  const [loading, setLoading] = useState(false)

  console.log(productos)

  const { catId } = useParams()

  const traerDatos = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    })
  }

  // useEffect( () => {
  //   setLoading(true)

  //   traerDatos()
  //     .then((res) => {
  //       if (catId){
  //       setListaProductos( res.filter(el => el.category === catId) )
  //       } else {
  //         setListaProductos(res)
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  //   }, [catId])

  useEffect( () => {
    setLoading(true)

// 1.- armar referencia
  const productosRef = collection(db, 'productos')
  const q = catId ? query(productosRef, where("categoria", "==", catId)) : productosRef
// 2.- pedir esa ref
  getDocs(q)
    .then((resp) => {
      setListaProductos( resp.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }))
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
