import React from 'react'
import Slider from '@material-ui/core/Slider'
import {useState} from 'react'

export default function PriceFilter(props) {

    const {priceValue, onChangePrice} = props;

    const marks = [
        {
          value: 0,
          label: '0 pkr',
        },
        {
          value: 500,
          label: '500 pkr',
        },
        {
            value: 1000,
            label: '1000 pkr',
          }
       
      ];


    return (
        <div>
            <h1>Price Filters</h1>
            <Slider 
                value={priceValue}
                min = {0}
                max = {1000}
                step = {100}
                width = "200px"
                valueLabelDisplay = "auto"
                marks = {marks}
                onChange = {(event, newValue) => onChangePrice(newValue)}
                
            />
            <h4>min : {priceValue[0]}</h4>
            <h4>max : {priceValue[1]}</h4>
        </div>
    )
}
