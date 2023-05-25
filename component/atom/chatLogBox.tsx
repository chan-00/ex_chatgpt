import styled from "styled-components";
import React from "react";

interface ChatLogBoxType {
    possession: string;
    text: string;
    className?: string;
}

interface ChatLogBoxStyleType {
    possession: string;
}

const ChatLogBoxStyle = styled.div<ChatLogBoxStyleType>`
  text-align: ${ props => props.possession === "other" ? "left" : "right" };
  
  margin: 10px 0;
`;

const ChatLogStyle = styled.span<ChatLogBoxStyleType>`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
  
  background-color: ${ props => props.possession === "other" ? "gray" : "blue" };
  color: ${ props => props.possession === "other" ? "black" : "white" };
`;

const ChatLogBox = ({possession, text, className}: ChatLogBoxType) => {

    return (
        <ChatLogBoxStyle possession={possession} className={className}>
            <ChatLogStyle possession={possession}>
                {text}
            </ChatLogStyle>
        </ChatLogBoxStyle>
    );
};

export { ChatLogBox };