import styled from "styled-components";
import {ChatLogBox} from "@/component/atom/chatLogBox";

interface ChatLogAreaType {
    className?: string;
    chatLog: Array<Array<string>>;
}

const ChatLogAreaStyle = styled.div`
  width: 100%;
`;

const ChatLogArea = ({className, chatLog}: ChatLogAreaType) => {

    return (
        <ChatLogAreaStyle className={className}>
            {chatLog.map((chat: Array<string>) => {
                return (
                    <>
                        <ChatLogBox possession="my" text={chat[0]} />
                        <ChatLogBox possession="other" text={chat[1]} />
                    </>
                );
            })}
        </ChatLogAreaStyle>
    )
}

export {ChatLogArea};