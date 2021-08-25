import React from 'react'
import {Route} from 'react'
// import Dash from './Dash'

export default function Protected({component: Component , ...rest}){
    return(
        <Route {...rest} render={ () =>  <Component />  }/>
    )
}
