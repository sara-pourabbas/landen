import React from 'react';
import {Button} from "reactstrap";

export const NextStepButton =(props)=>{
    const {onClick,disabled} = props;
    return(
        <div className='d-flex justify-content-center mt-4 '>
            {/*<Button className=' prev-btn'>  قبلی </Button>*/}
            <Button className=' next-btn' disabled={disabled}
                    onClick={onClick}
            >  مرحله بعد </Button>
        </div>
    )
};