import React from 'react';


export const FormBoxInput =({placeholder,leadCaptured})=>{
    return(
        <div className={`form-box-input mb-2 ${leadCaptured?'w-50 ml-1':'w-100'}`} >
            <input placeholder={placeholder}/>
        </div>
    )
};