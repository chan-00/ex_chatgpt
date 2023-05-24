import styled from "styled-components";
import React from "react";
import {Input} from "../atom/input";
import {SubmitButton} from "@/component/atom/submitButton";
import {apiFetch} from "@/helper/apiFetch";

const InputChattingContainerStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
`;


const InputChattingContainer = () => {

    const handleClickEvent = () => {

    }

    return (
        <InputChattingContainerStyle>
            <Input placeholder="채팅 내용을 입력하세요." type="text" />
            <SubmitButton text="chat" handleClickEvent={handleClickEvent} />
        </InputChattingContainerStyle>
    );
};

export { InputChattingContainer }