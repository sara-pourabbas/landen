import React from 'react';


export const FormBoxTextarea =({placeholder})=>{
    return(
        <div className='form-box-desc mb-2'>
            <textarea placeholder={placeholder}/>
        </div>
    )
};