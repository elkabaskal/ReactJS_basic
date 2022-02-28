import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "./ChatList.js";
import { MessageInput } from "./MessageInput.js";
import { MessageList } from "./MessageList.js";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColums: "200px 1fr"
    }
});

export const Chat = () => {
    const classes = useStyles();
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");


    const sendMassage = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text,
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };


    const resetForm = () => {
        setValue("");
    };


    const onSubmitMessage = (event) => {
        event.preventDefault();
        sendMassage("User", value);
        resetForm();
    };


    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };


    useEffect(() => {
        if (messageList.length === 0) {
            return;
        }
        const tail = messageList[messageList.length - 1];
        if (tail.author === "Bot") {
            return;
        }
        sendMassage("Bot", "Please waiting!");
    }, [messageList]);


    return (
        <div>
            <form onSubmit={onSubmitMessage}>
                <input onChange={onChangeMessageInput}
                    placeholder="type message"
                    value={value}
                    type="text">
                </input>
                <button>send</button>
            </form>
            <ul>
                {
                    messageList.map((item, index) => (
                        <li key={index}>
                            {item.author} - {item.text}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}; 