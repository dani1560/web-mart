import React, { useState } from 'react'
import { ProductListing } from './product-listing'
import Grid from '@material-ui/core/Grid'
import CategoryFilter from '../../filters/category-filter'
import { getVisibleProducts } from '../../Api/api'
import Ratings from '../../filters/rating-filter'
import PriceFilter from '../../filters/price-filter'
import Chips from './chips'
import Sorting from './sorting'
import PaginationLink from './pagination'

export default function Collection() {

    //category filter
    const [selectedCategory, setSelectedCategory] = useState([]);
    //rating Filter
    const [selectedRating, setSelectedRating] = useState(0);
    //price filter
    const [priceValue, setPriceValue] = useState([0, 1000]);
    //sorting
    const [sorting, setSorting] = useState(0);

    //category filter api function
    const products = getVisibleProducts(selectedCategory, selectedRating, priceValue);
    
    const sortedProducts = sorting == 1 ? products.sort((x, y) => x.price - y.price) :
                           sorting == 2 ? products.sort((x, y) => y.price - x.price) :
                           sorting == 3 ? products.sort((x, y) => x.rating - y.rating) :
                           sorting == 4 ? products.sort((x, y) => y.rating - x.rating) :
                           products.sort((x, y) => x.id - y.id) 
                           
    

    //category filter on change function
    const onChangeCategory = (category, isChecked) => {
        if (isChecked) {
            setSelectedCategory([...selectedCategory, category]);
        }
        else {
            setSelectedCategory(selectedCategory.filter(categoryFilter => categoryFilter !== category));
        }
    };

    //Rating Filter on change function
    const onChangeRating = (changeRating) => {
        setSelectedRating(changeRating)
    }

    //Price Filter onChange Function
    const onChnagePrice = (selectPrice) => {
           
        setPriceValue(selectPrice)
    }

    //onDelete Chip 
    const onDeleteHandler = (labels) => {
        setSelectedCategory(selectedCategory.filter(keys => keys !== labels))
    }
  
    return (

        <Grid container>
            <Grid item xs={2} >
                <CategoryFilter selectedCategory={selectedCategory} onChangeHandler={onChangeCategory} />
                <hr/>
                <Ratings selectedRating={selectedRating} onChangeRating = {onChangeRating}/>
                <hr/>
                <PriceFilter priceValue = {priceValue} onChangePrice = {onChnagePrice}/>
            </Grid>
            <Grid item xs={10} style={{backgroundColor: "white" }}>
                <Chips 
                    selectedCategory = {selectedCategory} 
                    onDeleteHandler = {onDeleteHandler}
                    selectedRating = {selectedRating}
                    setSelectedRating = {setSelectedRating}
                    priceValue = {priceValue}
                    setPriceValue = {setPriceValue}
                    setSelectedCategory = {setSelectedCategory}
                />
                <hr/>
                  <Sorting sorting = {sorting} setSorting = {setSorting} />
                
                <ProductListing products = {sortedProducts}  />
                <PaginationLink/>
            </Grid>
        </Grid>

    )
}
