import React from 'react';


export const FormBoxLabel =({title})=>{
    return(
        <div className='d-flex align-items-center w-110px position-relative'>
            <div className='sign' />
            <div className='form-box-label mr-2'>{title}</div>
        </div>
    )
};