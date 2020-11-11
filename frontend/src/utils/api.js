import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 5000,
    headers: {
        "Authorization": "JWT " + localStorage.getItem('access_token'),
        "Content-Type": "application/json",
        "accept": "application/json"
    }
})



api.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        console.log("inside interceptor");
        console.log("error: ", error.response);

        // Prevent infinite loops
        if (error.response.status === 401 && originalRequest.url === api.baseURL + 'token/refresh/') {

            console.log("refresh token expired");
            window.location.href = '/login/';
            return Promise.reject(error);

        } else if (error.response.data.code === "token_not_valid"
            && error.response.status === 401
            && error.response.statusText === "Unauthorized") {

            const refreshToken = localStorage.getItem('refresh_token');
            console.log("access token expired")


            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                // exp date in token is expressed in seconds, while now() returns milliseconds: 
                const now = Math.ceil(Date.now() / 1000);
                console.log(tokenParts.exp);

                if (tokenParts.exp > now) {
                    return api.post('/token/refresh/',
                        { refresh: refreshToken })
                        .then((response) => {

                            localStorage.setItem('access_token', response.data.access);
                            localStorage.setItem('refresh_token', response.data.refresh);
                            api.defaults.headers['Authorization'] = "JWT " + response.data.access;
                            originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                            return api(originalRequest);

                        })
                        .catch(err => {
                            console.log(err)
                        });
                } else {
                    console.log("Refresh token is expired", tokenParts.exp, now);
                    window.location.href = '/login/';
                }
            } else {
                console.log("Refresh token not available.");
                window.location.href = '/login/';
            }
        } // specific error handling done elsewhere 
        return Promise.reject(error);
    });

export default api;


