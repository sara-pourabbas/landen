
import React from "react";
export const TextErrors=(errors,touched)=>{
    let count = 0;
    if(Object.keys(touched).length>1){//If the number of inputs that touched was more than one
        Object.keys(errors).forEach(a=>{//loop in errors
            if(touched[a])
                count++;
        })
    }
    if(count>1){
        return <div className="input-feedback">
            <div className='error-dot ml-2' />
            مقادیر وارد شده اشتباه است
        </div>
    }
};