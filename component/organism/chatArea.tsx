import styled from "styled-components";
import {useState} from "react";
import {ChatLogArea} from "@/component/molecule/chatLogArea";
import {InputChattingContainer} from "@/component/molecule/inputChattingContainer";
import {CenterContainer} from "@/component/atom/centerContainer";

interface ChatAreaType {
    className?: string;
}

const ChatAreaStyle = styled.div`
  width: 500px;
  height: 700px;
  
  margin: 100px auto;
`;

const ChatLogAreaStyle = styled(ChatLogArea)`
  height: 670px;
  border: 1px solid black;
`;

const ChatArea = ({className}: ChatAreaType) => {

    const [ myChatLog, setMyChatLog ] = useState<Array<string>>([]);
    const [ otherChatLog, setOtherChatLog ] = useState<Array<string>>([]);

    return (
        <ChatAreaStyle className={className}>
            <CenterContainer>
                <h2>Chan GPT</h2>
            </CenterContainer>
            <ChatLogAreaStyle myChatLog={myChatLog} otherChatLog={otherChatLog} />
            <InputChattingContainer setMyChatLog={setMyChatLog} myChatLog={myChatLog} otherChatLog={otherChatLog} setOtherChatLog={setOtherChatLog} />
        </ChatAreaStyle>
    )
}

export {ChatArea};