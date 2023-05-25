import styled from "styled-components";
import React from "react";

interface CenterContainerType {
    children: React.ReactNode;
}

const CenterContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContainer = ({children}: CenterContainerType) => {
    return (
        <CenterContainerStyle>
            {children}
        </CenterContainerStyle>
    )
}

export {CenterContainer};