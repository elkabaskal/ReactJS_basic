import { Container, Button, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useTaskList } from "../../hooks/useTaskList";
import { useCacheTaskList } from "../../hooks/useCacheTaskList";
import { useFilterByStatus } from "../../hooks/useFilterByStatus";
import { useTaskFilteredByStatus } from "../../hooks/useTaskFilteredByStatus";
import { useCreateTaskForm } from "../../hooks/useCreateTaskForm";
//import { FILTER_BY_STATUS_ALL, FILTER_BY_STATUS_COMPLETED, FILTER_BY_STATUS_IN_WORK } from "../../constants";
import { Link, useParams } from "react-router-dom";
//import { getTaskLink } from "../../navigation";
import { useState, useEffect } from "react";



export function Tasks() {

    const { projectId } = useParams();

    const { addNewTask, taskList, changeStatus, setTaskList } = useTaskList();

    useCacheTaskList({ setTaskList, taskList })

    const { filterStatus, onChangeStatus } = useFilterByStatus();

    const { filteredList } = useTaskFilteredByStatus({ list: taskList, filterStatus });

    const {
        handleSubmit,
        onChangeInput,
        inputValue,
    } = useCreateTaskForm({ onSubmit: addNewTask });

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
        <Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100vh',
            }}
            maxWidth="xs">
            <Paper
                sx={{
                    padding: 2,
                    height: '80vh',
                    width: '100%'
                }}
                elevation={3}
            >
                <Box component={"form"} onSubmit={handleSubmit}>
                    <form onSubmit={onSubmitMessage}>
                        <input onChange={onChangeMessageInput}
                            placeholder="type message"
                            value={value}
                            type="text">
                        </input>
                        <Button type="submit" variant="contained">save</Button>
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
                </Box>
            </Paper>
        </Container>
    );
}