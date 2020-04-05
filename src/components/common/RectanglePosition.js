import React from 'react';
import {RectangleItem} from "./RectangleItem";
import {FormBoxLabel} from "./FormBoxLabel";

export const RectanglePosition =({onClick,selectItem})=>{

    return(
        <div className='d-flex align-items-center'>
            <FormBoxLabel title={'جایگاه قرارگیری'}/>
            <div className='d-flex'>
                {['راست' , 'وسط' , 'چپ'].map((el,i)=>{
                    return(
                        <RectangleItem key={i} title={el} onClick={onClick} selectItem={selectItem} />
                    )
                })
                }
            </div>
        </div>

    )
};