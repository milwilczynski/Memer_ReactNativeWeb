import {history} from "../../store/history";

class ErrorHandler {
    static _ErrorHandler(response) {
        if (!response.ok) {
            history.push({
                pathname: '/error',
                search: '?error=' + response.status,
                state: {error: response.status}
            })
        };
        return response;
    }
}

export default  ErrorHandler;