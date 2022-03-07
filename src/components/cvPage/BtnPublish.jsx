import React from 'react';
import {FaUserPlus} from 'react-icons/fa'

// <FontAwesomeIcon icon="fa-solid fa-user-plus" />
// <FaGoogle className='icon-modal'/>
const BtnPublish = () => {
    return (
        <button className='btn-publish'><FaUserPlus className='btn-publish-icon'/>PUBLISH</button>
    );
};

export default BtnPublish;