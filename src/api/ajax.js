import * as axios from "axios";

const baseUrl = 'http://localhost:8080/';

const instance = axios.create({
    // withCredentials: true,
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
    // headers: {
    //     "API-KEY": "76646adc-4458-4b43-823c-8843c82294b7"
    // }
})

let config = {
    headers: {
        "X-Token": localStorage.getItem("token")
    }
}

export const authAPI = {
    signin(name, login, email, password){
        console.log(name);
        return instance.post(`account/register`, JSON.stringify({name, login, email, password}))
            // .then(response=>console.log(response)).catch(response=>console.log(response.error))
    },
    login(name, password){
        return instance.post(`account/authenticate`, JSON.stringify({name, password}))
        // .then(response=>console.log(response)).catch(response=>console.log(response.error))
    },
}

export const houseAPI = {
    createHome(name, creator, token){
        return instance.post(`house/addHouse`,  JSON.stringify({name, creator}),{
            headers: {
                "X-Token": token
            }
        })
    },
    joinHome(userId, homeId, token) {
        console.log("token in joinHome " + token);
        return instance.post(`application/apply?userId=${userId}&houseId=${homeId}`, null, {
            headers: {
                "X-Token": token
            }
        })
    }
}