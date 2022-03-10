import { nanoid } from 'nanoid';
import { Tasks } from "../Tasks";
import { Link, Route } from "react-router-dom";
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { getTasksLink } from "../../navigation";

export const projects = Array.from({
    length: 10,
}).map((_, index) => ({
    id: nanoid(),
    name: `chats ${index}`
}))

export const Projects = ({ children }) => {

    return <div>
        <h1>
            Chats
        </h1>

        <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={3}>
                <List>
                    {
                        projects.map((item) => <ListItem
                            component={Link}

                            to={getTasksLink(item.id)}
                        >
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItem>)
                    }
                </List>
            </Grid>
            <Grid item xs={9}>
                {children}
            </Grid>
        </Grid>
    </div>
}