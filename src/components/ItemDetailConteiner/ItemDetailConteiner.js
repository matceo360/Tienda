import React from 'react'
import { useState, useEffect} from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'

import {  getDoc ,doc } from "firebase/firestore";
 import {db} from '../../firebase'


const  ItemDetailConteiner= ({ match}) => {
    const  prodId = match.params.id
    const [product, setProduct] = useState({});
  



    const getProducts = async () =>{
        const productoReference = doc(db, "products", prodId)
        const productoDatos = await getDoc(productoReference)
    
        const aux = productoDatos.data()
        aux.id = prodId
            setProduct(aux)
          
        };

    
        

    useEffect(() => {
        getProducts();
     }, [prodId] )




       return (
           <div className='item'>

               
                   <ItemDetail data={product}/>
             
                    
            </div>
       )

       }
    
export default ItemDetailConteiner;