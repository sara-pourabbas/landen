import React from 'react';
const getClasses=(selectType,selectColorType,colorType)=>{
    if(!selectColorType ) //if there was not  selectColorType
    {
        if( selectType) //if there was selectType
          return 'bg-blue-active fg-white';
        else
            return 'back-white text-default-select-item'
    }
    else {//if there was selectColorType
        if (!selectType)
            return `bg-colorType-${colorType} fg-white`;
        else
            return 'back-white text-default-select-item'
    }
};
export const ItemMedium =(props)=>{
    const {selectType,opacity,onClick,title,soon,selectColorType,colorType} = props;
    return(
        <div className={`item-medium
        ${getClasses(selectType,selectColorType,colorType)}
        ${opacity}
        `}
             onClick={onClick} >
            {soon?<div className='soon'>{soon}</div>:''}

            <div className='item-medium-label'> {title} </div>
        </div>
    )
};

