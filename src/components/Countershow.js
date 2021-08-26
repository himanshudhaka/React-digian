import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Countershow() {
    const myState = useSelector( (state) => state.changeNumber );
    return (
        
        <div>
            <input name="quantity" type="text" value={myState} />
        </div>
    )
}
