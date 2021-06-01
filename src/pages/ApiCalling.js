import { Button } from '@material-ui/core'
import React, {useState, useEffect} from 'react'



export default function ApiCalling() {

    const [counter, setCounter] = useState(1)
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       
        fetch('https://jsonplaceholder.typicode.com/posts/' + counter)
        .then(response => response.json())
        .then(data => setPost(data))
        setLoading(false);
        
    }, [counter]);

    const increment = () => {
        setCounter(counter + 1)
        setLoading(true)
    }
    const deccrement = () => {
        setCounter(counter + 1)
        setLoading(true)
    }

    if(loading){
        return <h1>Loading . . . </h1>
    }


    return (
        <div>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
            <Button onClick = {increment}>+</Button>
            <h1>{counter}</h1>
            <Button onClick = {deccrement}>-</Button>
        </div>
    )
}
