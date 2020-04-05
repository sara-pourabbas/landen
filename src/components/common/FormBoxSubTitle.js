import React from 'react';
import {toPersianDigits} from "./toPersianDigit";

export const FormBoxSubTitle =({volume,count})=>{
    return(
        <div className='sub-form-box-title mb-2 mr-2 '>
            {volume? <span>'محدودیت سایز و حجم ۵۰۰'</span> :
                <span><span> حداکثر </span> <span> {toPersianDigits(count)} </span> <span> تا </span></span>}
        </div>
    )
};