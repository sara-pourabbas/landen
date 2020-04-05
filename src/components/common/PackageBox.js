import React from "react";
import {Col} from "reactstrap";

export const PackageBox = (props) => {
    const {packageClass,click,buttonValue,img,desc,price,unit,longDate} = props;
    return (
        <Col md={4} sm={12}>
            <div className={`package-box ${packageClass}`} onClick={click}>
                <div className='d-flex justify-content-between align-items-center'>
                    <button className={packageClass} >{buttonValue}</button>
                    {img}
                </div>
                <div className='desc'>{desc} </div>
                <div className='price'>{price}
                    <span className='span-one '>{unit}</span>
                    <span className='span-two '> {longDate} </span>
                </div>
            </div>
        </Col>
    )
};