import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Create = (props) =>{

    const[name, setName] = useState("")
    const[price, setPrice] = useState(0)
    const[description, setDescription] = useState("")


    const createProduct = (e) =>{
        e.preventDefault();

        const newProduct = {
            name : name,
            price: price,
            description: description
        }

        axios.post(`http://localhost:8000/api/pM`, newProduct)
            .then(res=>{
                console.log(res.data)
                console.log("Pass")
            })
            .catch(err =>{
                console.log(err)
            })

    }


    return(
        <div>
            <form onSubmit = {createProduct}>
                <div>
                Name: <input type="text" onChange ={e => setName(e.target.value)} value={name}/>
                </div>
                <div>
                Price: $<input type ="number" onChange ={e => setPrice(e.target.value)} value={price}/>
                </div>
                <div>
                Descritption: <input type ="text" onChange ={e => setDescription(e.target.value)} value={description}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Create;