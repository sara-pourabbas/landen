import React from 'react';
import {DragAndClose} from "./DragAndClose";
import {FormBoxInput} from "./FormBoxInput";
import {UploadBox} from "./UploadBox";


export const AddMember =({imagePreviewUrl,onChange})=>{
    return(
            <div className='d-flex mb-2'>
                <DragAndClose  />
                <div className='w-76'>
                    {
                        ['نام' , 'زیرعنوان'].map((el,i)=>{
                            return(
                                 <FormBoxInput key={i+1} placeholder={el}/>
                            )
                        })
                    }
                </div>
                    <UploadBox imagePreviewUrl={imagePreviewUrl} onChange={onChange} uploadLogo={true} />
            </div>
    )
};