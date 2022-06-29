import axios from './axios';
import { Task } from '../interfaces/Task';


export const getTasks = async () => await axios.get('/tasks');


//Para enviar al Backend
export const createTask = async (task: Task ) => 
await axios.post('/tasks', task);
