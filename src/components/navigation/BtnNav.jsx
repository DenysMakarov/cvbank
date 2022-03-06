import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showSignIn} from "../../actions/showModalAction";

const BtnNav = ({cls, title, fun, register}) => {

    return (
        <React.Fragment>
            <button onClick={fun} style={{marginLeft: '15px'}} className={cls}>{title}</button>
        </React.Fragment>
    );
};

export default BtnNav;