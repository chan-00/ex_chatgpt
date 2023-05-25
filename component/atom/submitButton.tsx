import styled from "styled-components";
import React from "react";
import {Button} from "@/component/atom/button";

const SubmitButtonStyle = styled(Button)`
  color: white;
  background-color: blue;
  border: 1px solid blue;
  
  &:hover {
    color: blue;
    background-color: white;
  }
`;

interface SubmitButtonType {
    text: string;
    handleClickEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const SubmitButton = ({text, handleClickEvent, className}: SubmitButtonType) => {

    return (
        <SubmitButtonStyle className={className} handleClickEvent={handleClickEvent} text={text} />
    );
};

export { SubmitButton }