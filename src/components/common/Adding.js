import React from 'react';


export const Adding =({title,onClick})=>{
    return(
        <div className='adding' onClick={onClick}>
            <img src={require('../../assets/images/add-blue.svg')} alt={'اضافه کردن'} className='mx-1' />
           <span> اضافه کردن </span> <span className='mr-1'> {title} </span>
        </div>
    )
};