//import styled components
import styled from "styled-components";
//import React Hooks
import React from "react";
import {useRef} from "react";
//import component
import {Input} from "../atom/input";
import {SubmitButton} from "@/component/atom/submitButton";
//import helper
import {apiFetch} from "@/helper/apiFetch";

interface InputChattingContainerType {
    setMyChatLog: React.Dispatch<React.SetStateAction<Array<string>>>;
    myChatLog: Array<string>;
    setOtherChatLog: React.Dispatch<React.SetStateAction<Array<string>>>;
    otherChatLog: Array<string>;
}

const InputChattingContainerStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
`;

const InputChattingContainer = ({setMyChatLog, myChatLog, setOtherChatLog, otherChatLog}: InputChattingContainerType) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickEvent = () => {
        const myChatLogArrTemp: Array<string> = [...myChatLog];
        const otherChatLogArrTemp: Array<string> = [...otherChatLog];

        const inputValue = inputRef.current?.value;

        if(inputValue !== undefined) {
            myChatLogArrTemp.push(inputValue);
            otherChatLogArrTemp.push("안녕하세요");
            setMyChatLog(myChatLogArrTemp);
            setOtherChatLog(otherChatLogArrTemp);
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    }

    return (
        <InputChattingContainerStyle>
            <Input placeholder="채팅 내용을 입력하세요." type="text" inputRef={inputRef} />
            <SubmitButton text="chat" handleClickEvent={handleClickEvent} />
        </InputChattingContainerStyle>
    );
};

export { InputChattingContainer }