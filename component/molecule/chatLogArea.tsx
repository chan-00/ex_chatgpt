import styled from "styled-components";
import {ChatLogBox} from "@/component/atom/chatLogBox";

interface ChatLogAreaType {
    className?: string;
    myChatLog: Array<string>;
    otherChatLog: Array<string>;
}

const ChatLogAreaStyle = styled.div`
  width: 100%;
`;

const ChatLogBoxStyle = styled(ChatLogBox)`
  width: 40%;
`;

const ChatLogArea = ({className, myChatLog, otherChatLog}: ChatLogAreaType) => {

    return (
        <ChatLogAreaStyle className={className}>
            {myChatLog.map((chat: string, index) => {
                return (
                    <div key={index}>
                        <ChatLogBox possession="my" text={chat} />
                        <ChatLogBox possession="other" text={otherChatLog[index]} />
                    </div>
                );
            })}
        </ChatLogAreaStyle>
    )
}

export {ChatLogArea};