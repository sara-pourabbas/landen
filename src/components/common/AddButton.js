import React from 'react';
import {DragAndClose} from "./DragAndClose";
import {FormBoxInput} from "./FormBoxInput";
import {FormBoxIcons} from "./FormBoxIcons";



export const AddButton =()=>{
    return(
        <div className='  mb-2'>
            <div className='d-flex'>
                <DragAndClose />
                <div className='w-100'>
                    {
                        ['عنوان دکمه' , 'لینک'].map((el,i)=>{
                            return(
                                <FormBoxInput key={i+1} placeholder={el}/>
                        )
                    })
                    }
                </div>
            </div>
            <FormBoxIcons />
        </div>
    )
};