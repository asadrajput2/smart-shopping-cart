import { connectionOpened, setNewItem, connectionClosed } from "../reducers/itemsSlice";



const itemMiddleware = () => {
    let sock = null;

    const onOpen = store => {
        store.dispatch(connectionOpened());
        console.log("chat opened");
    }

    const onMessage = store => (response) => {
        const response_data = JSON.parse(response.data);

        switch (response_data.type) {
            case "send_new_item":
                store.dispatch((setNewItem(response_data.item)));
                break;
            default: break;
        }
    }

    const onClose = store => {
        console.log("chat closed");

        store.dispatch(connectionClosed());
    }

    return store => next => action => {
        switch (action.type) {
            case "itemsList/ws_connect":
                console.log("inside ws_connect midleware")
                if (sock !== null) {
                    console.log("inside ws_connect if")
                    sock.close();
                }

                sock = new WebSocket(action.payload);

                sock.onopen = onOpen(store);
                sock.onmessage = onMessage(store);
                sock.onclose = onClose(store);

                break;

            case "itemsList/ws_disconnect":
                if (sock !== null) {
                    sock.close();
                }

                sock = null;

                console.log("connection closed");
                break;

            case "itemsList/ws_send_message":
                console.log("sending a message", action.payload);

                sock.send(JSON.stringify({
                    command: "SEND_NEW_MESSAGE",
                    message: action.payload
                }));
                break;

            default:
                console.log("Next action: ", action);
                next(action);
                break;
        };
    };
}

export default itemMiddleware();