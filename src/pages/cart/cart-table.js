import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody"
import {cart} from '../../data/cart'
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import { useHistory } from "react-router";


export default function CartTable(props){
    let history = useHistory();
    const { cartItems, removeFromCart, updateQuantity } = props;  

    return <>
    <TableContainer>
     <Table>
         <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell>image</TableCell>
                <TableCell>title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>price</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
        {cartItems.map((carts, i) =>
             <TableRow>
                <TableCell>{i+1}</TableCell>
                <TableCell><Avatar src={carts.image}/></TableCell> 
                <TableCell>{carts.title} <br/> {carts.drink}</TableCell> 
                <TableCell>{carts.cartQuantity} x Rs: {carts.price}</TableCell> 
                <TableCell>
                    <ButtonGroup size='small' variant='outlined' color='secondary'>
                        <Button onClick={() => updateQuantity(carts, -1)} disabled={carts.cartQuantity === 1}>-</Button>
                        <Button>{carts.cartQuantity}</Button>
                        <Button onClick={() => updateQuantity(carts, 1)} disabled={carts.cartQuantity === 10}>+</Button>
                    </ButtonGroup>    
                </TableCell> 
                <TableCell>
                <Button onClick={() => removeFromCart(carts)} startIcon={<DeleteIcon />} color='secondary'></Button>
                </TableCell>     
             </TableRow>)}
         </TableBody>
     </Table>
     <Grid container>
                <Grid item lg={4} xs={4}>
                    <Button 
                    onClick={() => history.push('/Collection')}
                    variant='outlined' color='secondary'>Continue Shopping</Button>
                </Grid>
                <Grid item lg={4} xs={4}>
                    <Typography  component='h3'>Grand Total: Rs. {props.cartTotal}</Typography>
                </Grid>
                <Grid item lg={4} xs={4}>
                    <Button 
                    onClick={() => history.push('/Checkout')}
                    variant='outlined' color='secondary'>Proceed to Checkout</Button>
                </Grid>
            </Grid>
    </TableContainer>
    </>
}