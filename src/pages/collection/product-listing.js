import React from 'react'
import  Grid  from "@material-ui/core/Grid";
import { ProductCard } from "./product-card";


export function ProductListing(props) {

    const {products} = props;

    return (
        <Grid container spacing={2}>
            {
                products.map(product => (
                    <Grid item md={3} key={product.id} spacing={3}>
                        <ProductCard  product={product} />
                    </Grid>
                    ))
            }
        </Grid>
    )
}
