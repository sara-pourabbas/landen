import React from 'react';
const getUploadDesign=(imagePreviewUrl,uploadLogo)=>{
    if(!imagePreviewUrl )// if there was not imagePreviewUrl
    {
        if( uploadLogo) //if there was uploadLogo
            return (
                <div className='d-flex flex-column'>
                    <img src={require('../../assets/images/upload.svg')} />
                    <div className='upload-box-title' >آپلود لوگو</div>
                </div>
            );
        else
            return <img src={require('../../assets/images/upload.svg')} />
    }
    else {
        return <img src={imagePreviewUrl} alt='آپلود آیکن' className='upload-img' />
    }
};

export const UploadBox =({imagePreviewUrl,onChange,uploadLogo})=>{
    return(
        <div className={`upload-box ${uploadLogo? ' upload-logo-box':'p-0' } ${imagePreviewUrl && 'primary-background'}`}>
            {

                getUploadDesign(imagePreviewUrl,uploadLogo)
            }
            <input className="file-input-icon" type="file"
                   onChange={onChange}
            />

            <div className='upload-shadow'>
                <img src={require('../../assets/images/upload-icon.svg')}
                     alt='بارگذاری تصویر '  />
                <div className='upload-text'> بارگذاری تصویر </div>
            </div>
        </div>
    )
};