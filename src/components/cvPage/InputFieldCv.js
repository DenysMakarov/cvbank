import React, {useEffect, useState} from 'react';

const InputFieldCv = ({name, setInput, parentStyle}) => {


    useEffect(() => {
        const d = document.getElementById('cv-nav-main-template')
        d.addEventListener('click', () => {
            setStyle({display: 'none'})
        })
    }, [])

    const [style, setStyle] = useState({
        display: 'none',
    })

    const showInput = () => {
        setStyle({display: 'block', background: '#FFFFFF'})
    }

    return (
        <span onClick={showInput} style={parentStyle} className='verify-block-text'>{name}
            <p style={{...style}}><input onChange={(e) => setInput(e.target.value)}
                      type="text" name={'name'} value={name}/></p>

        </span>
    );
};

export default InputFieldCv;