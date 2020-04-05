import React from 'react';

export const ItemWithoutIcon =(props)=>{
    const {selectType,onClick,title} = props;
    return(
        <div className={`select-item item-without-icon ${selectType? 'bg-blue-active text-click-select-item':
            'bg-default-select-item text-default-select-item'}`}
             onClick={onClick} >
            <div className='select-item-label'> {title} </div>
        </div>
    )
};