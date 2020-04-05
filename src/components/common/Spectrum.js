import React from 'react';
import {Col, Row} from "reactstrap";

export const Spectrum =(props)=>{
    const {} = props;
    return(
        <div className='w-400'>
            <div className=' sub-medium-title mt-5'>
                طیف رنگ بندی را انتخاب کنید
            </div>
            <Row className='mt-3'>
                <Col md={6} className='pr-0'>
                    <div className='spectrum'>
                        <div className='bg-spectrum-one w-50px  h-100 spectrum-radius-right' />
                        <div className='bg-spectrum-two w-50px h-100' />
                        <div className='bg-spectrum-three w-50px h-100' />
                        <div className='bg-spectrum-four w-50px h-100 spectrum-radius-left' />
                    </div>
                </Col>
                <Col md={6} className='pl-0'>
                    <div className='spectrum '>
                        <div className='bg-spectrum-five w-50px h-100 spectrum-radius-right' />
                        <div className='bg-spectrum-six w-50px h-100' />
                        <div className='bg-spectrum-seven w-50px h-100' />
                        <div className='bg-spectrum-eight w-50px h-100 spectrum-radius-left' />
                    </div>
                </Col>
            </Row>
        </div>
    )
};