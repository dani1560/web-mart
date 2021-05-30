import React, {useState} from 'react'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Switch from '@material-ui/core/Switch'

export default function Ratings(props){
    
    let {selectedRating, onChangeRating} = props;
    let [values, setValue] = useState(false);

    const onChangeSwitch = (isChecked) => {
        if(isChecked)
            setValue(true);
        else{
            onChangeRating(0);
            setValue(false);
        }
    }

    return (
        <div>
            <h1>Rating Filter <Switch checked={values} onChange={(event) => onChangeSwitch(event.target.checked)} /></h1>

            {/* <h4>value  : {values.toString()}</h4> */}

            <Rating 
                value={selectedRating} 
                precision="0.5"
                onChange = {(event) => onChangeRating(event.target.value)}
                disabled = {(values) ? false : true}
                // emptyIcon = {<StarBorderIcon fontSize = "large" />}
                size = "large"
                
            />
            

            {/* <h2>Value = {selectedRating}</h2> */}
        </div>
    )
}
