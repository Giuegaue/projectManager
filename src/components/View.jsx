import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const View = (props) => {

    const {id} = useParams()

    const[thisProduct, setThisProduct] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pM/${id}`)
            .then(res => {
                console.log(res)
                setThisProduct(res.data)
            })
            .catch(err=> console.log(err))
    }, [id])

  return (
  <div>
    <h1>
        Product
    </h1>
    <p>Name:{thisProduct.name}</p>
    <p>${thisProduct.price}</p>
    <p>Description: {thisProduct.description}</p>
  </div>);
};

export default View;
