import Axios from "axios";

if (!process.env.REACT_APP_API_ENDPOINT) {
    throw new Error('mockapi.io endpoint is not set (REACT_APP_API_ENDPOINT)');
}

const axios = Axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
});

export const getTasks = () => {
    return axios.get("/tasks");
};

export const addTask = ({value, completed}) => {
    return axios.post("/tasks", {value, completed});
};

export const updateTask = (id, {value, completed}) => {
    return axios({
        url: `/tasks/${id}`,
        method: "put",
        data: {value, completed},
    });
};

export const deleteTask = (id) => {
    return axios({
        url: `/tasks/${id}`,
        method: "delete",
    });
};
