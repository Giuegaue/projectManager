import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';

const Update = () => {

    const history = useHistory()

    const {id} = useParams()


    const[name, setName] = useState("")
    const[price, setPrice] = useState(0)
    const[description, setDescription] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pM/${id}`)
            .then(res =>{
                console.log(res.data)
                setName(res.data.name)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => {
                console.log(err)
            })

    },[])


    const updateProduct = (e) =>{
        e.preventDefault();

        const newProduct = {
            name : name,
            price: price,
            description: description
        }

        axios.put(`http://localhost:8000/api/pM/${id}`, newProduct)
            .then(res=>{
                console.log(res.data)
                console.log("Pass")
                history.push("/")
            })
            .catch(err =>{
                console.log(err)
            })
        }


  return( 
        <div>
            <form onSubmit = {updateProduct}>
                <h2>Update</h2>
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
);
};

export default Update;
