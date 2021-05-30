import React, {useState, useContext} from 'react';
import { useHistory, useParams } from 'react-router-dom'
import ReviewListing from './review-listing'
import { getProductId } from '../../Api/api'
import { Button, ButtonGroup, Grid, MenuItem, Select } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { CartContext } from '../cart-provider';


function Details() {

    // let params = useParams();
    let { placeholderId } = useParams();
    const { addToCart, unitsInCart } = useContext(CartContext);
    let product = getProductId(placeholderId);
    let history = useHistory();

    //state variable 
    const [counter, setCounter] = useState(1);
    const [drinks, setDrinks] = useState("drinks")
    //use context variable
    

    //function handle add to cart
    const handleAddToCart = () => {
        addToCart(product, counter, drinks);
        setCounter(1);
    }

    //here product indicates the products which comes from placeholder's id
    if (!product) {
        return (() => history.push("/Home"));
    }

    return (<>
        {/* <h1>Details here for the products having product id {params.id}</h1> */}
        <h1>Details here for the products having product id {placeholderId}</h1>
        <Grid container style = {{border:"3px solid violet", padding:"10px"}}>
            <Grid item md={4}>
                <img src={product.image}/>
            </Grid>
            <Grid item md={8}>
                <h1>{product.title}</h1>
                <p style = {{color:"black", fontSize:"24px"}}>{product.description}</p>
                <Rating value={product.rating}/>
                <h1 style = {{color:"red"}}>Rs :{product.price}</h1>
                <br/>
                    <Grid container>
                    <Grid item md={2}>
                        <ButtonGroup variant="contained">
                            <Button 
                                color="secondary" 
                                onClick = {() => setCounter(counter - 1)} 
                                disabled = {counter == 1 ? true : false}>
                                    -
                            </Button>

                            <Button>{counter}</Button>

                            <Button 
                                color="secondary"
                                onClick = {() => setCounter(counter + 1)}
                                disabled = {counter == 10 ? true : false}>
                                    +
                            </Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item md={4}> 
                        <Select value={drinks} fullWidth = "true" color="secondary" onChange = {(event) => setDrinks(event.target.value)}>
                            <MenuItem value="drinks">No Drink</MenuItem>
                            <MenuItem value="pepsi">Pepsi</MenuItem>
                            <MenuItem value="coke">Coke</MenuItem>
                            <MenuItem value="marinda">Marinda</MenuItem>
                            <MenuItem value="sprite">Sprite</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item md={6}>
                         <Button 
                                onClick = {handleAddToCart}
                                color = "secondary" 
                                variant = "outlined" 
                                size = "large" 
                                style={{float:"right",marginRight:"20px"}}>

                                    Add to Cart
                        </Button>
                    </Grid>
                    </Grid>
                    

                    {!!unitsInCart(product) && (
                <div>There are {unitsInCart(product)} units of this item in cart!</div>
               
              )}
            </Grid>
        
        </Grid>
        
       <br/>
       <br/>
       <br/>
       <br/>

        <ReviewListing />
    </>
    );
}

export default Details;