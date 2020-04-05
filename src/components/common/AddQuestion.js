import React from 'react';
import {DragAndClose} from "./DragAndClose";
import {FormBoxInput} from "./FormBoxInput";


export const AddQuestion =({})=>{
    return(
            <div className='d-flex mb-2 w-100'>
                <DragAndClose  />
                <div className='d-flex flex-column w-100'>
                    {
                        ['سوال' , 'جواب'].map((el,i)=>{
                            return(
                                <FormBoxInput key={i+1} placeholder={el}/>
                            )
                        })
                    }
                </div>
            </div>
    )
};