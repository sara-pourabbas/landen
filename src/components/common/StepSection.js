import React from 'react';
import {FormBoxTitle} from "./FormBoxTitle";
import {FormBoxInput} from "./FormBoxInput";
import {FormBoxTextarea} from "./FormBoxTextarea";
import {VisualIdentity} from "./VisualIdentity";


export const StepSection =(props)=>{
    const {countSection,sectionTitle ,stepByStep} = props;
    return(
        <div className='inside-section mt-5 '>
            <div className='inside-section-title mb-2'>
                <span>{sectionTitle}</span> <span>{countSection}</span>
            </div>
            <FormBoxTitle title={'محتوا'}/>
            <FormBoxInput placeholder={` عنوان  ${sectionTitle}`}/>
            <FormBoxTextarea placeholder={'توضیحات'}/>
            <FormBoxInput placeholder={'لینک'}/>
            {stepByStep?
                <VisualIdentity box={'stepByStep'} visual={'model'} />
                :
                <VisualIdentity box={'features'} visual={'model'} />
            }

        </div>
    )
};