import React from "react";

import {InputGroup,FormGroup,Input,InputGroupAddon,InputGroupText} from "reactstrap";

export const InputCustom = (props) => {
    const {id,type,value,onChange,onBlur,className,icon,alt,placeHolder,...otherProps} = props;
    return (
        <FormGroup>
            <InputGroup className={className}>
                <Input
                    {...otherProps}
                    id={id} type={type}  value={value}
                       onChange={onChange} onBlur={onBlur} placeholder={placeHolder}  />
                <InputGroupAddon addonType="append">
                    <InputGroupText>
                        {icon}
                        {/*<img src={require(`../assets/images/${icon}`)} alt={alt} className='input-icon' />*/}
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </FormGroup>
    )
};