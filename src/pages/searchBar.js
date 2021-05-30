import { InputBase } from '@material-ui/core'
import React from 'react'

export default function SearchBar() {
    return (
        <div>
            <InputBase
              style={{
                position: 'relative',
                borderRadius: "5px",
                border: "1px solid #22a679",
                padding: "0px 5px 0px 5px",
                margin : "22px",
                '&:hover': {
                  backgroundColor: "green",
                },
                width: '100%'
              }}
              placeholder="  Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}
