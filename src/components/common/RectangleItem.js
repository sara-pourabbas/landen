import React from 'react';

export const RectangleItem =({title,selectItem,onClick})=>{
    return(
        <div className={`rectangle-item ${selectItem ? 'bg-blue-active text-click-select-item':
            'bg-default-select-item text-default-select-item'}`} onClick={onClick}>
            {title}
        </div>
    )
};