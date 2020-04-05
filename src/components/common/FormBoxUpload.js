import React from 'react';
import {FormBoxSubTitle} from "./FormBoxSubTitle";
import {UploadBox} from "./UploadBox";

export const FormBoxUpload =(props)=>{
    const {title,imagePreviewUrl,onChange} = props;

    return(
        <div className='d-flex justify-content-between mt-3'>
            <div className='d-flex flex-column'>
                <div className='form-box-title '>
                    {title}
                </div>
                <FormBoxSubTitle volume={true}  />
            </div>
            <UploadBox imagePreviewUrl={imagePreviewUrl} onChange={onChange} />
        </div>
    )
};