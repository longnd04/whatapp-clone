import { useRecipient } from "@/hooks/userRecipient";
import { Conversation } from "@/types";
import styled from "styled-components";
import RecipientAvatar from "./RecipientAvater";
import { useRouter } from "next/router";
const StyleContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-all;
    :hover{
        background-color: #e9eaeb;
    }
    
`

const ConversationSelect = ({ id, conversationUsers }: { id: string; conversationUsers: Conversation['users'] }) => {
    const { recipient, recipientEmail } = useRecipient(conversationUsers)
    const router = useRouter()
    const onSelectConversation = () => {
        router.push(`/conversations/${id}`)
    }
    return (
        <StyleContainer onClick={onSelectConversation}>
            <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
            <span>{recipientEmail}</span>
        </StyleContainer>
    )
}

export default ConversationSelect