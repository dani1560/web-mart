import React from 'react'
import NativeSelect from '@material-ui/core/NativeSelect'

export default function sorting(props) {

    const {sorting, setSorting} = props ;

    return (
        <div style={{float:"right", marginRight : "10px"}}>
             <h4>{sorting}</h4>
           <NativeSelect value = {sorting} onChange={(event) => setSorting(event.target.value) }>
               <option value = {0}>Sort</option>
               <option value = {1}>Price low - high</option>
               <option value = {2}>Price High - low</option>
               <option value = {3}>Rating low - high</option>
               <option value = {4}>Rating high - low</option>
              
           </NativeSelect>
        </div>
    )
}
