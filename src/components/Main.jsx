import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Main = (props) => {


  const[products, setProducts] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pM`)
      .then(res => {
        console.log(res.data.PM)
        setProducts(res.data.PM)
      })
      .catch(err => console.log(err))
  },[])

  const deleteProduct = (poof) =>{
    // console.log(poof)
    axios.delete(`http://localhost:8000/api/pM/`+ poof)
      .then(res =>{
        console.log(res);
        console.log("Deleted")
        setProducts(products.filter((product) => product._id !== poof))
      })
      .catch(err =>{
        console.log(err)
      })
  }


  return (
  <div>
    <h2>All Products</h2>
    { products ?
      products.map((product, idx)=>{
        return (
          <div key = {product._id}>
            <Link to ={"/Main/" + product._id}>
            <p>Name:{product.name}</p>
            </Link>
            <p>${product.price}</p>
            <div>
              <Link to ={"/Main/update/" + product._id}><button>edit</button></Link>
              <button onClick ={() => deleteProduct(product._id)}>delete</button>
            </div>
          </div>
        )
        })
    : <p>loading</p>}
  </div>
  );
};

export default Main;
