
import React from "react";


export const Step = ({isActive,title}) =>{
    return <div className='step'>
        <div className={`before ${isActive ? "bg-blue-active" : "bg-default-header-menu"}`}/>
        <div className={`text ${isActive ? "text-active" : "text-default-header-menu"}`}> {title}</div>
        <div className={`after ${isActive ? "bg-blue-active" : "bg-default-header-menu"}`}/>
    </div>;
}
