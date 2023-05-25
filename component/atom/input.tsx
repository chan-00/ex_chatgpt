import styled from "styled-components";
import React from "react";

const InputStyle = styled.input`
  padding: 5px;
`;

interface InputType {
    placeholder: string;
    className?: string;
    type: string;
    inputRef: React.RefObject<HTMLInputElement>
}

const Input = ({placeholder, type, className, inputRef}: InputType) => {

    return (
        <InputStyle className={className} type={type} placeholder={placeholder} ref={inputRef} />
    );
};

export { Input }