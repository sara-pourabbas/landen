import React from 'react';
import {RectangleItem} from "./RectangleItem";

export const RectangleFontSize =({clickFontSizeItem,fontSizeState})=>{
    return(
        <div className='d-flex'>
            {['کوچک' , 'متوسط' , 'بزرگ'].map((el,i)=>{
                return(
                    <RectangleItem key={i+1} title={el}
                                   selectItem={fontSizeState===i+1}
                                   onClick={()=>clickFontSizeItem(fontSizeState , i+1)}
                    />
                )
            })
            }
        </div>
    )
};