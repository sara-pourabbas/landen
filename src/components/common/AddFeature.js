import React from 'react';
import {DragAndClose} from "./DragAndClose";
import {FormBoxInput} from "./FormBoxInput";
import {FormBoxTitle} from "./FormBoxTitle";
import {VisualIdentity} from "./VisualIdentity";


export const AddFeature =()=>{
    return(
        <div className='my-3'>
            <FormBoxTitle title={' ویژگی ها'} />
            <div className='d-flex mb-3'>
                <DragAndClose />
                <div className='w-100'>
                    {
                        ['عنوان ' , 'لینک'].map((el,i)=>{
                            return(
                                <FormBoxInput key={i+1} placeholder={el}/>
                            )
                        })
                    }
                </div>
            </div>
                <VisualIdentity box={'pricing'} visual={'icon'} />
        </div>
    )
};