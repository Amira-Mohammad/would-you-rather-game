import React from 'react';
//import error from '../../imgs/404.jpg';
import './NotFound.scss'

const NotFound = (props) => {
    return (
        <div className="notFound">
            <h4 className="p-5 text-danger">No Match for {props.location.pathname}</h4>
            {/* NotFound */}
            {/* <img src={error} /> */}
        </div>
    );
};

export default NotFound;