import React from 'react';


export const FormBoxModelAndIcon =({img,selectModelIcon,onClick})=>{
    return(
        <div className={`model-icon-box ${selectModelIcon? `border-active`: `border-default`}` }
             onClick={onClick}>
            <img src={require(`../../assets/images/${img}.svg`)} />
        </div>
    )
};