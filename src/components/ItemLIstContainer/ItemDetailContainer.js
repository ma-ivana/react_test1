import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemLIstContainer/ItemDetail';
import { productos } from './productos.js';

export const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  const traerDatos = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    })
  }

    

    useEffect(() => {
        setLoading(true)

        traerDatos()
            .then((res) => {
              if (itemId){
                setItem( res.find((el) => el.id === Number(itemId)) )
            }})
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (
        <div className='container my-5'>
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
)
};