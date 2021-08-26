import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Log from './Log';
import Dash from './Dash';
import Cookies from 'js-cookie'
// import Protected from './Protected';

export default function Login() {

    // component={Log}

    // const [auth, setAuth] = useState(false);


    return (
        <>
            <Router>
                <Switch>
                    <ProtectedRoutee exact path="/" component={Log} />
                    <ProtectedRoute exact path="/dash" component={Dash} />
                </Switch>
            </Router>
        </>
    )
}


function ProtectedRoute({ component: Component , ...rest}){

    const isAuth = Cookies.get('col');
    // console.log(isAuth);


    return(
        <Route {...rest} render={ () => isAuth ? 
            (<Component />)
            :(<Redirect to="/"/>)  }/>
    )
}

function ProtectedRoutee({ component: Component , ...rest}){

    const isAuth = Cookies.get('col2');
    console.log(isAuth);


    return(
        <Route {...rest} render={ () => isAuth ? 
            (<Component />)
            :(<Redirect to="/dash"/>)  }/>
    )
}
