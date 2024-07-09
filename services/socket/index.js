import { io } from 'socket.io-client'
const URL = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_SERVER_URL : process.env.SERVER_URL;

export const socket = io(URL, { autoConnect: false, withCredentials: true });