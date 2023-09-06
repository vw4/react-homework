import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://64f8a7e1824680fd217fe52a.mockapi.io"
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
