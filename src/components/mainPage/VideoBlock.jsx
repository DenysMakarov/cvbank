import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee, faCirclePlay} from '@fortawesome/free-solid-svg-icons'
const playIcon = <FontAwesomeIcon style={{fontSize: '48px', color: '#18A4E0'}} icon={faCirclePlay} />


const VideoBlock = () => {
    return (
        <div className='row video-block'>
            <p>More details? Please watch the video.</p>
            {playIcon}
        </div>
    );
};

export default VideoBlock;