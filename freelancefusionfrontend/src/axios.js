// import axios from "axios";

// // Create an Axios instance
// const axiosClient = axios.create({
//     baseURL: "http://127.0.0.1:8000/api",
//     mode: "no-cors",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
// });

// // Request interceptor to add the Authorization header
// axiosClient.interceptors.request.use(
//     (config) => {
        
//         const accessToken = localStorage.getItem("accessToken");
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Response interceptor to handle errors
// axiosClient.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             localStorage.removeItem("accessToken");
//             window.location.href = "/login";
//         }
//         return Promise.reject(error);
//     }
// );

// export default axiosClient;




import axios from "axios";

// Create an Axios instance
const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Request interceptor to add Authorization header and handle FormData
axiosClient.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        
        // Add Authorization header if token exists
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        // Handle FormData content type
        if (config.data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("accessToken");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosClient;