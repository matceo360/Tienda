import {React, useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import {  collection, query, getDocs } from "firebase/firestore";
import {db} from '../../firebase'




const ItemListConteiner = () => {
  const [productos, setProductos] =useState([])
  const { categoryId } = useParams()


  
  
  const getProducts = async ()=>{
  const products =[]

   
  const datos = query(collection(db, 'products'))
  const querySnapshot = await getDocs(datos)
  querySnapshot.forEach((doc)=> {
   products.push({...doc.data(),id: doc.id}) 

  })

  setProductos(products)
  
  }

  useEffect(()=>{
    getProducts()
  },[categoryId])
 
  

  return(

    <div className="OTRO">

   
      
      <div className='otro'> 
     
     
          
             <ItemList key={productos} product={productos} />

      </div>

    </div>
    
  )
}

export default ItemListConteiner
