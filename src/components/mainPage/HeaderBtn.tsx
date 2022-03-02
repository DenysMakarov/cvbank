import React from 'react';

type PropType={
    cls?: string,
    title?: string
}


const HeaderBtn = ({cls} : PropType) => {
    return (
        <button className={cls}>Create CV</button>
    );
};

export default HeaderBtn;