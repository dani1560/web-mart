import React, { useContext } from 'react'
import { CartContext } from "../cart-provider";
import { Grid, Card, CardContent, Typography, Divider, Avatar,  TextField, Select, MenuItem, InputLabel, FormControl, Container, Button} 
from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  stylingTextField: {
      width: '300px',
  }
})

export default function Checkout(){

  const classes = useStyles();

  const { cartItems, cartTotal, totalCartItems } = useContext(CartContext);

    return (
        <Container>
        <Grid container>
          <Grid item lg={7}>
          <h1>Checkout</h1>
                        <Grid container>
                            <h4>First Name</h4>
                            <h4 style={{ marginLeft: '220px' }}>Last Name</h4>
                        </Grid>
                        <TextField
                            className={classes.stylingTextField}
                            label='First Name'
                            variant='outlined'
                        />
                        <TextField
                            style={{ marginLeft: '40px' }}
                            className={classes.stylingTextField}
                            label='Last Name'
                            variant='outlined'
                        />
                        <Grid container>
                            <h4>Phone</h4>
                            <h4 style={{ marginLeft: '250px' }}>Email</h4>
                        </Grid>
                        <TextField
                            className={classes.stylingTextField}
                            label='Phone'
                            variant='outlined'
                        />
                        <TextField
                            style={{ marginLeft: '40px' }}
                            className={classes.stylingTextField}
                            label='Email'
                            variant='outlined'
                        />
                        <br />
                        <h4>City</h4>
                        <FormControl>
                            <InputLabel id='select'>Cities</InputLabel>
                            <Select labelId='select' style={{ width: '550px' }}>
                                <MenuItem value='Lahore'>Lahore</MenuItem>
                                <MenuItem value='Gujranwala'>Gujranwala</MenuItem>
                                <MenuItem value='Sheikhpura'>Sheikhpura</MenuItem>
                                <MenuItem value='Islamabad'>Islamabad</MenuItem>
                                <MenuItem value='Peshawar'>Peshawar</MenuItem>
                            </Select>
                        </FormControl>
                        <h4>Address</h4>
                        <TextField
                            style={{ width: '550px' }}
                            label='Address'
                            variant='outlined'
                        />
          </Grid>
          <Grid item lg={5}>
          <Grid container justify="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom>Cart Summary</Typography>
        <Avatar> {totalCartItems} </Avatar>
      </Grid>
      <Card>
        <CardContent>
          {cartItems.map(item => (
            <Grid container justify="space-between">
              <Typography gutterBottom>
                {item.cartQuantity} x {item.title} [{item.drink}]
              </Typography>
              <Typography gutterBottom>
                Rs. {item.cartQuantity * item.price}
              </Typography>
            </Grid>
          ))}
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container justify="space-between">
            <Typography variant="button" gutterBottom>
              Grand Total
            </Typography>
            <Typography variant="button" gutterBottom>
              Rs. {cartTotal}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              style={{ marginTop: "20px" }}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Container>
    )
}
