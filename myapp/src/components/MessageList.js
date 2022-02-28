import { MessageList } from "@material-ui/core";
import propTypes from "prop-types";

export const MessageList = (props) => {
    return (<List> {
        props.messageList.map((item) => (<Message key={item.id} {...item} />
        ))
    } </List>
    );
};

MessageList.propTypes = {
    messageList: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            text: propTypes.string,
            author: propTypes.string
        })
    )
};

MessageList.defaultProps = {
    messageList: []
};