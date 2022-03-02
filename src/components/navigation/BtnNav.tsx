import React from 'react';

type PropType={
    cls?: string,
    title?: string
}

const BtnNav = ({cls, title} : PropType) => {
    return (
        <React.Fragment>
            <button className={cls}>{title}</button>
        </React.Fragment>
    );
};

export default BtnNav;