import styled from "styled-components";
import React from "react";

const SubmitButtonStyle = styled.button`
  color: white;
  background-color: blue;
`;

interface SubmitButtonType {
    text: string;
    handleClickEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const SubmitButton = ({text, handleClickEvent, className}: SubmitButtonType) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        handleClickEvent?.(e);
    }

    return (
        <SubmitButtonStyle className={className} onClick={handleClick}>
            {text}
        </SubmitButtonStyle>
    );
};

export { SubmitButton }