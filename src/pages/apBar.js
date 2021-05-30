import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Badge, Button, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { CartContext } from './cart-provider';
import SearchBar from './searchBar'




export default function ApBar() {

    const {totalCartItems} = useContext(CartContext);
    const trigger = useScrollTrigger();
    const styles = makeStyles({
        img: {
            width: "160px",
            margin: "10px"
        },
        appBar: {
            backgroundColor: "white"
        },
        box: {
            color : "grey",
            textDecoration : "none",
            fontSize : "13.5px",
            fontFamily : "Arial, Helvetica, sans-serif",
            '&:hover': {
                color: "#22a679",
                backgroundColor: "none"
              }
        }
    });

    const useStyles = styles();

    return (
        <div>
        
        {/* <Slide appear={true} direction="down" in={!trigger}> */}
            <AppBar className={useStyles.appBar}>
                <Grid container>
                    <Grid item md={1}>
                    </Grid>
                    <Grid item md={2}>
                       <img src="/images/products/logo-png.png" className={useStyles.img}/>
                    </Grid>  
                    <Grid item md={4}>
                        <SearchBar/>
                    </Grid>
                    <Grid item md={4}>
                        <Button variant="outlined"
                         style={{color:"#22a679", border:"1px solid #22a679", margin:"20px 0px 0px 50px" }}> Sell on WebMart</Button>
                        <Button variant="outlined" style={{marginTop: "20px", color: "#22a679", border:"0px"}}>Login</Button>
                        <Button variant="outlined" style={{marginTop: "20px", color: "#22a679", border:"0px"}}>Register</Button>
                        <Link to="/Cart" className={useStyles.box}>
                            <Button style={{marginTop: "20px", color: "#22a679", border:"1px solid #22a679"}}>
                                <Badge badgeContent = {totalCartItems}>
                                    <AddShoppingCartOutlinedIcon /> 
                                </Badge>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item md={1}>
                    </Grid>
                </Grid>
                <Grid container style={{border:"1px solid lightGrey", textAlign: "center"}}>

                    <Grid item md={12}>
                        <Button>
                            <Link to="/" className={useStyles.box}>Home</Link>
                        </Button>
                        <Button>
                            <Link to="/Collection" className={useStyles.box}>Collections</Link>
                        </Button>
                        
                    </Grid>
                </Grid>
            </AppBar>
            
            {/* 
           
                <Toolbar >
                    <Box display="flex" justifyContent="flex-end" m={1} p={1} >
                            <Box p={1}>
                                <Link to="/" className={useStyles.box}>Home</Link>
                            </Box>
                            <Box p={1} >
                                <Link to="/Collection" className={useStyles.box}>Collections</Link>
                            </Box>
                            <Box p={1}>
                                <Link to="/Cart" className={useStyles.box}>
                                <Badge badgeContent = {totalCartItems} color = "secondary">
                                    <AddShoppingCartOutlinedIcon /> 
                                </Badge>
                                </Link>
                            </Box>  
                    </Box> 
                 </Toolbar>
             */}
        {/* </Slide> */}
     
        </div>
    )
}
