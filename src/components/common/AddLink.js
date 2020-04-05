import React from 'react';
import {DragAndClose} from "./DragAndClose";
import {FormBoxInput} from "./FormBoxInput";

export const AddLink =({})=>{
    return(
            <div className=' mb-2 d-flex w-100'>
                    <DragAndClose  />
                    <div className="w-100">
                        <FormBoxInput placeholder={'عنوان اصلی'} />
                        <FormBoxInput placeholder={'لینک'}  />
                    </div>
            </div>
    )
};