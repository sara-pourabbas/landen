import React from 'react';
import {FormBoxLabel} from "./FormBoxLabel";
import {FormBoxTitle} from "./FormBoxTitle";
import {RectangleFontSize} from "./RectangleFontSize";
 const getArrayLabelFontSize = (box)=>{
    var arr = [];
    if (arr.length===0)
        if(box==='header')
            arr.push('عنوان اصلی');
        if(box==='title')
            arr.push('عنوان اصلی' , 'زیرعنوان');
        if(box==='text')
            arr.push('عنوان اصلی' , 'توضیحات' , 'عنوان دکمه');
        if(box==='stepByStep')
            arr.push('عنوان اصلی' , 'توضیحات' , 'عنوان مرحله');
        if(box==='features')
            arr.push('عنوان اصلی' , 'توضیحات' , 'عنوان بخش');
        if(box==='pricing')
            arr.push('عنوان اصلی' , 'عنوان بسته' , 'زیر عنوان ' , 'قیمت' , 'عنوان ویژگی' );
        if(box==='testimonials')
            arr.push('عنوان اصلی' , ' نظردهنده' , ' توضیحات ' , 'نظر' );
        if(box==='peresLogo')
            arr.push('عنوان اصلی' , 'عنوان لوگو' );
         if(box==='ctaBox')
            arr.push('عنوان اصلی' , 'عنوان دکمه' , 'زیر عنوان ');
         if(box==='leadCaptures')
            arr.push('عنوان اصلی' , ' توضیحات' , ' عنوان دکمه ' , 'عنوان فیلد' );
        if(box==='media')
            arr.push('عنوان اصلی' , 'توضیحات ' );
        if(box==='faq')
            arr.push('عنوان اصلی' , 'سوال' , 'جواب ' );
        if(box==='team')
            arr.push('عنوان اصلی' , 'نام' , 'زیر عنوان ' );
    return arr
};

export  const FormBoxFontSize =({box,clickFontSizeItem,fontSizeState})=>{

        return(
            <div className='  mb-2'>
                <FormBoxTitle title={'سایز فونت ها'} />
                {
                    getArrayLabelFontSize(box).map((el,i)=>{
                        return(
                            <div className='d-flex align-items-center mb-2'>
                                <FormBoxLabel key={i+1} title={el}/>

                                <RectangleFontSize clickFontSizeItem={clickFontSizeItem} fontSizeState={fontSizeState} />
                            </div>
                        )
                    })
                }
            </div>
        )

}