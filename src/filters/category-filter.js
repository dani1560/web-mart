import { category } from '../data/category'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

function LabelCheckbox(props){

    let {title, isChecked, onChangeHandler} = props;

    return (
        <>
        <FormControlLabel
            control = {<Checkbox/>}
            label = {title}
            checked = {isChecked}
            onChange = {(event) => onChangeHandler(title, event.target.checked)}
        />
       <br/>
       </>
    );
}

export default function CategoryFilter(props){

    const {selectedCategory, onChangeHandler} = props;

    return (
        <>
        <h1>Category Filters</h1>
        {category.map(x => <LabelCheckbox title={x} isChecked={selectedCategory.includes(x)} onChangeHandler={onChangeHandler} /> )}
        </>
    );
}