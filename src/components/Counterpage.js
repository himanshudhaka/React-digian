import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { incNumber } from '../action';
import { incNumber,decNumber } from '../action';

export default function Counterpage() {

    const myState = useSelector( (state) => state.changeNumber );
    const dispatch = useDispatch();

    return (
        <div>
            <div className="container">

                <h1>Increment/Decrement</h1>

                <div className="container">
                    <button onClick={()=> dispatch(decNumber())} ><span> - </span></button>
                    <input name="quantity" type="text" value={myState} />
                    <button onClick={()=> dispatch(incNumber())}><span> + </span></button>
                </div>
            </div>
        </div>
    )
}
