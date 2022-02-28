import { List } from "@material-ui/core";
import propTypes from "prop-types";
import { Chat } from "./Chat";

export const ChatList = ({ List }) => {
    return (
        <List>
            {List.map((item) => (
                <Chat key={item.id} {...item} />
            ))}
        </List>
    );
};

ChatList.propTypes = {
    list: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.string.isRequired,
                name: propTypes.string
            })
    )
};
