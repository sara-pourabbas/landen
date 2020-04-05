import React from 'react';

export const Illustration =(props)=>{
    const {selectType,onClick,alt,pic,title} = props;
    return(
        <div className={`illustration ${selectType?'opacity-1':"opacity-40"}`}
             onClick={onClick} >
            <img src={require(`../../assets/images/${pic}.png`)} alt={alt} className='' />
            <div className='illustration-label '> {title} </div>
        </div>
    )
};