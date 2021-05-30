import React from 'react'
import Chip from  '@material-ui/core/Chip'


export default function chips(props) {

    const { selectedCategory, 
            onDeleteHandler, 
            selectedRating, 
            setSelectedRating, 
            priceValue, 
            setPriceValue,
            setSelectedCategory } = props;

    return ( 
        <>
        { //selected Category Chips 
        (selectedCategory.length !== 0) && selectedCategory.map( labels => 
          <Chip
            label = { labels }
            color = "secondary"
            style = {{margin: "5px"}}
            onDelete = {() => onDeleteHandler(labels)}
           /> 
           )
        }
        { //Rating Chips
         (selectedRating !== 0) && 
         <Chip 
            label = {`Rating : ${selectedRating}`}
            color = "secondary"
            style = {{margin: "5px"}}
            onDelete = {() => setSelectedRating(0) }
         />
        }
        { //Price Filters Chips
        (priceValue[0] !== 0 || priceValue[1] !== 1000) &&
        <Chip 
            label = {`Range : ${priceValue[0]}pkr - ${priceValue[1]}pkr`}
            color = "secondary"
            style = {{margin: "5px"}}
            onDelete = {() => setPriceValue([0,1000]) }
         />
        }
        {// Clear All chips
        ((selectedCategory.length !== 0) || (selectedRating !== 0) || (priceValue[0] !== 0 || priceValue[1] !== 1000)) &&
        <Chip 
        label = "Clear All"
        color = "secondary"
        style = {{margin: "5px"}}
        onDelete = {() => {
            setSelectedCategory([])
            setSelectedRating(0)
            setPriceValue([0,1000])
        } }
     />

        }
        </>
    );
}
