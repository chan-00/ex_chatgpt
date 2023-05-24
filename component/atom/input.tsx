import styled from "styled-components";
import React from "react";

const InputStyle = styled.input`
  padding: 5px;
`;

interface InputType {
    placeholder: string;
    className?: string;
    type: string;
}

const Input = ({placeholder, type, className}: InputType) => {

    return (
        <InputStyle className={className} type={type} placeholder={placeholder} />
    );
};

export { Input }