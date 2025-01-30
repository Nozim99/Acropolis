import axios from "axios";
import {generateMessage} from "./generateMsg";


interface MessageData {
    name?: string,
    phone?: string,
    email?: string,
    company?: string,
    description?: string,
}


const base_url = 'https://api.telegram.org';
const bot_key = "7872515241:AAFz3fAH1uoZ1ZmTR6lATwVKWCBYWV9uHc0";
const channel_id = "-1002337571256";

export const sendMessage = (data: MessageData) => {

    const url = `${base_url}/bot${bot_key}/sendMessage`;

    return axios.post(url, {
        chat_id: channel_id,
        text: generateMessage(data),
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}