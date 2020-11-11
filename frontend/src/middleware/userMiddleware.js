
export function saveTokensMiddleware(store) {
    return function (next) {
        return function (action) {

            if (action.type === 'user/loginUser/fulfilled') {
                localStorage.setItem('access_token', action.payload.access);
                localStorage.setItem('refresh_token', action.payload.refresh);
            }

            next(action);

        }
    }
}