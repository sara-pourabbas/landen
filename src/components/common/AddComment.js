import React from 'react';
import {DragAndClose} from "./DragAndClose";
import {FormBoxInput} from "./FormBoxInput";
import {FormBoxTextarea} from "./FormBoxTextarea";
import {VisualIdentity} from "./VisualIdentity";


export const AddComment =({})=>{
    return(
        <div className=''>
            <div className='d-flex'>
                <DragAndClose  />
                <div className='w-100'>
                    {
                        ['نظر دهنده' , 'توضیحات ( مانند سمت سازمانی یا شعل یا ..)'].map((el,i)=>{
                            return(
                                <FormBoxInput key={i+1} placeholder={el}/>
                            )
                        })
                    }
                    <FormBoxTextarea placeholder={'نظر'}/>
                </div>
            </div>
            <div className='mb-3'>
                <VisualIdentity box={'testimonials'} visual={'upload'} />
            </div>
        </div>
    )
};