import React from 'react';
import {FormBoxTitle} from "./FormBoxTitle";
import {FormBoxInput} from "./FormBoxInput";
import {AddFeature} from "./AddFeature";
import {Adding} from "./Adding";


export const InsidePackage =(props)=>{
    const {packageTitle,packageCount,generateFeature,addClick } = props;
    return(
        <div className='inside-section mt-5 '>
            <div className='inside-section-title mb-2'>
                <span>{packageTitle}</span> <span>{packageCount}</span>
            </div>
            <FormBoxTitle title={'محتوا'}/>
            <FormBoxInput placeholder={`عنوان بسته`}/>
            <FormBoxInput placeholder={` زیرعنوان`}/>
            <FormBoxInput placeholder={` قیمت - به تومان`}/>
            <FormBoxInput placeholder={` لینک`}/>
            <AddFeature />
            {generateFeature}
            <div className='adding-box'>
                <Adding title={'ویژگی'} onClick={addClick}/>
            </div>
        </div>
    )
};