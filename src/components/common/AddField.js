import React from 'react';
import {DragAndClose} from "./DragAndClose";
import {FormBoxInput} from "./FormBoxInput";
import {DropDownDemo} from "./DropDownDemo";


export const AddField =({})=>{
    return(
            <div className=' mb-2 d-flex w-100'>
                <DragAndClose />
                <div className='w-100'>
                    <FormBoxInput placeholder={'عنوان فیلد'}/>
                    <div className='d-flex justify-content-between'>
                        <FormBoxInput placeholder={'نوع ورودی (شامل عدد یا حروف'} leadCaptured={true} />
                        <DropDownDemo />
                    </div>
                </div>
            </div>
    )
};