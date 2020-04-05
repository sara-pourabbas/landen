import React from 'react';

export const ItemWithIcon =(props)=>{
    const {selectType,onClick,alt,pic,title} = props;
    return(
        <div className={`select-item item-with-icon ${selectType?'bg-blue-active text-click-select-item':
            'bg-default-select-item text-default-select-item'}`}
             onClick={onClick} >
            <img src={require(`../../assets/images/${pic}.svg`)} alt={alt} />
            <div className='select-item-label mt-3'> {title} </div>
        </div>
    )
};