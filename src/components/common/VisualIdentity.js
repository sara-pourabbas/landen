import React, { useState } from 'react';
import {FormBoxLabel} from "./FormBoxLabel";
import {FormBoxTitle} from "./FormBoxTitle";
import {RectangleItem} from "./RectangleItem";
import {FormBoxModelAndIcon} from "./FormBoxModelAndIcon";
import {FormBoxIcons} from "./FormBoxIcons";
import {UploadBox} from "./UploadBox";


 const getArrayVisualItemTitle = (box)=>{
    var arr = [];
    if (arr.length===0)
        if(box==='text')
            arr.push('تصویرسازی' , 'آپلود' , 'هیچکدام');
        if(box==='stepByStep')
            arr.push('تصویرسازی' , 'آیکن' , 'آپلود');
        if(box==='features')
            arr.push('تصویرسازی' , 'آیکن' , 'آپلود' , 'هیچکدام');
        if(box==='pricing')
            arr.push( 'آیکن' , 'هیچکدام');
        if(box==='testimonials')
            arr.push( 'آپلود' , 'هیچکدام');

    return arr
};


const getVisual = (visual,imagePreviewUrl,onChange)=>{
    switch (visual) {
        case 'model':
            return (
                <div className='d-flex  mt-2'>
                    <FormBoxLabel title='مدل'/>
                    <div className='d-flex'>
                        {
                            ['planet-human' , 'map' , 'planet' , 'map'].map((el,i)=>{
                                return(
                                    <FormBoxModelAndIcon key={i+1} img={el}  />
                                )
                            })
                        }
                    </div>
                </div>
            );
        case 'icon':
            return(
                <FormBoxIcons/>
            );
        case 'upload':
            return(
                <div className='d-flex mt-2 position-relative'>
                    <div className='commenter-photo-label'><FormBoxLabel title='آپلود تصویر نظردهنده'/></div>
                    <div className='commenter-photo'>
                        <UploadBox imagePreviewUrl={imagePreviewUrl} onChange={onChange} />
                    </div>
                </div>
            );
        case 'none':
            return(
                ''
            );
    }
};

export const VisualIdentity =(props)=>{
    const {box,imagePreviewUrl,onChange,visual} = props;
    return(
        <div className='Visual-identity'>
           <FormBoxTitle title={'هویت بصری'}/>
            <div className='d-flex align-items-center mt-2'>
                <FormBoxLabel title='نوع'/>
                    {
                        getArrayVisualItemTitle(box).map((el,i)=>{
                            return(
                                    <RectangleItem key={i+1} title={el}

                                    />
                                )
                        })
                    }
            </div>
            {getVisual(visual,imagePreviewUrl,onChange)}
        </div>
    )
};