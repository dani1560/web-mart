import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link}  from 'react-router-dom'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles({
    media: {
        height: 342,
    },
});

export function ProductCard(props) {
    const { id, image, title, description, price, rating, category } = props.product
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <Link to={`details/${id}`}>{title}</Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <h4>{category}</h4>
                    <Rating
                    value={rating}
                    precision="0.5"
                    />
                    <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"24px", color:"red"}}>
                       Rs. {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button startIcon={<FavoriteIcon/>} size="small" color="primary">
                    Add to Favorite
                </Button>
                <Button startIcon={<ShoppingCartIcon/>} size="small" color="primary">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}