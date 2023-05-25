import styled from "styled-components";
import React from "react";

interface ChatLogBoxType {
    possession: string;
    text: string;
}

interface ChatLogBoxStyleType {
    possession: string;
}

const ChatLogBoxStyle = styled.div<ChatLogBoxStyleType>`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
  
  background-color: ${ props.possession === "other" ? "gray" : "blue" };
  color: ${ props.possession === "other" ? "black" : "white" };
  float: ${ props.possession === "other" ? "left" : "right" };
`;

const ChatLogBox = ({possession, text}: ChatLogBoxType) => {

    return (
        <ChatLogBoxStyle possession={possession}>
            {text}
        </ChatLogBoxStyle>
    );
};

export { ChatLogBox }