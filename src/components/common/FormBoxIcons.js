import React from 'react';
import {FormBoxLabel} from "./FormBoxLabel";
import {FormBoxModelAndIcon} from "./FormBoxModelAndIcon";


export const FormBoxIcons =()=>{
    return(
        <div className='d-flex  my-2'>
            <FormBoxLabel title={'آیکون ها'}/>
            <div className='d-flex'>
                {
                    ['stopwatch' , 'contract' , 'agenda' , 'bookmark'].map((el,i)=>{
                        return(
                            <FormBoxModelAndIcon key={i+1} img={el}/>
                        )
                    })
                }
            </div>
        </div>
    )
};