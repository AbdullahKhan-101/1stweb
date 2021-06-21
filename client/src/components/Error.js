import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  {NavLink} from 'react-router-dom'

const Error = () => {
    return (
        <div className="errorpage">
            <div>
            <h1 className="fourzero">404</h1></div>
            
             <h2 className="sorry">We Are Sorry Page Not Found<hr/></h2>
             <div className="primbutton">
                <NavLink className="linkk" to="/">
             <Button className="primbutton" variant="contained" color="primary">
                 Back To Home
            </Button>
            </NavLink>
            </div>
                    </div>
    )
}

export default Error
