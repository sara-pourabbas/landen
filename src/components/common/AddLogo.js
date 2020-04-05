import React from 'react';
import {DragAndClose} from "./DragAndClose";
import {FormBoxInput} from "./FormBoxInput";
import {UploadBox} from "./UploadBox";


export const AddLogo =({imagePreviewUrl,onChange})=>{
    return(
            <div className='d-flex '>
                <DragAndClose  />
                <div className='w-76'>
                    {
                        ['عنوان لوگو' , 'لینک'].map((el,i)=>{
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