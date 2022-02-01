import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


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

    const deleteProduct = (poof) =>{
      console.log(poof)
      axios.delete(`http://localhost:8000/api/pM/`+ poof)
        .then(res =>{
          console.log(res);
          console.log("Deleted")
      
        })
        .catch(err =>{
          console.log(err)
        })
    }

  return (
  <div>
    <h1>
        Product
    </h1>
    <p>Name:{thisProduct.name}</p>
    <p>${thisProduct.price}</p>
    <p>Description: {thisProduct.description}</p>
    <Link to ="/">
    <button onClick ={() => deleteProduct(thisProduct._id)}>delete</button>
    </Link>
  </div>);
};

export default View;
